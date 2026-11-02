import type { CollectionEntry } from "astro:content";
import type { Locale } from "@/data/profile";
export const postPath = (post: CollectionEntry<"blog">) => `${post.data.lang === "zh" ? "/zh" : ""}/blog/${post.id}/`;
export function translationPaths(post: CollectionEntry<"blog">, posts: CollectionEntry<"blog">[]) {
  const group = post.data.translationKey
    ? posts.filter(item => item.data.translationKey === post.data.translationKey && !item.data.sample)
    : [post];
  return Object.fromEntries(group.map(item => [item.data.lang, postPath(item)])) as Partial<Record<Locale, string>>;
}
