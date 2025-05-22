// slide in from left
export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// slide in from right
export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// container that staggers its children
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      // optional initial delay before kids start animating
      delayChildren: 0.3,
    }
  }
};
