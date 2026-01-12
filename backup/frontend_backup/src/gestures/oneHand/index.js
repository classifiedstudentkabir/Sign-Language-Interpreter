import { getFingerStates } from "./fingers.js";
import { ONE_HAND_SIGNS } from "./signs.js";

export function detectOneHandGesture(landmarks) {
  const currentState = getFingerStates(landmarks);

  for (const sign of ONE_HAND_SIGNS) {
    if (typeof sign.match === "function") {
      if (sign.match({ fingers: currentState, landmarks })) {
        return sign.name;
      }
    } else {
      let match = true;
      for (const finger in sign.fingers) {
        if (sign.fingers[finger] !== currentState[finger]) {
          match = false;
          break;
        }
      }
      if (match) {
        return sign.name;
      }
    }
  }

  return "Unknown";
}