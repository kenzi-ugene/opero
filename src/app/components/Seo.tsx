import React, { useEffect } from "react";
import { useLocation } from "react-router";

/** Public site origin for canonical URLs (must match production custom domain). */
const SITE_ORIGIN = "https://opero.com.my";

export type SeoProps = {
  title: string;
  description: string;
};

/**
 * Updates document title, meta description, canonical URL, and Open Graph tags
 * after client navigation so each public route has distinct SEO signals.
 */
export function Seo({ title, description }: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    const path =
      location.pathname.length > 1 && location.pathname.endsWith("/")
        ? location.pathname.slice(0, -1)
        : location.pathname;
    canonical.href = `${SITE_ORIGIN}${path === "/" ? "/" : path}`;

    const setMetaProperty = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMetaProperty("og:title", title);
    setMetaProperty("og:description", description);
    setMetaProperty("og:url", canonical.href);
  }, [title, description, location.pathname]);

  return null;
}
