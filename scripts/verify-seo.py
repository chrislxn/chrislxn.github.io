"""Validate production HTML, linked resources, crawl policy and bilingual metadata."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
import json
import re
import xml.etree.ElementTree as ET

root = Path('.vercel/output/static')
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(); self.tags = []; self.feed(path.read_text())
    def handle_starttag(self, tag, attrs): self.tags.append((tag, dict(attrs)))
    def find(self, tag, **attrs): return [a for t,a in self.tags if t == tag and all(a.get(k) == v for k,v in attrs.items())]

def output(url):
    path = root / urlparse(url).path.lstrip('/')
    return path / 'index.html' if not path.suffix else path

pages = {'/': ('en', 'In September 2024'), '/zh/': ('zh-Hans', '2024 年 9 月')}
for path, (lang, text) in pages.items():
    file = output(path); page = Page(file)
    assert text in file.read_text(), f'Missing static body: {path}'
    assert page.find('html')[0]['lang'] == lang
    assert len(page.find('h1')) == 1
    canonical = page.find('link', rel='canonical')[0]['href']
    assert canonical == 'https://www.chrisxn.com' + path, canonical
    alternates = {a['hreflang']: a['href'] for a in page.find('link', rel='alternate') if 'hreflang' in a}
    assert alternates == {'en': 'https://www.chrisxn.com/', 'zh-Hans': 'https://www.chrisxn.com/zh/', 'x-default': 'https://www.chrisxn.com/'}
    switch = [a for a in page.find('a') if 'data-language' in a]
    assert len(switch) == 1
    assert switch[0]['data-language'] == ('zh' if lang == 'en' else 'en')
    assert switch[0].get('aria-label') and switch[0].get('title')
    for a in page.find('a') + page.find('link'):
        url = a.get('href', '')
        if url.startswith('/') and not url.startswith('//'):
            assert output(url).exists(), f'Broken internal link {path}: {url}'
    assert not page.find('meta', name='robots')[0]['content'].startswith('noindex')

ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9', 'x': 'http://www.w3.org/1999/xhtml'}
sitemap = ET.parse(root / 'sitemap.xml')
urls = [node.text for node in sitemap.findall('.//s:loc', ns)]
assert len(urls) == len(set(urls))
for url in urls:
    assert urlparse(url).netloc == 'www.chrisxn.com'
    page = Page(output(url))
    assert not page.find('meta', name='robots')[0]['content'].startswith('noindex'), url
    assert page.find('link', rel='canonical')[0]['href'] == url
for file in (root / 'blog').glob('*/index.html'):
    page = Page(file)
    if 'Template example by' in file.read_text():
        assert page.find('meta', name='robots')[0]['content'] == 'noindex, follow'
        assert page.find('meta', name='googlebot')[0]['content'] == 'noindex, follow'
        assert not page.find('script', type='application/ld+json')
for path in ['/blog/', '/zh/blog/', '/404.html']:
    assert Page(output(path)).find('meta', name='robots')[0]['content'] == 'noindex, follow'
assert 'Sitemap: https://www.chrisxn.com/sitemap.xml' in (root / 'robots.txt').read_text()
assert 'Disallow: /' not in (root / 'robots.txt').read_text()
assert (root / 'sitemap-0.xml').read_text() == (root / 'sitemap.xml').read_text()
ET.parse(root / 'sitemap-index.xml')
profile = json.loads((root / 'profile.json').read_text())
assert set(profile['profiles']) == {'en', 'zh'}
for locale, md in [('en', 'index.md'), ('zh', 'zh/index.md')]:
    text = (root / md).read_text()
    assert '李叙宁' in text and 'Chris Xuning Li' in text
    assert len(profile['profiles'][locale]['education']) == 3
    assert 'Meridian' not in text and 'Stripe' not in text and 'Alex Mercer' not in text
for text in [(root / 'llms.txt').read_text(), json.dumps(profile)]:
    assert 'Alex Mercer' not in text and 'Meridian Labs' not in text
expected_aliases = {"李叙宁", "Xuning Li", "Chris Xuning", "Chris Li", "chrislxn"}
for path in pages:
    html = output(path).read_text()
    visible = re.sub(r'<(script|style)\b.*?</\1>', '', html, flags=re.S)
    visible = re.sub(r'<[^>]+>', ' ', visible)
    assert 'Chris Li' not in visible and 'chrislxn' not in visible, f'Name variants leaked into visible copy: {path}'
    assert 'I also go by' not in visible and '这些姓名写法' not in visible
    meta_description = Page(output(path)).find('meta', name='description')[0]['content']
    assert 'Chris Li' in meta_description
    schemas = [json.loads(text) for text in re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', html, re.S)]
    person = next(node for schema in schemas for node in schema.get('@graph', []) if node.get('@type') == 'Person')
    assert set(person['alternateName']) == expected_aliases
    assert person['name'] == 'Chris Xuning Li'
    assert person['@id'] == profile['id']
    assert person['sameAs'] == list(profile['profiles']['en']['links'].values())
for p in profile['profiles'].values():
    assert set(p['alternateNames']) == expected_aliases
for path in ['index.md', 'zh/index.md', 'llms.txt']:
    assert all(name in (root / path).read_text() for name in expected_aliases), path
print(f'SEO verification passed: {len(urls)} indexable URLs, bilingual HTML/Markdown/JSON, sample noindex, valid sitemap and internal links.')
