import type { ReactNode } from "react";
import { motion } from "motion/react";
import { EASE, VIEWPORT_DEFAULT } from "../motion/siteMotion";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Scroll-revealed section wrapper — use on every major page band for consistency.
 */
export function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_DEFAULT}
      transition={{ duration: 0.68, ease: EASE }}
    >
      {children}
    </motion.section>
  );
}
