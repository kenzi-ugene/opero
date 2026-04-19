/**
 * Curated photography for Opero (royalty-free via Unsplash).
 * Replace files under /public/images/ anytime; keep filenames or update paths here.
 *
 * home-technology: NASA-style Earth + connectivity — fits “IT solutions / digital scale”
 * home-precision-architecture: calm geometry — pairs with “Precision Meets Innovation”
 * about-collaboration: team at work — human, credible “about” story
 * about-development: focused build / shipping — pairs with expertise list
 */
export const SITE_IMAGES = {
  homeTechnology: {
    src: "/images/home-technology.jpg",
    alt: "Earth at night from orbit, suggesting global connectivity and technology infrastructure",
  },
  homePrecision: {
    src: "/images/home-precision-architecture.jpg",
    alt: "Modern building facade with strong horizontal lines and glass, suggesting precision and structure",
  },
  aboutCollaboration: {
    src: "/images/about-collaboration.jpg",
    alt: "Team members collaborating together at a table in a bright office",
  },
  aboutDevelopment: {
    src: "/images/about-development.jpg",
    alt: "Laptop on a desk with code on screen, representing software development work",
  },
} as const;
