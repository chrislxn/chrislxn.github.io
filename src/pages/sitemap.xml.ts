import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { absoluteURL, blogPath } from "@/data/profile";
import { postPath, translationPaths } from "@/lib/blog";
export const prerender = true;
const escapeXML = (text: string) => text.replace(/[<>&'\"]/g, ch => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[ch]!);
export const GET: APIRoute = async () => {
  const posts = await getCollection("blog", ({ data }) => !data.sample);
  const blogAlternates = Object.fromEntries((["en", "zh"] as const).filter(locale => posts.some(post => post.data.lang === locale)).map(locale => [locale, blogPath(locale)]));
  const entries = [
    { path: "/", alternates: { en: "/", zh: "/zh/" }, modified: undefined as string | undefined },
    { path: "/zh/", alternates: { en: "/", zh: "/zh/" }, modified: undefined as string | undefined },
    ...(["en", "zh"] as const).filter(locale => posts.some(post => post.data.lang === locale)).map(locale => ({ path: blogPath(locale), alternates: blogAlternates, modified: undefined })),
    ...posts.map(post => ({ path: postPath(post), alternates: translationPaths(post, posts), modified: post.data.updatedAt || post.data.publishedAt })),
  ];
  const urls = entries.map(entry => `<url><loc>${escapeXML(absoluteURL(entry.path))}</loc>${entry.modified ? `<lastmod>${escapeXML(entry.modified)}</lastmod>` : ""}${Object.entries(entry.alternates).map(([lang, path]) => `<xhtml:link rel="alternate" hreflang="${lang === "zh" ? "zh-Hans" : "en"}" href="${escapeXML(absoluteURL(path))}"/>`).join("")}${entry.alternates.en ? `<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXML(absoluteURL(entry.alternates.en))}"/>` : ""}</url>`).join("\n");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
