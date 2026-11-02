import type { APIRoute } from "astro";
import { absoluteURL, getProfile } from "@/data/profile";
export const prerender = true;
export const GET: APIRoute = () => {
  const profile = getProfile();
  return new Response(`# ${profile.name} · ${profile.chineseName}\n\n> Official personal website / 官方个人网站。Bilingual profile of a University of Toronto Computer Science and Statistics student.\n\n## Identity / 身份\n\nName variants / 姓名写法: ${profile.alternateNames.join(" · ")}\n\nUniversity of Toronto, St. George campus / 多伦多大学 St. George 校区.\n\n## Profile / 个人资料\n\n- [English profile](${absoluteURL("/index.md")}): Biography, education, skills and contact.\n- [中文个人资料](${absoluteURL("/zh/index.md")}): 简体中文介绍、教育经历、技能与联系方式。\n- [Structured profile](${absoluteURL("/profile.json")}): The same public profile in JSON, in both languages.\n\n## Website / 网站\n\n- [English homepage](${absoluteURL("/")})\n- [中文首页](${absoluteURL("/zh/")})\n- [Sitemap](${absoluteURL("/sitemap.xml")})\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
