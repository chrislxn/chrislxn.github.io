import type { APIRoute } from "astro";
import { absoluteURL } from "@/data/profile";
export const prerender = true;
export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\n\nSitemap: ${absoluteURL("/sitemap.xml")}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
