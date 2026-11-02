import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";
const chooserExports = {};
vm.runInNewContext(ts.transpileModule(readFileSync(new URL("../src/lib/locale-preference.ts", import.meta.url), "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports: chooserExports });
const { chooseHomeLocale } = chooserExports;

const source = readFileSync(new URL("../src/components/LanguagePreference.astro", import.meta.url), "utf8").split("<script>")[1].split("</script>")[0].replace(/^\s*import .*;\s*$/m, "");
const script = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
function visit({ path = "/", languages = ["en-US"], saved = null, storageBlocked = false } = {}) {
  const redirects = [], listeners = {}, storage = new Map(saved ? [["site-language", saved]] : []);
  const links = ["en", "zh"].map(language => ({ dataset: { language }, addEventListener: (_event, callback) => { listeners[language] = callback; } }));
  vm.runInNewContext(script, {
    chooseHomeLocale,
    localStorage: {
      getItem: key => { if (storageBlocked) throw Error("blocked"); return storage.get(key) ?? null; },
      setItem: (key, value) => { if (storageBlocked) throw Error("blocked"); storage.set(key, value); },
    },
    navigator: { languages, language: languages[0] },
    window: { location: { pathname: path, search: "?ref=link", hash: "#about", replace: url => redirects.push(url) } },
    document: { querySelectorAll: () => links },
  });
  return { redirects, listeners, storage };
}
test("Chinese browser enters Chinese homepage and retains query and fragment", () => {
  assert.deepEqual(visit({ languages: ["zh-CN", "en"] }).redirects, ["/zh/?ref=link#about"]);
  assert.equal(chooseHomeLocale(null, ["zh-Hant-TW"]), "zh");
});
test("primary browser language decides the initial locale", () => {
  assert.deepEqual(visit({ languages: ["en-CA", "zh"] }).redirects, []);
  assert.equal(chooseHomeLocale(null, []), "en");
});
test("saved manual preference wins over the browser language", () => {
  assert.deepEqual(visit({ languages: ["zh"], saved: "en" }).redirects, []);
  assert.equal(visit({ languages: ["en"], saved: "zh" }).redirects.length, 1);
});
test("direct Chinese and article URLs remain stable", () => {
  for (const path of ["/zh/", "/blog/example/", "/zh/blog/example/"]) assert.deepEqual(visit({ path, languages: ["zh"], saved: "en" }).redirects, []);
});
test("manual language links persist their preference", () => {
  const state = visit();
  state.listeners.zh(); assert.equal(state.storage.get("site-language"), "zh");
  state.listeners.en(); assert.equal(state.storage.get("site-language"), "en");
});
test("blocked storage does not break navigation or language detection", () => {
  const state = visit({ languages: ["zh"], storageBlocked: true });
  assert.equal(state.redirects.length, 1);
  assert.doesNotThrow(() => state.listeners.en());
});
