export interface RouteSeoMeta extends Record<string | number | symbol, any> {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_OG_IMAGE = 'https://suitechpe.com/og-image.png';
const SITE_NAME = 'Suitech Perú';

export function updateSeoMeta(meta?: RouteSeoMeta) {
  if (!meta) return;

  // 1. Document Title
  if (meta.title) {
    document.title = meta.title;
  }

  // Helper to set or create meta tag by name
  const setMetaByName = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Helper to set or create meta tag by property (OG)
  const setMetaByProperty = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 2. Primary Meta Tags
  if (meta.description) {
    setMetaByName('description', meta.description);
    setMetaByName('title', meta.title);
  }
  if (meta.keywords) {
    setMetaByName('keywords', meta.keywords);
  }
  setMetaByName('author', 'Suitech Perú');
  setMetaByName('robots', 'index, follow');
  setMetaByName('geo.region', 'PE');
  setMetaByName('geo.placename', 'Perú');

  // 3. Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', meta.canonical || 'https://suitechpe.com');

  // 4. Open Graph Tags
  setMetaByProperty('og:site_name', SITE_NAME);
  setMetaByProperty('og:locale', 'es_PE');
  setMetaByProperty('og:type', meta.ogType || 'website');
  setMetaByProperty('og:url', meta.canonical);
  setMetaByProperty('og:title', meta.title);
  setMetaByProperty('og:description', meta.description);
  setMetaByProperty('og:image', meta.ogImage || DEFAULT_OG_IMAGE);

  // 5. Twitter Card Tags
  setMetaByName('twitter:card', 'summary_large_image');
  setMetaByName('twitter:url', meta.canonical);
  setMetaByName('twitter:title', meta.title);
  setMetaByName('twitter:description', meta.description);
  setMetaByName('twitter:image', meta.ogImage || DEFAULT_OG_IMAGE);

  // 6. JSON-LD Structured Data
  let scriptEl = document.getElementById('suitech-structured-data') as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = 'suitech-structured-data';
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  if (meta.structuredData) {
    scriptEl.textContent = JSON.stringify(meta.structuredData, null, 2);
  }
}
