import { SITE_CONFIG } from '../config/siteConfig';
import { HGWProduct, HGWArticle } from '../types';

export interface SEOProps {
  title: string; // approx 50-60 chars
  description: string; // approx 140-160 chars
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  jsonLd?: Record<string, any>;
}

export function updatePageSEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  jsonLd
}: SEOProps) {
  if (typeof document === 'undefined') return;

  // Title
  const finalTitle = title.includes(SITE_CONFIG.SITE_NAME)
    ? title
    : `${title} | ${SITE_CONFIG.SITE_NAME}`;
  document.title = finalTitle;

  // Helper to set or create meta
  const setMetaTag = (selector: string, attrName: string, attrValue: string, content: string) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrName, attrValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Meta description
  setMetaTag('meta[name="description"]', 'name', 'description', description);

  // Open Graph
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', finalTitle);
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
  setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl || window.location.href);
  setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_CONFIG.SITE_NAME);
  
  if (ogImage) {
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);
  }

  // Twitter
  setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', finalTitle);
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);

  // Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl || window.location.href);

  // JSON-LD Structured Data
  const existingScript = document.getElementById('schema-jsonld');
  if (existingScript) {
    existingScript.remove();
  }

  if (jsonLd) {
    const script = document.createElement('script');
    script.id = 'schema-jsonld';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}

export function generateProductSchema(product: HGWProduct, currentUrl: string) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.images,
    "description": product.shortDescription,
    "sku": `HGW-${product.id.toString().padStart(3, '0')}`,
    "brand": {
      "@type": "Brand",
      "name": "HGW (Health Green World)"
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "url": currentUrl,
      "priceCurrency": "USD",
      "price": product.publicPrice.toFixed(2),
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Person",
        "name": `${SITE_CONFIG.SPONSOR_NAME} - Distribuidor Independiente HGW`
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Precio Socio Distribuidor",
        "value": `$${product.partnerPrice.toFixed(2)} USD`
      },
      {
        "@type": "PropertyValue",
        "name": "Volumen de Negocio (BV)",
        "value": `${product.bv.toFixed(2)} BV`
      },
      {
        "@type": "PropertyValue",
        "name": "Materia Prima",
        "value": product.rawMaterial
      },
      {
        "@type": "PropertyValue",
        "name": "Presentación",
        "value": product.presentation
      }
    ]
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateArticleSchema(article: HGWArticle, currentUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": "https://hgwpanama.com/wp-content/uploads/2026/08/productos-hgw.webp"
      }
    },
    "datePublished": "2026-08-01",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    }
  };
}
