export const ONE_HAND_SIGNS = [
  {
    name: "FIVE",
    fingers: { thumb: true, index: true, middle: true, ring: true, pinky: true },
  },
  {
    name: "ZERO",
    type: "static",
    handCount: 1,
    priority: 1, // keep high priority
    match: ({ fingers }) => {
      return (
        fingers.index === false &&
        fingers.middle === false &&
        fingers.ring === false &&
        fingers.pinky === false
      );
    }
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
    type: "static",
    handCount: 1,
    priority: 2, // lower priority than numbers
    match: ({ fingers, landmarks }) => {
      const thumbTip = landmarks[4];
      const thumbIP  = landmarks[3];

      return (
        fingers.thumb === true &&
        fingers.index === false &&
        fingers.middle === false &&
        fingers.ring === false &&
        fingers.pinky === false &&
        thumbTip.y < thumbIP.y
      );
    }
  },
  {
    name: "THUMBS_DOWN",
    type: "static",
    handCount: 1,
    priority: 2,
    match: ({ fingers, landmarks }) => {
      const thumbTip = landmarks[4];
      const thumbIP  = landmarks[3];

      return (
        fingers.thumb === true &&
        fingers.index === false &&
        fingers.middle === false &&
        fingers.ring === false &&
        fingers.pinky === false &&
        thumbTip.y > thumbIP.y
      );
    }
  },
  {
    name: "POINT_LEFT",
    type: "static",
    handCount: 1,
    priority: 2,
    match: ({ fingers, landmarks }) => {
      const tip = landmarks[8];
      const mcp = landmarks[5];
      const dx = tip.x - mcp.x;

      return (
        fingers.index === true &&
        fingers.middle === false &&
        fingers.ring === false &&
        fingers.pinky === false &&
        dx > 0.08
      );
    }
  },

  {
    name: "POINT_RIGHT",
    type: "static",
    match: ({ fingers, landmarks }) => {
      const tip = landmarks[8];
      const mcp = landmarks[5];

      const dx = tip.x - mcp.x;
      const dy = Math.abs(tip.y - mcp.y);

      return (
        fingers.index === true &&
        fingers.middle === false &&
        fingers.ring === false &&
        fingers.pinky === false &&
        dx < -0.1 &&     // mirrored camera → right
        dy < 0.07        // must be horizontal
      );
    }
  },
];