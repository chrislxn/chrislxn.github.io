import type { APIRoute } from "astro";
import { absoluteURL } from "@/data/profile";
export const prerender = true;
export const GET: APIRoute = () => new Response(`<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${absoluteURL("/sitemap.xml")}</loc></sitemap></sitemapindex>`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
