import type { APIRoute } from "astro";
import { getProfile, absoluteURL, personID } from "@/data/profile";
export const prerender = true;
export const GET: APIRoute = () => new Response(JSON.stringify({
  id: personID, url: absoluteURL("/"),
  profiles: Object.fromEntries((["en", "zh"] as const).map(locale => {
    const { labels, headline, ...profile } = getProfile(locale);
    return [locale, profile];
  })),
}, null, 2), { headers: { "Content-Type": "application/json; charset=utf-8" } });
