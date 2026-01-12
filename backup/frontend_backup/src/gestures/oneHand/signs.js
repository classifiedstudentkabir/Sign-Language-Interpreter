export const ONE_HAND_SIGNS = [
  {
    name: "FIVE",
    fingers: { thumb: true, index: true, middle: true, ring: true, pinky: true },
  },
  {
    name: "FIST",
    fingers: { thumb: false, index: false, middle: false, ring: false, pinky: false },
  },
  {
    name: "ONE",
    fingers: { thumb: false, index: true, middle: false, ring: false, pinky: false },
  },
  {
    name: "TWO",
    fingers: { thumb: false, index: true, middle: true, ring: false, pinky: false },
  },
  {
    name: "THREE",
    fingers: { thumb: false, index: true, middle: true, ring: true, pinky: false },
  },
  {
    name: "FOUR",
    fingers: { thumb: true, index: true, middle: true, ring: true, pinky: false },
  },
  {
    name: "THUMBS_UP",
    match: ({ fingers, landmarks }) => {
      const tip = landmarks[4]; // thumb tip
      const ip  = landmarks[3]; // thumb IP

      return (
        fingers.thumb === true &&
        fingers.index === false &&
        fingers.middle === false &&
        fingers.ring === false &&
        fingers.pinky === false &&
        (ip.y - tip.y) > 0.08   // 🔑 clearly upward
      );
    }
  },
  {
    name: "THUMBS_DOWN",
    match: ({ fingers, landmarks }) => {
      const tip = landmarks[4];
      const ip  = landmarks[3];

      return (
        fingers.thumb === true &&
        fingers.index === false &&
        fingers.middle === false &&
        fingers.ring === false &&
        fingers.pinky === false &&
        (tip.y - ip.y) > 0.08   // 🔑 clearly downward
      );
    }
  }
];