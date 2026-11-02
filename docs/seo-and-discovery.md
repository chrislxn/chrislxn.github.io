# 搜索收录与 AI 可读取性

本次实现把英文 `/` 和简体中文 `/zh/` 输出为完整 HTML，使用各自 canonical、`lang`、双向 `hreflang`、Open Graph 与 Person/ProfilePage JSON-LD。公开事实来自原站可见的介绍、教育、技能及联系方式；不会导出未启用的模板工作经历和项目。

## 上线后核验

1. 生产域名保持 `https://www.chrisxn.com`。当前 apex 域名已跳往 www；合并后核验 `/`、`/zh/`、`/robots.txt`、`/sitemap.xml`、`/llms.txt`、`/profile.json`、两个 Markdown URL 均返回 200。
2. 使用不执行 JS 的 HTTP 请求确认首页含正文；语言重定向只在访问 `/` 的浏览器脚本中发生，URL 本身始终有完整英文 HTML。直接访问 `/zh/` 或文章时保持其语言，手动选择保存到 localStorage。禁用 JS 或存储时，普通语言链接仍可使用。
3. 检查每页的 canonical、`hreflang` 与实际域名是否一致；检查分享头像 URL 的 HTTP 状态和 `Content-Type`。本次改用已有头像，未新增专用横版社交分享卡片。
4. 在 Vercel 的 Deployment Protection、Firewall、Bot Protection 设置中检查公开生产页是否对正常爬虫返回验证码或 403。不要为此全局关闭防护；用日志与官方验证方式识别爬虫后做必要配置。此仓库不能证明或更改这些控制台状态。
5. Markdown/JSON/TXT 文件在静态托管时的 MIME 类型由 `vercel.json` 补充。迁移其他主机时复制相应响应头设置。

## 国内搜索与真实网络可达性

- [百度搜索资源平台](https://ziyuan.baidu.com/site/index)：验证 `www.chrisxn.com` 的站点所有权，检查 robots、抓取诊断与抓取异常，再使用[普通收录](https://ziyuan.baidu.com/linksubmit/index)提交首页、中文首页及真实文章 URL。Sitemap 提交权限和配额以账号界面为准；没有权限时使用平台提供的其他提交通道。普通收录加快发现，不保证收录。
- 在 Bing Webmaster Tools / Google Search Console 验证站点并提交 `/sitemap.xml`。验证代码或文件必须使用账号实际给出的值，不要填写占位 token。验证前不自动请求索引或提交 API。
- 本轮没有百度、Bing 或其他站长账号的验证信息，因此没有代为完成所有权验证或提交。不要将站长 API token 放进客户端或公开仓库。
- 从中国大陆多个城市、运营商和移动网络测试 DNS、TLS、首字节、完整 HTML、头像资源和字体；记录时间、节点、状态码及加载耗时。境外 HTTP 200、本地构建通过和 robots 允许抓取，均不能证明大陆可达。
- 当前部署仍为 Vercel。根据大陆实测结果再决定是否增加适合目标访问区域的托管或分发方式。自定义域名本身不能证明已解决网络问题。任何镜像或迁移需先规划唯一 canonical 和重定向。
- 首页教育经历的原有 logo 随站点保存在 `public/logos/`，避免访问时依赖 Google favicon 服务。字体随站点构建，中文优先使用系统字体；头像仍依赖 `content.chrisxn.com`，需单独检测该域名。

## 姓名与身份一致性

主姓名使用「李叙宁 / Chris Xuning Li」，其他姓名写法 Xuning Li、Chris Xuning、Chris Li 和账号 chrislxn 在中英文可见介绍中自然说明。`src/data/resume.tsx` 的 `chineseName`、`nameVariants` 与 `username` 为这些信息的统一来源，Person 的 `alternateName`、JSON 和 llms.txt 都从同一份资料生成；中英文 Markdown 使用相同介绍。

学校、St. George 校区、专业以及 GitHub/LinkedIn 链接提供同名人物的区分信息。姓名别名帮助表明内容指向同一个人，不保证任何关键词的收录或排名。

## AI 资料

`/llms.txt` 链接到中英文 Markdown 和 `/profile.json`。它们与 HTML 使用同一份资料，减少事实冲突。JSON-LD 用同一个 Person `@id` 关联两种语言的 ProfilePage，真实文章可引用同一身份。

`llms.txt` 是[公开提案](https://llmstxt.org/)，提供辅助阅读入口，不是索引、排名或引用保证。[Google 的 AI 搜索说明](https://developers.google.com/search/docs/appearance/ai-features)仍要求基本可抓取、可索引以及有价值的内容，不要求专门的 AI 文件。robots 的 `User-agent: * / Allow: /` 允许遵守该协议的读取器抓取；平台是否实际读取或引用、是否遇到边缘防火墙限制，应通过访问日志与平台诊断确认。本次未添加搜索提交、付费服务或训练偏好控制。

## 发布真实双语文章

保留已有 7 篇模板文章的 `sample: true`，以免把 Alex Mercer 的示例内容归为站主作品。部分示例标题与正文不符，因此不做翻译推广，也不生成其 BlogPosting 结构化数据。

真实文章放在当前扁平目录。英文与中文文件名应各自唯一；不要用子目录作为 slug（当前 `[slug]` 路由只接受单段）。例如：

```yaml
# src/content/blog/my-homelab.mdx 的 frontmatter
---
title: "My homelab"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
summary: "A factual summary of the article."
lang: en
translationKey: my-homelab
sample: false
---
```

中文文件 `src/content/blog/my-homelab-zh.mdx` 使用 `lang: zh` 和同一 `translationKey: my-homelab`，并提供完整中文正文、标题、摘要。日期填写真实发布日期与修改日期。作者未指定时使用站主姓名；转载或他人文章须填真实 `author`。不要把不完整的翻译标为已完成对应版本。

构建会生成 `/blog/my-homelab/` 与 `/zh/blog/my-homelab-zh/`，各自 canonical 自指，译文链接双向关联；sitemap 自动纳入真实文章，排除样例与空列表。当前主页本身不记录虚构的每日 lastmod；文章 lastmod 使用真实 frontmatter 日期。

[Google 多语言文档](https://developers.google.com/search/docs/specialty/international/localized-versions)要求各语言版本互相声明并列出自身；本项目同时输出 HTML 与 sitemap 中的语言关联，使用同一组路径。

## 维护

修改个人资料后，运行 README 中的检查命令并查看中英文页面。增加文章后检查其作者、标题、正文、语言和日期的一致性。`scripts/verify-seo.py` 检查生产 HTML、sitemap、内链、模板 noindex 及双语资料；语言脚本有独立行为测试。新语言需要同时扩展类型、译文、路由与相关检查。
