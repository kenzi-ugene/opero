import type { Transition, Variants } from "motion/react";

/** Primary easing — calm, editorial */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const VIEWPORT_DEFAULT = {
  once: true,
  margin: "0px 0px -14% 0px",
} as const;

export const TRANSITION_BASE: Transition = {
  duration: 0.65,
  ease: EASE,
};

export const PAGE_TRANSITION: Transition = {
  duration: 0.38,
  ease: EASE,
};

/** Scroll-triggered fade + lift — use with motion.section / motion.div */
export const fadeUpScroll = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_DEFAULT,
  transition: TRANSITION_BASE,
};

/** Hero blocks: animate on mount */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.06, staggerChildren: 0.1 },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

export const staggerItemSoft: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE },
  },
};
