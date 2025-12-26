import { getFingerStates } from "./fingers.js";
import { ONE_HAND_SIGNS } from "./signs.js";

export function detectOneHandGesture(landmarks) {
  const fingers = getFingerStates(landmarks);

  for (const sign of ONE_HAND_SIGNS) {
    // function-based gestures
    if (sign.match) {
      if (sign.match({ fingers, landmarks })) {
        return sign.name;
      }
      continue;
    }

    // finger-state gestures
    let match = true;
    for (const finger in sign.fingers) {
      if (sign.fingers[finger] !== fingers[finger]) {
        match = false;
        break;
      }
    }

    if (match) return sign.name;
  }

  return "Unknown";
}