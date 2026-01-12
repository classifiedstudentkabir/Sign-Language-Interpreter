import { getFingerStates } from "../oneHand/fingers.js";
import { ONE_HAND_SIGNS } from "../oneHand/signs.js";
import { TWO_HAND_SIGNS } from "./signs.js";
import { areHandsClose, getHandCenter } from "./relations.js";

function matchOneHandSign(fingerState) {
  for (const sign of ONE_HAND_SIGNS) {
    let match = true;
    for (const finger in sign.fingers) {
      if (sign.fingers[finger] !== fingerState[finger]) {
        match = false;
        break;
      }
    }
    if (match) return sign.name;
  }
  return null;
}

export function detectTwoHandGesture(hands) {
  const leftHand = hands.find(h => h.handedness === "Left");
  const rightHand = hands.find(h => h.handedness === "Right");

  if (!leftHand || !rightHand) return "Two hands detected";

  const leftState = getFingerStates(leftHand.landmarks);
  const rightState = getFingerStates(rightHand.landmarks);

  const leftSign = matchOneHandSign(leftState);
  const rightSign = matchOneHandSign(rightState);

  if (!leftSign || !rightSign) return "Two hands detected";

  for (const sign of TWO_HAND_SIGNS) {
    if (sign.left === leftSign && sign.right === rightSign) {
      return `Number: ${sign.name}`;
    }
  }

  return "Two hands detected";
}