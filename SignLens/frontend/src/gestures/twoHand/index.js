import { getFingerStates } from "../oneHand/fingers.js";
import { TWO_HAND_SIGNS } from "./signs.js";

function countExtendedFingersFromLandmarks(landmarks) {
  const fingers = getFingerStates(landmarks);

  return Object.values(fingers).filter(Boolean).length;
}

export function detectTwoHandGesture(hands) {
  if (!hands || hands.length !== 2) return "None";

  const leftHand = hands[0];
  const rightHand = hands[1];

  const leftCount = countExtendedFingersFromLandmarks(leftHand.landmarks);
  const rightCount = countExtendedFingersFromLandmarks(rightHand.landmarks);

  for (const sign of TWO_HAND_SIGNS) {
    if (sign.left === leftCount && sign.right === rightCount) {
      return sign.name; // 6–10
    }
  }

  return "None";
}