export type Locale = "en" | "zh";
export function chooseHomeLocale(saved: string | null, languages: readonly string[]): Locale {
  if (saved === "en" || saved === "zh") return saved;
  return /^zh(?:-|$)/i.test(languages[0] ?? "") ? "zh" : "en";
}
