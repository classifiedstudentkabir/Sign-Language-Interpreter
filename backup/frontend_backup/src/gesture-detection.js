// ========================================
// SIGNLENS - TWO-HAND GESTURE SYSTEM
// ========================================
// Add this to your existing gesture.js or main JavaScript file

// Configuration
const GESTURE_CONFIG = {
  STABILITY_FRAMES: 5,        // Frames needed for stable detection
  CONFIDENCE_THRESHOLD: 0.7,   // Minimum confidence for hand detection
  MIN_HAND_DISTANCE: 0.15      // Minimum distance between hands (normalized)
};

// Hand tracking state
let handTracker = {
  leftHand: null,
  rightHand: null,
  frameCount: 0,
  stabilityBuffer: [],
  lastGesture: null
};

// ========================================
// 1. HAND ROLE ASSIGNMENT
// ========================================
/**
 * Assigns left/right roles to detected hands based on x-position
 * @param {Array} results - MediaPipe hand detection results
 * @returns {Object} - {leftHand, rightHand}
 */
function assignHandRoles(results) {
  if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
    return { leftHand: null, rightHand: null };
  }

  // Single hand detection
  if (results.multiHandLandmarks.length === 1) {
    const hand = results.multiHandLandmarks[0];
    const handLabel = results.multiHandedness[0].label; // "Left" or "Right"
    
    // MediaPipe uses mirrored labels (Left = user's right hand)
    if (handLabel === "Right") {
      return { leftHand: hand, rightHand: null };
    } else {
      return { leftHand: null, rightHand: hand };
    }
  }

  // Two hands detected - assign based on x-position
  const hand1 = results.multiHandLandmarks[0];
  const hand2 = results.multiHandLandmarks[1];
  
  // Get wrist x-position (landmark 0)
  const x1 = hand1[0].x;
  const x2 = hand2[0].x;

  // Lower x = left side of screen = left hand
  if (x1 < x2) {
    return { leftHand: hand1, rightHand: hand2 };
  } else {
    return { leftHand: hand2, rightHand: hand1 };
  }
}

// ========================================
// 2. HAND GESTURE DETECTION (ONE HAND)
// ========================================

// New gesture helper functions
function isPeace(fingers) {
  return !fingers[0] && fingers[1] && fingers[2] && !fingers[3] && !fingers[4];
}

function isOkay(fingers, landmarks) {
  const thumbTip = landmarks[4];
  const indexTip = landmarks[8];
  const distance = Math.hypot(thumbTip.x - indexTip.x, thumbTip.y - indexTip.y, thumbTip.z - indexTip.z);

  // Check if middle, ring and pinky are extended, and index and thumb are curled.
  const extendedFingers = fingers[2] && fingers[3] && fingers[4];
  const curledFingers = !fingers[0] && !fingers[1];

  return distance < 0.05 && extendedFingers && curledFingers;
}

/**
 * Detects gesture for a single hand
 * @param {Array} landmarks - Hand landmarks (21 points)
 * @returns {String} - Gesture name or null
 */
function detectSingleHandGesture(landmarks) {
  if (!landmarks) return null;

  // Get finger states
  const fingers = getFingerStates(landmarks);
  
  // Detect gestures based on finger patterns
  if (isOpenPalm(fingers)) return "OPEN_PALM";
  if (isFist(fingers)) return "FIST";
  if (isThumbsUp(fingers, landmarks)) return "THUMBS_UP";
  if (isThumbsDown(fingers, landmarks)) return "THUMBS_DOWN";
  if (isPointingUp(fingers, landmarks)) return "POINTING_UP";
  if (isPeace(fingers)) return "PEACE";
  if (isOkay(fingers, landmarks)) return "OKAY";
  
  // Number gestures
  const numberCount = fingers.filter(f => f).length;
  if (numberCount >= 0 && numberCount <= 5) {
    return `NUMBER_${numberCount}`;
  }

  return null;
}

/**
 * Gets finger states (open/closed) for all 5 fingers
 * @param {Array} landmarks - Hand landmarks
 * @returns {Array} - [thumb, index, middle, ring, pinky] booleans
 */
function getFingerStates(landmarks) {
  const fingers = [];
  
  // Thumb (compare x-distance for thumb)
  const thumbTip = landmarks[4];
  const thumbBase = landmarks[2];
  fingers.push(Math.abs(thumbTip.x - thumbBase.x) > 0.05);
  
  // Other fingers (compare y-positions)
  const fingerTips = [8, 12, 16, 20];
  const fingerBases = [6, 10, 14, 18];
  
  for (let i = 0; i < 4; i++) {
    const tip = landmarks[fingerTips[i]];
    const base = landmarks[fingerBases[i]];
    fingers.push(tip.y < base.y); // Finger extended if tip is above base
  }
  
  return fingers;
}

// Helper gesture detection functions
function isOpenPalm(fingers) {
  return fingers.filter(f => f).length === 5;
}

function isFist(fingers) {
  return fingers.filter(f => f).length === 0;
}

function isThumbsUp(fingers, landmarks) {
  return fingers[0] && !fingers[1] && !fingers[2] && !fingers[3] && !fingers[4] 
         && landmarks[4].y < landmarks[8].y;
}

function isThumbsDown(fingers, landmarks) {
  return fingers[0] && !fingers[1] && !fingers[2] && !fingers[3] && !fingers[4]
         && landmarks[4].y > landmarks[8].y;
}

function isPointingUp(fingers, landmarks) {
  return !fingers[0] && fingers[1] && !fingers[2] && !fingers[3] && !fingers[4]
         && landmarks[8].y < landmarks[6].y;
}

// ========================================
// 3. TWO-HAND GESTURE DETECTION
// ========================================
/**
 * Detects two-hand gestures
 * @param {Array} leftLandmarks - Left hand landmarks
 * @param {Array} rightLandmarks - Right hand landmarks
 * @returns {String} - Two-hand gesture name or null
 */
function detectTwoHandGesture(leftLandmarks, rightLandmarks) {
  if (!leftLandmarks || !rightLandmarks) return null;

  // Get individual hand gestures
  const leftGesture = detectSingleHandGesture(leftLandmarks);
  const rightGesture = detectSingleHandGesture(rightLandmarks);

  // Calculate hand distance
  const distance = getHandDistance(leftLandmarks, rightLandmarks);

  // More specific gestures FIRST
  // Two open palms very close together = "THANK_YOU" (folded hands)
  if (leftGesture === "OPEN_PALM" && rightGesture === "OPEN_PALM" && distance < 0.1) {
    return "THANK_YOU";
  }

  // Two open palms close together = "SORRY"
  if (leftGesture === "OPEN_PALM" && rightGesture === "OPEN_PALM" && distance < 0.2) {
    return "SORRY";
  }

  // --- From Logs ---
  if ((leftGesture === "FIST" && rightGesture === "THUMBS_UP") || (leftGesture === "THUMBS_UP" && rightGesture === "FIST")) {
    return "READY";
  }
  if ((leftGesture === "THUMBS_UP" && rightGesture === "PEACE") || (leftGesture === "PEACE" && rightGesture === "THUMBS_UP")) {
    return "APPROVED";
  }
  if ((leftGesture === "OPEN_PALM" && rightGesture === "THUMBS_UP") || (leftGesture === "THUMBS_UP" && rightGesture === "OPEN_PALM")) {
    return "ACCEPTED";
  }
  if ((leftGesture === "OPEN_PALM" && rightGesture === "THUMBS_DOWN") || (leftGesture === "THUMBS_DOWN" && rightGesture === "OPEN_PALM")) {
    return "REJECTED";
  }
  if ((leftGesture === "PEACE" && rightGesture === "OPEN_PALM") || (leftGesture === "OPEN_PALM" && rightGesture === "PEACE")) {
    return "ALERT";
  }

  // --- QUICK START EXAMPLES ---
  // Two thumbs up = "GOOD_JOB"
  if (leftGesture === "THUMBS_UP" && rightGesture === "THUMBS_UP") {
    return "GOOD_JOB";
  }

  // One fist + One open palm = "PLEASE" 
  if ((leftGesture === "FIST" && rightGesture === "OPEN_PALM") || (leftGesture === "OPEN_PALM" && rightGesture === "FIST")) {
    return "PLEASE";
  }
  
  // Two pointing fingers = "TOGETHER"
  if (leftGesture === "POINTING_UP" && rightGesture === "POINTING_UP") {
    return "TOGETHER";
  }

  // --- 'HELLO' is less specific, so it comes after ---
  // Two open palms (✋ + ✋) = "HELLO"
  if (leftGesture === "OPEN_PALM" && rightGesture === "OPEN_PALM") {
    return "HELLO";
  }

  return null;
}

/**
 * Calculate normalized distance between two hands
 * @param {Array} leftLandmarks - Left hand landmarks
 * @param {Array} rightLandmarks - Right hand landmarks
 * @returns {Number} - Normalized distance
 */
function getHandDistance(leftLandmarks, rightLandmarks) {
  const leftWrist = leftLandmarks[0];
  const rightWrist = rightLandmarks[0];
  
  const dx = leftWrist.x - rightWrist.x;
  const dy = leftWrist.y - rightWrist.y;
  
  return Math.sqrt(dx * dx + dy * dy);
}

function isStop(results) {
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length !== 2) {
        return false;
    }

    // This logic assumes a mirrored camera feed.
    // MediaPipe's 'Left' hand is the user's physical left hand, which appears on the right side of a mirrored screen.
    const hand1 = { landmarks: results.multiHandLandmarks[0], label: results.multiHandedness[0].label, x: results.multiHandLandmarks[0][0].x };
    const hand2 = { landmarks: results.multiHandLandmarks[1], label: results.multiHandedness[1].label, x: results.multiHandLandmarks[1][0].x };

    const screenLeftHand = hand1.x < hand2.x ? hand1 : hand2;
    const screenRightHand = hand1.x < hand2.x ? hand2 : hand1;

    // If hands are crossed, the physical left hand is on the right of the screen and vice versa.
    if (screenLeftHand.label === 'Right' && screenRightHand.label === 'Left') {
        const distance = getHandDistance(screenLeftHand.landmarks, screenRightHand.landmarks);
        if (distance < 0.3) {
            const leftFingers = getFingerStates(screenLeftHand.landmarks);
            const rightFingers = getFingerStates(screenRightHand.landmarks);
            if (isOpenPalm(leftFingers) && isOpenPalm(rightFingers)) {
                return true;
            }
        }
    }
    return false;
}

// ========================================
// 4. GESTURE STABILITY & FRAME SMOOTHING
// ========================================
/**
 * Applies frame-based stability to prevent gesture flickering
 * @param {String} currentGesture - Detected gesture in current frame
 * @returns {String} - Stable gesture or null
 */
function applyStabilityFilter(currentGesture) {
  // Add current gesture to buffer
  handTracker.stabilityBuffer.push(currentGesture);
  
  // Keep buffer size limited
  if (handTracker.stabilityBuffer.length > GESTURE_CONFIG.STABILITY_FRAMES) {
    handTracker.stabilityBuffer.shift();
  }

  // Check if buffer is full
  if (handTracker.stabilityBuffer.length < GESTURE_CONFIG.STABILITY_FRAMES) {
    return handTracker.lastGesture;
  }

  // Count gesture occurrences in buffer
  const gestureCounts = {};
  handTracker.stabilityBuffer.forEach(gesture => {
    if (gesture) {
      gestureCounts[gesture] = (gestureCounts[gesture] || 0) + 1;
    }
  });

  // Find most common gesture
  let mostCommon = null;
  let maxCount = 0;
  
  for (const gesture in gestureCounts) {
    if (gestureCounts[gesture] > maxCount) {
      maxCount = gestureCounts[gesture];
      mostCommon = gesture;
    }
  }

  // Require gesture to appear in at least 80% of frames
  const threshold = Math.ceil(GESTURE_CONFIG.STABILITY_FRAMES * 0.8);
  if (maxCount >= threshold) {
    handTracker.lastGesture = mostCommon;
    return mostCommon;
  }

  return handTracker.lastGesture;
}

// ========================================
// 5. MAIN GESTURE RECOGNITION PIPELINE
// ========================================
/**
 * Main function to process MediaPipe results and detect gestures
 * Call this in your onResults callback
 * @param {Object} results - MediaPipe detection results
 * @returns {String} - Final detected gesture
 */
function processGestureDetection(results) {
  // Check for custom gestures like STOP first
  if (isStop(results)) {
    return applyStabilityFilter("STOP");
  }

  // Step 1: Assign hand roles
  const { leftHand, rightHand } = assignHandRoles(results);
  
  // Update tracker
  handTracker.leftHand = leftHand;
  handTracker.rightHand = rightHand;
  handTracker.frameCount++;

  let detectedGesture = null;

  // Step 2: Detect gestures based on number of hands
  if (leftHand && rightHand) {
    // Two hands detected - check two-hand gestures first
    detectedGesture = detectTwoHandGesture(leftHand, rightHand);
  } else if (leftHand || rightHand) {
    // One hand detected
    const singleHand = leftHand || rightHand;
    detectedGesture = detectSingleHandGesture(singleHand);
  } else {
    // No hands detected
    detectedGesture = null;
  }

  // Step 3: Apply stability filter
  const stableGesture = applyStabilityFilter(detectedGesture);

  return stableGesture;
}

// ========================================
// 6. UI UPDATE FUNCTION
// ========================================
/**
 * Update the UI with detected gesture
 * Modify this to match your HTML structure
 * @param {String} gesture - Detected gesture name
 */
function updateGestureUI(gesture) {
  const gestureText = document.getElementById('gesture-text');
  
  if (!gestureText) return; // Guard against element not found

  if (!gesture) {
    gestureText.textContent = "No gesture detected";
    gestureText.style.color = "#999";
    gestureText.classList.remove('gesture-detected');
    return;
  }

  // Format gesture name for display
  const displayName = formatGestureName(gesture);
  gestureText.textContent = displayName;
  gestureText.style.color = "#00ff00";

  // Add visual feedback (optional)
  gestureText.classList.add('gesture-detected');
  setTimeout(() => {
    if (gestureText) {
      gestureText.classList.remove('gesture-detected');
    }
  }, 300);
}

/**
 * Formats gesture name for display
 * @param {String} gesture - Raw gesture name
 * @returns {String} - Formatted display name
 */
function formatGestureName(gesture) {
  // Convert snake_case to Title Case
  return gesture
    .split('_')
    .map(word => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}

// ========================================
// 7. INTEGRATION EXAMPLE
// ========================================
/**
 * Example: How to integrate with MediaPipe Hands
 * Add this to your existing onResults callback
 */
function onResults(results) {
  // Your existing code to draw landmarks on canvas
  // ...

  // NEW: Detect gestures
  const gesture = processGestureDetection(results);
  
  // NEW: Update UI
  updateGestureUI(gesture);
}

// ========================================
// 8. UTILITY: RESET TRACKER
// ========================================
/**
 * Reset hand tracker state
 * Call this when needed (e.g., when stopping webcam)
 */
function resetHandTracker() {
  handTracker = {
    leftHand: null,
    rightHand: null,
    frameCount: 0,
    stabilityBuffer: [],
    lastGesture: null
  };
}

// Export functions (if using modules)
// export { processGestureDetection, updateGestureUI, resetHandTracker };
