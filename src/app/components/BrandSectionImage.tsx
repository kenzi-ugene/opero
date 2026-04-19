import { motion, useReducedMotion } from "motion/react";

type BrandSectionImageProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Full-width section photography with restrained framing (editorial, not stock-slick).
 */
export function BrandSectionImage({ src, alt, className = "" }: BrandSectionImageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-lg bg-neutral-200 ring-1 ring-inset ring-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.04),0_16px_48px_rgba(0,0,0,0.07)] ${className}`}
      whileHover={
        reduceMotion ? undefined : { boxShadow: "0 4px 16px rgba(0,0,0,0.06), 0 24px 56px rgba(0,0,0,0.09)" }
      }
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-full w-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          className={`h-full w-full object-cover ${reduceMotion ? "" : "transition-transform duration-700 ease-out group-hover:scale-[1.03]"}`}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        {!reduceMotion && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.12] via-transparent to-white/[0.06]" />
        )}
      </div>
    </motion.div>
  );
}
