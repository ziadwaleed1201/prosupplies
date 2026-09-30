/* ---- EASING ---- */
export const ease = [0.25, 0.1, 0.25, 1];

/* ---- FADE UP ---- */
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease
    }
  }
};

/* ---- FADE ---- */
export const fade = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease }
  }
};

/* ---- STAGGER CONTAINER ---- */
export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

/* ---- CARD HOVER ---- */
export const hoverLift = {
  whileHover: {
    y: -6,
    transition: { duration: 0.3, ease }
  }
};
