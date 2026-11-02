import type { APIRoute } from "astro";
import { profileMarkdown } from "@/data/profile";
export const prerender = true;
export const GET: APIRoute = () => new Response(profileMarkdown("zh"), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
