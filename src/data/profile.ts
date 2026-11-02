import { CONFIG } from "./config";
import { DATA } from "./resume";

export type Locale = "en" | "zh";
export const siteURL = CONFIG.site.url;
export const homePath = (locale: Locale) => locale === "zh" ? "/zh/" : "/";
export const blogPath = (locale: Locale) => locale === "zh" ? "/zh/blog/" : "/blog/";
export const absoluteURL = (path: string) => new URL(path, siteURL).href;
export const personID = absoluteURL("/#person");

export function getProfile(locale: Locale = "en") {
  const zh = locale === "zh";
  return {
    name: DATA.name,
    chineseName: "李叙宁",
    headline: zh ? "你好，我是李叙宁 Chris" : "Hi, I'm Chris",
    description: zh
      ? "我是李叙宁（Chris Xuning Li），多伦多大学三年级学生，主修计算机科学与统计学。关注计算机系统、网络基础设施、自托管与 AI 辅助工作流。"
      : DATA.description,
    summary: zh ? `2024 年 9 月，我从上海来到多伦多，开始在多伦多大学学习，目前攻读统计学与计算机科学双主修。我的主要兴趣是计算机系统、网络基础设施、自托管和家庭实验室（Homelab）技术。

我喜欢设计、部署和维护整合软件、硬件、网络与云服务的系统。多年来，我使用过 Linux、Docker、WordPress、Cloudflare、虚拟化技术以及多种自托管平台。

除了传统的软件开发，我也关注系统性思考：理解复杂系统如何运行、信息和资源如何流动，以及如何运用技术解决现实问题。最近，我也在探索 AI 辅助工作流、自动化，以及人工智能与系统设计的交叉领域。

在学业之外，我是一名技术爱好者，喜欢搭建个人基础设施、尝试新技术，并持续学习支撑现代数字世界的系统。` : DATA.summary,
    location: zh ? "加拿大安大略省多伦多" : DATA.location,
    avatar: DATA.avatarUrl,
    skills: DATA.skills.map(skill => skill.name),
    education: DATA.education.map((entry) => ({
      ...entry,
      school: zh ? ({ "Department of Computer Science, University of Toronto, St. George campus": "多伦多大学计算机科学系（St. George 校区）", "Department of Statistical Science, University of Toronto, St. George campus": "多伦多大学统计科学系（St. George 校区）", "GCE Advanced Level": "GCE A-Level" }[entry.school] || entry.school) : entry.school,
      degree: zh ? ({ "Computer Science - Major": "计算机科学主修", "Statistics - Major": "统计学主修", "A-Level — Further Mathematics, Mathematics, Physics, Computer Science": "A-Level：进阶数学、数学、物理、计算机科学" }[entry.degree] || entry.degree) : entry.degree,
      end: zh && entry.end === "Present" ? "至今" : entry.end,
    })),
    email: DATA.contact.email,
    links: {
      GitHub: DATA.contact.social.GitHub.url,
      LinkedIn: DATA.contact.social.LinkedIn.url,
    },
    labels: zh ? {
      about: "关于我", education: "教育经历", skills: "技能", contact: "联系我",
      contactText: "欢迎交流，可以通过邮件联系我：", blog: "文章", profile: "个人资料", location: "所在地",
    } : {
      about: "About", education: "Education", skills: "Skills", contact: "Get in Touch",
      contactText: "Want to chat? Email me at ", blog: "Blog", profile: "Profile", location: "Location",
    },
  };
}

export function personSchema(locale: Locale = "en") {
  const p = getProfile(locale);
  return {
    "@type": "Person", "@id": personID, name: p.name,
    alternateName: [p.chineseName, "Xuning Li", "chrislxn"],
    url: absoluteURL("/"), image: p.avatar, description: p.description,
    sameAs: Object.values(p.links),
    affiliation: { "@type": "CollegeOrUniversity", name: "University of Toronto", url: "https://www.utoronto.ca/" },
    knowsAbout: p.skills,
  };
}

export function profileMarkdown(locale: Locale) {
  const p = getProfile(locale);
  return `# ${p.name} · ${p.chineseName}\n\n${p.description}\n\n${p.labels.location}: ${p.location}\n\n## ${p.labels.about}\n\n${p.summary}\n\n## ${p.labels.education}\n\n${p.education.map(e => `- ${e.school}: ${e.degree} (${e.start}–${e.end})`).join("\n")}\n\n## ${p.labels.skills}\n\n${p.skills.join(", ")}\n\n## ${p.labels.contact}\n\n- Email: ${p.email}\n${Object.entries(p.links).map(([name, url]) => `- [${name}](${url})`).join("\n")}\n\n[English](${absoluteURL("/")}) · [简体中文](${absoluteURL("/zh/")})\n`;
}
