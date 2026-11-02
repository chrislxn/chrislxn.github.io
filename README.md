# Chris Xuning Li · 李叙宁

Personal website at <https://www.chrisxn.com>, built with Astro 6, React and Tailwind CSS. English and Simplified Chinese are published as separate, fully rendered HTML pages.

## Development

Requires Node.js >=22.12 and pnpm. Install with `pnpm install --frozen-lockfile`; run `pnpm dev` locally and `pnpm build` for production. The current adapter targets Vercel.

## Content

- `src/data/resume.tsx`: existing English biography, education, skills and links. Disabled template work/project data is not included in the public profile exports.
- `src/data/profile.ts`: Chinese translations, shared public profile and AI-readable exports.
- `src/components/HomeContent.astro`: static homepage content; no JavaScript is required to read it.
- `src/content/blog/*.mdx`: posts with `lang: en` or `lang: zh`; matching `translationKey` values connect translations. The seven inherited template posts have `sample: true`; their original URLs remain available with noindex and are excluded from listings and sitemap.

## Routes

| Route | Content |
| --- | --- |
| `/`, `/zh/` | English and Chinese personal profiles |
| `/blog/`, `/zh/blog/` | Published posts in each language; empty lists are noindex |
| `/index.md`, `/zh/index.md` | Clean Markdown profiles generated from the same data |
| `/profile.json` | Public profile in both languages |
| `/llms.txt` | Brief background and links for AI readers |
| `/robots.txt` | Crawl policy and sitemap discovery |
| `/sitemap.xml` | Canonical, indexable HTML pages and language alternates |
| `/sitemap-index.xml`, `/sitemap-0.xml` | Compatibility with the original sitemap URLs |

The neutral entry URL `/` uses the primary browser language on first visit: Chinese goes to `/zh/`, other languages stay in English. Manual language links save a preference in localStorage. Direct localized and article links retain their language. Without JavaScript both versions work through ordinary links. No IP-based routing is used.

## Validation

```sh
pnpm exec astro check
node --test scripts/language-preference.test.mjs
pnpm build
python3 scripts/verify-seo.py
```

See [SEO and discovery operations](docs/seo-and-discovery.md) for search-engine submission, mainland-China reachability checks and publishing translations.

## Credits and license

Based on [Starfolio by WebsiteRating](https://github.com/webrating/starfolio), inspired by [dillionverma/portfolio](https://github.com/dillionverma/portfolio). MIT; retain the copyright notice in [LICENSE](LICENSE).
