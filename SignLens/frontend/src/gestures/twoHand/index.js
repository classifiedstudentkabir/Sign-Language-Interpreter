import { countExtendedFingers } from "../oneHand/fingers.js";
import { TWO_HAND_SIGNS } from "./signs.js";

export function detectTwoHandGesture(hands) {
  if (hands.length !== 2) return "Two hands detected";

  const left = hands[0];
  const right = hands[1];

  const leftCount = countExtendedFingers(left.landmarks);
  const rightCount = countExtendedFingers(right.landmarks);

  for (const sign of TWO_HAND_SIGNS) {
    if (sign.left === leftCount && sign.right === rightCount) {
      return `Number: ${sign.name}`;
    }
  }

  return "Two hands detected";
}