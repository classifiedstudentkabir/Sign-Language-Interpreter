import { TWO_HAND_SIGNS } from "./signs.js";

export function detectTwoHandGesture(hands) {
  if (!hands || hands.length !== 2) return "None";

  const left = hands[0];
  const right = hands[1];

  const leftCount = left.count;
  const rightCount = right.count;

  for (const sign of TWO_HAND_SIGNS) {
    if (sign.left === leftCount && sign.right === rightCount) {
      return sign.name;
    }
  }

  return "None";
}