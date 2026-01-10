# Project Transfer

## index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SignLens - AI-Based Sign Language Interpreter</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>SignLens - AI-Based Sign Language Interpreter</h1>
        </header>

        <main>
            <!-- Video Container -->
            <div class="video-container">
                <video id="webcam" autoplay playsinline></video>
                <canvas id="output-canvas"></canvas>
            </div>

            <!-- Gesture Display -->
            <div class="gesture-container">
                <h2>Detected Gesture:</h2>
                <div id="gesture-text">No gesture detected</div>
            </div>

            <!-- Debug Info (Optional) -->
            <div class="debug-container" id="debug-info" style="display: none;">
                <small>Debug: <span id="debug-text"></span></small>
            </div>

            <!-- Speech to Text Section -->
            <div class="speech-container">
                <h3>Speech to Text</h3>
                <p id="speech-output">Say something...</p>
                <div class="button-group">
                    <button id="start-listening" class="btn btn-primary">Start Listening</button>
                    <button id="stop-listening" class="btn btn-secondary">Stop Listening</button>
                </div>
            </div>
        </main>
    </div>

    <!-- MediaPipe CDN - CRITICAL: Load in correct order -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js" crossorigin="anonymous"></script>

    <!-- Your JavaScript Files -->
    <script src="src/gesture-detection.js"></script>
    <script src="src/main.js"></script>
</body>
</html>
```

## style.css
```css
/* ========================================
   SIGNLENS - COMPLETE STYLING
   ======================================== */

/* Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 900px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

/* Header */
header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    font-size: 2.5em;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
}

/* ========================================
   VIDEO CONTAINER - CRITICAL FIX
   ======================================== */
.video-container {
    position: relative;
    width: 100%;
    max-width: 640px;
    height: 480px;
    margin: 0 auto 30px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    background: #000;
}

/* Video Element - HIDDEN (canvas shows instead) */
#webcam {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none; /* ✅ CRITICAL: Hide video, show canvas */
}

/* Canvas Element - VISIBLE */
#output-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1; /* ✅ Ensure canvas is on top */
}

/* ========================================
   GESTURE DISPLAY
   ======================================== */
.gesture-container {
    background: rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 20px;
    text-align: center;
}

.gesture-container h2 {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: #ffffff;
}

#gesture-text {
    font-size: 3em;
    font-weight: bold;
    color: #999;
    padding: 25px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Gesture Detected Animation */
.gesture-detected {
    animation: pulse 0.3s ease;
    background: rgba(0, 255, 0, 0.2) !important;
    transform: scale(1.05);
}

 @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}

/* ========================================
   DEBUG CONTAINER
   ======================================== */
.debug-container {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
}

/* ========================================
   SPEECH TO TEXT SECTION
   ======================================== */
.speech-container {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    padding: 20px;
    text-align: center;
}

.speech-container h3 {
    font-size: 1.3em;
    margin-bottom: 15px;
    color: #ffffff;
}

#speech-output {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 15px;
    margin: 15px;
    min-height: 50px;
    font-size: 1.1em;
    color: #ffffff;
}

/* ========================================
   BUTTONS
   ======================================== */
.button-group {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 12px 30px;
    font-size: 1em;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
}

.btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(245, 87, 108, 0.4);
}

.btn:active {
    transform: translateY(0);
}

/* ========================================
   RESPONSIVE DESIGN
   ======================================== */
 @media (max-width: 768px) {
    .container {
        padding: 20px;
    }

    header h1 {
        font-size: 1.8em;
    }

    .video-container {
        height: auto;
        aspect-ratio: 4/3;
    }

    #gesture-text {
        font-size: 2em;
        padding: 15px;
        min-height: 80px;
    }

    .gesture-container h2 {
        font-size: 1.2em;
    }

    .btn {
        padding: 10px 20px;
        font-size: 0.9em;
    }
}

 @media (max-width: 480px) {
    header h1 {
        font-size: 1.5em;
    }

    #gesture-text {
        font-size: 1.5em;
        letter-spacing: 1px;
    }

    .button-group {
        flex-direction: column;
    }

    .btn {
        width: 100%;
    }
}

/* ========================================
   LOADING STATE
   ======================================== */
.loading {
    text-align: center;
    padding: 40px;
    font-size: 1.2em;
}

.loading::after {
    content: '...';
    animation: dots 1.5s infinite;
}

 @keyframes dots {
    0%, 20% { content: '.'; }
    40% { content: '..'; }
    60%, 100% { content: '...'; }
}

/* ========================================
   ERROR STATE
   ======================================== */
.error {
    background: rgba(255, 0, 0, 0.2);
    border: 2px solid #ff0000;
    border-radius: 8px;
    padding: 15px;
    margin: 20px 0;
    color: #ff6b6b;
    text-align: center;
}
```

## src/main.js
```javascript
// ========================================
// SIGNLENS - MAIN APPLICATION (TWO-HAND SUPPORT)
// ========================================

// DOM Elements
const videoElement = document.getElementById('webcam');
const canvasElement = document.getElementById('output-canvas');
const canvasCtx = canvasElement.getContext('2d');
const gestureText = document.getElementById('gesture-text');
const debugText = document.getElementById('debug-text');

// ========================================
// GESTURE DETECTOR INITIALIZATION
// ========================================
const gestureDetector = new ImprovedGestureDetector();

// ========================================
// MEDIAPIPE HANDS SETUP - TWO-HAND DETECTION ENABLED
// ========================================
const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }
});

hands.setOptions({
  maxNumHands: 2,              // ✅ CHANGED: Detect up to 2 hands
  modelComplexity: 1,          // Full model for accuracy
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});

// ========================================
// MEDIAPIPE RESULTS CALLBACK
// ========================================
hands.onResults((results) => {
  // Clear and redraw canvas
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

  // Draw hand landmarks if detected
  if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
    for (const landmarks of results.multiHandLandmarks) {
      // Draw connections (skeleton)
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
        color: '#00FF00',
        lineWidth: 2
      });

      // Draw landmarks (points)
      drawLandmarks(canvasCtx, landmarks, {
        color: '#FF0000',
        lineWidth: 1,
        radius: 3
      });
    }

    // Debug info
    if (debugText) {
      const handCount = results.multiHandLandmarks.length;
      const handLabels = results.multiHandedness.map(h => h.label).join(', ');
      debugText.textContent = `Hands: ${handCount} (${handLabels})`;
    }
  } else {
    if (debugText) {
      debugText.textContent = 'No hands detected';
    }
  }

  canvasCtx.restore();

  // ========================================
  // GESTURE DETECTION (TWO-HAND PRIORITY)
  // ========================================
  try {
    const gestureResult = gestureDetector.process(results);
    updateGestureUI(gestureResult);
  } catch (error) {
    console.error('Gesture detection error:', error);
    gestureText.textContent = 'Detection Error';
    gestureText.style.color = '#ff0000';
  }
});

// ========================================
// UI UPDATE FUNCTION
// ========================================
function updateGestureUI(gestureResult) {
  const gestureTextElement = document.getElementById('gesture-text');

  if (!gestureTextElement) {
    console.error('Gesture text element not found!');
    return;
  }

  if (!gestureResult) {
    gestureTextElement.textContent = 'No gesture detected';
    gestureTextElement.style.color = '#999';
    return;
  }

  // Format gesture name (e.g., "THUMBS_UP" → "Thumbs Up")
  const displayName = formatGestureName(gestureResult.gesture);
  gestureTextElement.textContent = displayName;
  
  // Use different color for two-hand gestures
  if (gestureResult.gesture === 'I LOVE YOU' || gestureResult.gesture === 'GOOD JOB') {
    gestureTextElement.style.color = '#FF1493'; // Deep pink for two-hand gestures
  } else {
    gestureTextElement.style.color = '#00ff00'; // Green for single-hand gestures
  }

  // Trigger animation
  gestureTextElement.classList.add('gesture-detected');
  setTimeout(() => {
    gestureTextElement.classList.remove('gesture-detected');
  }, 300);

  // Log to console with details
  let logMessage = `✓ Detected: ${gestureResult.gesture} (confidence: ${gestureResult.confidence.toFixed(2)})`;
  if (gestureResult.details) {
    logMessage += ` - ${gestureResult.details}`;
  }
  console.log(logMessage);
}

/**
 * Format gesture name for display
 * "THUMBS_UP" → "Thumbs Up"
 * "I LOVE YOU" → "I Love You"
 * "NUMBER_5" → "Number 5"
 */
function formatGestureName(gesture) {
  return gesture
    .split('_')
    .map(word => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}

// ========================================
// SPEECH RECOGNITION (Optional)
// ========================================
let recognition = null;
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    let finalTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + ' ';
      }
    }
    if (finalTranscript) {
      document.getElementById('speech-output').textContent = finalTranscript;
    }
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };
}

// Speech buttons
document.getElementById('start-listening')?.addEventListener('click', () => {
  if (recognition) {
    recognition.start();
    document.getElementById('speech-output').textContent = 'Listening...';
  }
});

document.getElementById('stop-listening')?.addEventListener('click', () => {
  if (recognition) {
    recognition.stop();
    document.getElementById('speech-output').textContent = 'Stopped listening.';
  }
});

// ========================================
// CAMERA SETUP
// ========================================
const camera = new Camera(videoElement, {
  onFrame: async () => {
    await hands.send({ image: videoElement });
  },
  width: 640,
  height: 480
});

// ========================================
// INITIALIZATION
// ========================================
async function initializeApp() {
  try {
    console.log('🚀 Starting SignLens with Two-Hand Support...');

    // Start camera
    await camera.start();
    console.log('✓ Camera started');

    // Set canvas size
    canvasElement.width = 640;
    canvasElement.height = 480;

    console.log('✓ SignLens initialized successfully!');
    console.log('✓ Two-hand gesture detection enabled');
    gestureText.textContent = 'Ready - Show a gesture!';
    gestureText.style.color = '#00ff00';
  } catch (error) {
    console.error('❌ Initialization error:', error);
    gestureText.textContent = 'Error: ' + error.message;
    gestureText.style.color = '#ff0000';
  }
}

// Wait for DOM to load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

// ========================================
// CLEANUP ON PAGE UNLOAD
// ========================================
window.addEventListener('beforeunload', () => {
  if (camera) camera.stop();
  if (recognition) recognition.stop();
  console.log('SignLens stopped');
});
```

## src/gesture-detection.js
```javascript
/**
 * PRODUCTION GESTURE DETECTION - SignLens
 * ✅ NUMBER_0 to NUMBER_10 (number gestures, 6-10 using two hands)
 * ✅ THUMBS_UP, THUMBS_DOWN, OKAY, THANK YOU, CALL_ME (action gestures)
 * ✅ WAIT, STOP (command gestures)
 * 
 * REFACTORED FOR TWO-HAND SUPPORT:
 * - Independent hand state tracking (left/right)
 * - Raw hand analysis (analyzeHand)
 * - Per-hand stability
 * - Prepared for two-hand gesture detection
 * 
 * CURRENT: One-hand detection only
 * FUTURE: Two-hand gesture detection will use same raw analysis
 */

// MediaPipe Landmark Indices
const LANDMARKS = {
  WRIST: 0,
  THUMB_TIP: 4,
  THUMB_PIP: 3,
  THUMB_MCP: 2,
  INDEX_TIP: 8,
  INDEX_PIP: 6,
  INDEX_MCP: 5,
  MIDDLE_TIP: 12,
  MIDDLE_PIP: 10,
  MIDDLE_MCP: 9,
  RING_TIP: 16,
  RING_PIP: 14,
  RING_MCP: 13,
  PINKY_TIP: 20,
  PINKY_PIP: 18,
  PINKY_MCP: 17,
};

class ImprovedGestureDetector {
  constructor() {
    // ✅ REFACTORED: Independent hand state tracking
    this.handState = {
      left: { lastGesture: null, frameCount: 0 },
      right: { lastGesture: null, frameCount: 0 }
    };
    this.STABILITY_THRESHOLD = 3; // Require 3 consecutive frames per hand
  }

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Check if a finger is extended (tip above PIP joint)
   * @param {Array} landmarks - MediaPipe landmarks array
   * @param {number} tipIdx - Landmark index for finger tip
   * @param {number} pipIdx - Landmark index for PIP joint
   * @returns {boolean} True if finger is extended
   */
  isFingerExtended(landmarks, tipIdx, pipIdx) {
    if (!landmarks[tipIdx] || !landmarks[pipIdx]) return false;
    // Positive diff = extended (tip above PIP)
    const diff = landmarks[pipIdx].y - landmarks[tipIdx].y;
    return diff > 0.08; // Empirically tuned threshold
  }

  /**
   * Check if a finger is curled (tip below PIP joint)
   * @param {Array} landmarks - MediaPipe landmarks array
   * @param {number} tipIdx - Landmark index for finger tip
   * @param {number} pipIdx - Landmark index for PIP joint
   * @returns {boolean} True if finger is curled
   */
  isFingerCurled(landmarks, tipIdx, pipIdx) {
    return !this.isFingerExtended(landmarks, tipIdx, pipIdx);
  }

  /**
   * Get the extension state of all fingers
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {Object} Object with finger names as keys and boolean extension states as values
   */
  getFingerStates(landmarks) {
    return {
      thumb: this.isFingerExtended(landmarks, LANDMARKS.THUMB_TIP, LANDMARKS.THUMB_MCP),
      index: this.isFingerExtended(landmarks, LANDMARKS.INDEX_TIP, LANDMARKS.INDEX_PIP),
      middle: this.isFingerExtended(landmarks, LANDMARKS.MIDDLE_TIP, LANDMARKS.MIDDLE_PIP),
      ring: this.isFingerExtended(landmarks, LANDMARKS.RING_TIP, LANDMARKS.RING_PIP),
      pinky: this.isFingerExtended(landmarks, LANDMARKS.PINKY_TIP, LANDMARKS.PINKY_PIP)
    };
  }

  /**
   * Count how many fingers (index, middle, ring, pinky) are extended
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {number} Count of extended fingers (excluding thumb)
   */
  countExtendedFingers(landmarks) {
    const states = this.getFingerStates(landmarks);
    return [states.index, states.middle, states.ring, states.pinky].filter(Boolean).length;
  }

  /**
   * Check if thumb is pointing upward (extending away from palm)
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {boolean} True if thumb is pointing up
   */
  isThumbUp(landmarks) {
    if (!landmarks[LANDMARKS.THUMB_TIP] || !landmarks[LANDMARKS.THUMB_PIP]) return false;
    const diff = landmarks[LANDMARKS.THUMB_PIP].y - landmarks[LANDMARKS.THUMB_TIP].y;
    return diff > 0.1; // Significant upward extension
  }

  /**
   * Check if thumb is pointing upward (alias for consistency)
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {boolean} True if thumb is pointing up
   */
  isThumbPointingUp(landmarks) {
    return this.isThumbUp(landmarks);
  }

  /**
   * Check if thumb is curled/folded
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {boolean} True if thumb is curled
   */
  isThumbCurled(landmarks) {
    return !this.isFingerExtended(landmarks, LANDMARKS.THUMB_TIP, LANDMARKS.THUMB_MCP);
  }

  /**
   * Check if palm is facing camera (fingers pointing up)
   * Uses middle finger position relative to wrist as indicator
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {boolean} True if palm is facing camera
   */
  isPalmFacingCamera(landmarks) {
    if (!landmarks[LANDMARKS.WRIST] || !landmarks[LANDMARKS.MIDDLE_TIP]) return false;
    // Middle fingertip above wrist = palm facing camera
    return landmarks[LANDMARKS.MIDDLE_TIP].y < landmarks[LANDMARKS.WRIST].y;
  }

  /**
   * Check if palm is facing down (toward user)
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {boolean} True if palm is facing down
   */
  isPalmFacingDown(landmarks) {
    if (!landmarks[LANDMARKS.WRIST] || !landmarks[LANDMARKS.MIDDLE_TIP]) return false;
    // Middle fingertip below wrist = palm down
    return landmarks[LANDMARKS.MIDDLE_TIP].y > landmarks[LANDMARKS.WRIST].y;
  }

  /**
   * Check if all 4 fingers (not thumb) are extended
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {boolean} True if all four fingers are extended
   */
  areAllFingersExtended(landmarks) {
    const states = this.getFingerStates(landmarks);
    return states.index && states.middle && states.ring && states.pinky;
  }

  /**
   * Check if only index finger is extended
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {boolean} True if only index is extended
   */
  isOnlyIndexExtended(landmarks) {
    const states = this.getFingerStates(landmarks);
    return states.index && !states.middle && !states.ring && !states.pinky;
  }

  // ==================== RAW HAND ANALYSIS (NEW - CRITICAL FOR TWO-HAND) ====================

  /**
   * Analyze raw hand features WITHOUT detecting gesture yet
   * Returns fingerprinting data for both one-hand and two-hand detection
   * 
   * @param {Array} landmarks - MediaPipe landmarks array
   * @returns {Object} Raw hand features {
   *   fingers: { thumb, index, middle, ring, pinky },
   *   thumbState: 'up' | 'down' | 'curled',
   *   extendedCount: number,
   *   distances: { thumbIndex: number }
   * }
   */
  analyzeHand(landmarks) {
    if (!landmarks || landmarks.length < 21) {
      return null;
    }

    const fingers = this.getFingerStates(landmarks);
    const extendedCount = this.countExtendedFingers(landmarks);
    
    // Determine thumb state
    let thumbState = 'curled';
    if (this.isThumbUp(landmarks)) {
      thumbState = 'up';
    } else if (this.isFingerExtended(landmarks, LANDMARKS.THUMB_TIP, LANDMARKS.THUMB_MCP)) {
      thumbState = 'extended';
    } else {
      // Check if thumb is pointing down
      const thumbTip = landmarks[LANDMARKS.THUMB_TIP];
      const thumbPip = landmarks[LANDMARKS.THUMB_PIP];
      if (thumbTip && thumbPip && (thumbTip.y - thumbPip.y) > 0.05) {
        thumbState = 'down';
      }
    }

    // Calculate useful distances
    const thumbTip = landmarks[LANDMARKS.THUMB_TIP];
    const indexTip = landmarks[LANDMARKS.INDEX_TIP];
    const thumbIndexDistance = thumbTip && indexTip 
      ? Math.sqrt(Math.pow(thumbTip.x - indexTip.x, 2) + Math.pow(thumbTip.y - indexTip.y, 2))
      : 1;

    return {
      fingers, // { thumb, index, middle, ring, pinky }
      thumbState, // 'up' | 'down' | 'extended' | 'curled'
      extendedCount, // number of extended fingers (excluding thumb)
      distances: {
        thumbIndex: thumbIndexDistance
      }
    };
  }

  // ==================== HAND ASSIGNMENT (TWO-HAND SUPPORT) ====================

  /**
   * Assign left/right hand labels based on MediaPipe detection
   * Handles single-hand, two-hand, and ambiguous cases
   * 
   * @param {Object} results - MediaPipe hand detection results
   * @returns {Object} { leftHand: landmarks|null, rightHand: landmarks|null }
   */
  assignHandRoles(results) {
    if (!results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
      return { leftHand: null, rightHand: null };
    }

    // Single hand detected
    if (results.multiHandLandmarks.length === 1) {
      const handedness = results.multiHandedness[0]?.label;
      if (handedness === 'Left') {
        return { leftHand: results.multiHandLandmarks[0], rightHand: null };
      }
      return { rightHand: results.multiHandLandmarks[0], leftHand: null };
    }

    // Two hands detected
    const hand1 = results.multiHandLandmarks[0];
    const hand2 = results.multiHandLandmarks[1];
    const handedness1 = results.multiHandedness[0]?.label;
    const handedness2 = results.multiHandedness[1]?.label;

    // Conflicting labels - use X coordinate (left side = left hand)
    if (handedness1 === handedness2) {
      if (hand1[0].x < hand2[0].x) {
        return { leftHand: hand1, rightHand: hand2 };
      }
      return { leftHand: hand2, rightHand: hand1 };
    }

    // Clear labels - use them directly
    if (handedness1 === 'Left') {
      return { leftHand: hand1, rightHand: hand2 };
    }
    return { leftHand: hand2, rightHand: hand1 };
  }

  _detectSingleHandGesture(landmarks) {
    if (!landmarks || landmarks.length < 21) return null;

    // Optimized priority order to avoid all conflicts
    // THUMBS_DOWN checked FIRST (before NUMBER_0) because both have all fingers curled
    let detected = this.detectThumbsDown(landmarks);
    if (detected) return detected;

    detected = this.detectNumberGestures(landmarks); // NUMBER_0 → NUMBER_5
    if (detected) return detected;

    detected = this.detectPinch(landmarks);
    if (detected) return detected;

    detected = this.detectOK(landmarks);
    if (detected) return detected;

    detected = this.detectThumbsUp(landmarks);
    if (detected) return detected;

    detected = this.detectCallMe(landmarks);
    if (detected) return detected;

    detected = this.detectRock(landmarks);
    if (detected) return detected;

    detected = this.detectPeace(landmarks);
    if (detected) return detected;

    return null;
  }

  detectGesture(landmarks) {
    return this._detectSingleHandGesture(landmarks);
  }

  // ==================== MAIN DETECTION ====================

  /**
   * Detect gesture from landmarks
   * Priority order prevents conflicts
   */

  detectNumberGestures(landmarks) {
    const extendedCount = this.countExtendedFingers(landmarks);
    const thumbExt = this.isFingerExtended(landmarks, LANDMARKS.THUMB_TIP, LANDMARKS.THUMB_MCP);

    // NUMBER_0: All fingers curled, thumb curled (relaxed check - both must be false/curled)
    if (extendedCount === 0 && !thumbExt) {
      return { gesture: 'NUMBER_0', confidence: 0.95 };
    }

    // NUMBER_1: Only index extended
    if (
      extendedCount === 1 &&
      this.isFingerExtended(landmarks, LANDMARKS.INDEX_TIP, LANDMARKS.INDEX_PIP) &&
      this.isThumbCurled(landmarks)
    ) {
      return { gesture: 'NUMBER_1', confidence: 0.9 };
    }

    // NUMBER_2: Index + Middle extended
    if (
      extendedCount === 2 &&
      this.isFingerExtended(landmarks, LANDMARKS.INDEX_TIP, LANDMARKS.INDEX_PIP) &&
      this.isFingerExtended(landmarks, LANDMARKS.MIDDLE_TIP, LANDMARKS.MIDDLE_PIP) &&
      this.isThumbCurled(landmarks)
    ) {
      return { gesture: 'NUMBER_2', confidence: 0.9 };
    }

    // NUMBER_3: Index + Middle + Ring extended
    if (
      extendedCount === 3 &&
      this.isFingerExtended(landmarks, LANDMARKS.INDEX_TIP, LANDMARKS.INDEX_PIP) &&
      this.isFingerExtended(landmarks, LANDMARKS.MIDDLE_TIP, LANDMARKS.MIDDLE_PIP) &&
      this.isFingerExtended(landmarks, LANDMARKS.RING_TIP, LANDMARKS.RING_PIP) &&
      this.isThumbCurled(landmarks)
    ) {
      return { gesture: 'NUMBER_3', confidence: 0.9 };
    }

    // NUMBER_4: All except thumb extended (4 fingers)
    if (
      extendedCount === 4 &&
      this.isFingerExtended(landmarks, LANDMARKS.INDEX_TIP, LANDMARKS.INDEX_PIP) &&
      this.isFingerExtended(landmarks, LANDMARKS.MIDDLE_TIP, LANDMARKS.MIDDLE_PIP) &&
      this.isFingerExtended(landmarks, LANDMARKS.RING_TIP, LANDMARKS.RING_PIP) &&
      this.isFingerExtended(landmarks, LANDMARKS.PINKY_TIP, LANDMARKS.PINKY_PIP) &&
      this.isThumbCurled(landmarks)
    ) {
      return { gesture: 'NUMBER_4', confidence: 0.9 };
    }

    // NUMBER_5: All 5 fingers extended
    if (
      extendedCount === 4 &&
      this.isFingerExtended(landmarks, LANDMARKS.THUMB_TIP, LANDMARKS.THUMB_MCP)
    ) {
      return { gesture: 'NUMBER_5', confidence: 0.95 };
    }

    return null;
  }

  /**
   * THUMBS_UP: Thumb pointing up + all fingers curled
   * Requirements:
   *   - Thumb extended upward
   *   - Index, middle, ring, pinky all curled
   * Mutual Exclusivity:
   *   ✅ Different from THUMBS_DOWN: opposite thumb direction
   *   ✅ Different from OK/ROCK/CALL_ME: multiple fingers involved
   */
  detectThumbsUp(landmarks) {
    const states = this.getFingerStates(landmarks);
    // Thumb must be extended (checking both extended state and Y-position)
    const thumbUp = states.thumb || this.isThumbUp(landmarks);
    const allFingersCurled = !states.index && !states.middle && !states.ring && !states.pinky;

    if (thumbUp && allFingersCurled) {
      return { gesture: 'THUMBS_UP', confidence: 0.95 };
    }
    return null;
  }

  /**
   * THUMBS_DOWN: Thumb pointing down + all fingers curled
   * Requirements:
   *   - Thumb pointing downward (opposite of THUMBS_UP)
   *   - Index, middle, ring, pinky all curled
   */
  detectThumbsDown(landmarks) {
    const states = this.getFingerStates(landmarks);
    const allFingersCurled = !states.index && !states.middle && !states.ring && !states.pinky;
    
    // Thumb pointing down: TIP is BELOW PIP (opposite of isThumbUp where TIP is ABOVE PIP)
    // Relaxed threshold (0.03) to catch downward thumb more reliably without breaking NUMBER_0
    const thumbTip = landmarks[LANDMARKS.THUMB_TIP];
    const thumbPip = landmarks[LANDMARKS.THUMB_PIP];
    const thumbDown = (thumbTip.y - thumbPip.y) > 0.05; // Increased to 0.05 to avoid Fist confusion

    if (thumbDown && allFingersCurled) {
      return { gesture: 'THUMBS_DOWN', confidence: 0.95 };
    }
    return null;
  }

  /**
   * OK: Thumb + index touching, others extended
   * Requirements:
   *   - Thumb curled (close to index)
   *   - Index curled (close to thumb)
   *   - Middle, ring, pinky all extended
   * Mutual Exclusivity:
   *   ✅ Different from NUMBER_2: middle is extended
   *   ✅ Different from PEACE: this is middle+ring+pinky extended
   */
  detectOK(landmarks) {
    const states = this.getFingerStates(landmarks);
    
    // Thumb and index both curled (touching), others extended
    const thumbIndexClose = !states.thumb && !states.index;
    const othersExtended = states.middle && states.ring && states.pinky;

    if (thumbIndexClose && othersExtended) {
      return { gesture: 'OKAY', confidence: 0.9 };
    }
    return null;
  }

  /**
   * ROCK: Index + pinky extended, others curled
   * Requirements:
   *   - Index extended
   *   - Pinky extended
   *   - Middle, ring curled
   *   - Thumb curled
   * Mutual Exclusivity:
   *   ✅ Different from CALL_ME: this includes index, thumb is curled
   *   ✅ Different from PEACE: this includes pinky instead of middle
   */
  detectRock(landmarks) {
    const states = this.getFingerStates(landmarks);
    
    // Index and Pinky extended, Thumb curled
    const rockFingers = states.index && states.pinky && !states.thumb;
    
    // Middle and Ring curled
    const othersCurled = !states.middle && !states.ring;

    if (rockFingers && othersCurled) {
      return { gesture: 'ROCK', confidence: 0.9 };
    }
    return null;
  }

  /**
   * CALL_ME: Thumb + pinky extended, others curled
   * Requirements:
   *   - Thumb extended
   *   - Pinky extended
   *   - Index, middle, ring curled
   * Mutual Exclusivity:
   *   ✅ Different from ROCK: thumb extended instead of index
   *   ✅ Different from PEACE: includes pinky, not middle
   */
  detectCallMe(landmarks) {
    const states = this.getFingerStates(landmarks);
    
    // Thumb and Pinky extended
    const thumbPinkyExt = states.thumb && states.pinky;
    
    // Index, Middle, Ring curled
    const othersCurled = !states.index && !states.middle && !states.ring;

    if (thumbPinkyExt && othersCurled) {
      return { gesture: 'CALL_ME', confidence: 0.9 };
    }
    return null;
  }

  /**
   * PEACE: Index + middle extended, thumb OUT (extended) to avoid NUMBER_2
   * Requirements:
   *   - Index extended
   *   - Middle extended
   *   - Ring, pinky curled
   *   - Thumb extended (this differentiates from NUMBER_2)
   * Mutual Exclusivity:
   *   ✅ Different from NUMBER_2: thumb extended here, curled in NUMBER_2
   *   ✅ Different from OK: ring and pinky curled
   */
  detectPeace(landmarks) {
    const states = this.getFingerStates(landmarks);
    
    // Index and middle extended, ring/pinky curled, thumb extended
    const indexMiddleExt = states.index && states.middle;
    const ringPinkyCurled = !states.ring && !states.pinky;
    const thumbExt = states.thumb; // KEY: thumb extended to avoid NUMBER_2

    if (indexMiddleExt && ringPinkyCurled && thumbExt) {
      return { gesture: 'THANK YOU', confidence: 0.9 };
    }
    return null;
  }

  /**
   * PINCH: Thumb + index very close, others curled
   * WARNING: This has same pattern as NUMBER_0 (all fingers curled)
   * If you need distinct PINCH detection, consider removing it or using spatial proximity
   */
  detectPinch(landmarks) {
    // NOTE: Disabled - conflicts with NUMBER_0 in priority order
    // Both gestures have identical logic: all fingers curled
    // PINCH checked after NUMBER_0 so always returns NUMBER_0 instead
    return null;
  }

  // ==================== TWO-HAND GESTURES ====================

  /**
   * TWO-HAND GESTURE DETECTION
   * Detects combinations of stabilized single-hand gestures
   * 
   * Supported Gestures:
   * 1. GOOD_JOB (👍👍) - THUMBS_UP + THUMBS_UP
   * 2. PERFECT (👌👌) - OK + OK
   * 3. CONFIRMED (👍👌) - THUMBS_UP + OK
   * 4. ALL_GOOD (👌👍) - OK + THUMBS_UP (reverse)
   * 5. APPROVED (👍✌️) - THUMBS_UP + PEACE
   * 6. ACCEPTED (✋👍) - NUMBER_5 + THUMBS_UP
   * 7. REJECTED (✋👎) - NUMBER_5 + THUMBS_DOWN
   * 8. READY (✊👍) - NUMBER_0 + THUMBS_UP
   * 9. SELECT (✌️👉) - PEACE + NUMBER_1
   * 10. ALERT (✋✌️) - NUMBER_5 + PEACE
   * 
   * @param {Object} leftGesture - Stabilized left hand gesture or null
   * @param {Object} rightGesture - Stabilized right hand gesture or null
   * @returns {Object|null} Two-hand gesture or null
   */
  detectTwoHandGesture(leftGesture, rightGesture) {
    if (!leftGesture || !rightGesture) {
      return null;
    }

    const left = leftGesture.gesture;
    const right = rightGesture.gesture;
    const minConfidence = Math.min(leftGesture.confidence, rightGesture.confidence);

    // ==================== SYMMETRIC GESTURES (A + A) ====================

    // 1. GOOD_JOB: THUMBS_UP + THUMBS_UP
    if (left === 'THUMBS_UP' && right === 'THUMBS_UP') {
      return {
        gesture: 'GOOD_JOB',
        confidence: minConfidence,
        details: '👍 + 👍'
      };
    }

    // 2. PERFECT: OK + OK
    if (left === 'OKAY' && right === 'OKAY') {
      return {
        gesture: 'PERFECT',
        confidence: minConfidence,
        details: '👌 + 👌'
      };
    }

    // HOW_ARE_YOU: NUMBER_0 + NUMBER_0
    if (left === 'NUMBER_0' && right === 'NUMBER_0') {
      return {
        gesture: 'HOW_ARE_YOU',
        confidence: minConfidence,
        details: '✊ + ✊'
      };
    }

    // BYE: THANK YOU + THANK YOU
    if (left === 'THANK YOU' && right === 'THANK YOU') {
      return {
        gesture: 'BYE',
        confidence: minConfidence,
        details: '✌️ + ✌️'
      };
    }

    // NO_PROBLEM: CALL_ME + CALL_ME
    if (left === 'CALL_ME' && right === 'CALL_ME') {
      return {
        gesture: 'NO_PROBLEM',
        confidence: minConfidence,
        details: '🤙 + 🤙'
      };
    }

    // AWESOME: ROCK + ROCK
    if (left === 'ROCK' && right === 'ROCK') {
      return {
        gesture: 'AWESOME',
        confidence: minConfidence,
        details: '🤘 + 🤘'
      };
    }

    // QUESTION: NUMBER_1 + NUMBER_1
    if (left === 'NUMBER_1' && right === 'NUMBER_1') {
      return {
        gesture: 'QUESTION',
        confidence: minConfidence,
        details: '☝️ + ☝️'
      };
    }

    // ARE_YOU_FREE: CALL_ME + NUMBER_1 (or vice versa)
    if ((left === 'CALL_ME' && right === 'NUMBER_1') || (left === 'NUMBER_1' && right === 'CALL_ME')) {
      return {
        gesture: 'ARE_YOU_FREE',
        confidence: minConfidence,
        details: '🤙 + ☝️'
      };
    }

    // 10. ALERT: NUMBER_5 + PEACE
    if (left === 'NUMBER_5' && right === 'THANK YOU') {
      return {
        gesture: 'ALERT',
        confidence: minConfidence,
        details: '✋ + ✌️'
      };
    }

    // ALERT reverse: PEACE + NUMBER_5
    if (left === 'THANK YOU' && right === 'NUMBER_5') {
      return {
        gesture: 'ALERT',
        confidence: minConfidence,
        details: '✌️ + ✋'
      };
    }

    // ==================== DIRECTIONAL GESTURES (A + B) ====================

    // 3. CONFIRMED: THUMBS_UP + OK (left + right)
    if (left === 'THUMBS_UP' && right === 'OKAY') {
      return {
        gesture: 'YES',
        confidence: minConfidence,
        details: '👍 + 👌'
      };
    }

    // GESTURE: NO (THUMBS_DOWN + OKAY)
    if (left === 'THUMBS_DOWN' && right === 'OKAY') {
      return {
        gesture: 'NO',
        confidence: minConfidence,
        details: '👎 + 👌'
      };
    }

    // 4. ALL_GOOD: OK + THUMBS_UP (reverse of CONFIRMED)
    if (left === 'OKAY' && right === 'THUMBS_UP') {
      return {
        gesture: 'ALL_GOOD',
        confidence: minConfidence,
        details: '👌 + 👍'
      };
    }

    // 5. APPROVED: THUMBS_UP + PEACE
    if (left === 'THUMBS_UP' && right === 'THANK YOU') {
      return {
        gesture: 'HELP',
        confidence: minConfidence,
        details: '👍 + ✌️'
      };
    }

    // 6. ACCEPTED: NUMBER_5 + THUMBS_UP
    if (left === 'NUMBER_5' && right === 'THUMBS_UP') {
      return {
        gesture: 'ACCEPTED',
        confidence: minConfidence,
        details: '✋ + 👍'
      };
    }

    // 7. REJECTED: NUMBER_5 + THUMBS_DOWN
    if (left === 'NUMBER_5' && right === 'THUMBS_DOWN') {
      return {
        gesture: 'REJECTED',
        confidence: minConfidence,
        details: '✋ + 👎'
      };
    }

    // 8. READY: NUMBER_0 + THUMBS_UP
    if (left === 'NUMBER_0' && right === 'THUMBS_UP') {
      return {
        gesture: 'READY',
        confidence: minConfidence,
        details: '✊ + 👍'
      };
    }

    // 9. SELECT: PEACE + NUMBER_1 (peace sign pointing with index)
    if (left === 'THANK YOU' && right === 'NUMBER_1') {
      return {
        gesture: 'SELECT',
        confidence: minConfidence,
        details: '✌️ + 👉'
      };
    }

    // ==================== NEW GESTURES (WAIT, STOP, 6-10) ====================

    // WAIT: NUMBER_0 (Fist) + NUMBER_5 (Open Palm)
    if ((left === 'NUMBER_0' && right === 'NUMBER_5') || (left === 'NUMBER_5' && right === 'NUMBER_0')) {
      return {
        gesture: 'WAIT',
        confidence: minConfidence,
        details: '✊ + ✋'
      };
    }

    // DAILY GREETINGS: NUMBER_0 (Fist) + NUMBER_1/2/3/4
    if (left === 'NUMBER_0' || right === 'NUMBER_0') {
      const fistHand = left === 'NUMBER_0' ? 'left' : 'right';
      const otherHandValue = left === 'NUMBER_0' ? right : left;

      if (otherHandValue === 'NUMBER_1') {
        return { gesture: 'GOOD_MORNING', confidence: minConfidence, details: '✊ + ☝️' };
      }
      if (otherHandValue === 'NUMBER_2') {
        return { gesture: 'GOOD_AFTERNOON', confidence: minConfidence, details: '✊ + ✌️' };
      }
      if (otherHandValue === 'NUMBER_3') {
        return { gesture: 'GOOD_EVENING', confidence: minConfidence, details: '✊ + 🖐️' };
      }
      if (otherHandValue === 'NUMBER_4') {
        return { gesture: 'GOOD_NIGHT', confidence: minConfidence, details: '✊ + 🖐️' };
      }
    }

    // STOP: NUMBER_0 (Fist) + THUMBS_DOWN
    if ((left === 'NUMBER_0' && right === 'THUMBS_DOWN') || (left === 'THUMBS_DOWN' && right === 'NUMBER_0')) {
      return {
        gesture: 'STOP',
        confidence: minConfidence,
        details: '✊ + 👎'
      };
    }

    // NUMBERS 6-10 (Combinations of 5 + X)
    // Helper to extract number from gesture string "NUMBER_X"
    const getNumber = (g) => g.startsWith('NUMBER_') ? parseInt(g.split('_')[1]) : null;
    
    const numL = getNumber(left);
    const numR = getNumber(right);

    // Check if one hand is 5 and the other is a number 1-5
    if (numL !== null && numR !== null) {
      if (numL === 5 && numR >= 1 && numR <= 5) {
        return {
          gesture: `NUMBER_${5 + numR}`,
          confidence: minConfidence,
          details: `5 + ${numR}`
        };
      }
      if (numR === 5 && numL >= 1 && numL <= 5) {
        return {
          gesture: `NUMBER_${5 + numL}`,
          confidence: minConfidence,
          details: `${numL} + 5`
        };
      }
    }

    return null;
  }

  /**
   * Each hand stabilizes independently
   * 
   * @param {string} handSide - 'left' or 'right'
   * @param {Object} detectedGesture - { gesture: string, confidence: number } or null
   * @returns {Object|null} Stabilized gesture or null if not stable yet
   */
  stabilizeGesture(handSide, detectedGesture) {
    if (!detectedGesture) {
      // Reset frame counter for this hand
      this.handState[handSide].frameCount = 0;
      this.handState[handSide].lastGesture = null;
      return null;
    }

    // Same gesture detected again
    if (this.handState[handSide].lastGesture === detectedGesture.gesture) {
      this.handState[handSide].frameCount++;
      if (this.handState[handSide].frameCount >= this.STABILITY_THRESHOLD) {
        return detectedGesture; // Stable!
      }
    } else {
      // New gesture detected - reset counter
      this.handState[handSide].lastGesture = detectedGesture.gesture;
      this.handState[handSide].frameCount = 1;
    }

    return null; // Not stable yet
  }

  process(results) {
    if (!results || !results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
      return null;
    }

    // ✅ REFACTORED: Assign hands independently
    const { leftHand, rightHand } = this.assignHandRoles(results);

    // ✅ REFACTORED: Process each hand separately with independent stability
    let leftStabilized = null;
    let rightStabilized = null;

    // Process left hand if present
    if (leftHand) {
      const leftDetected = this._detectSingleHandGesture(leftHand);
      leftStabilized = this.stabilizeGesture('left', leftDetected);
    } else {
      // Reset left hand state if not detected
      this.stabilizeGesture('left', null);
    }

    // Process right hand if present
    if (rightHand) {
      const rightDetected = this._detectSingleHandGesture(rightHand);
      rightStabilized = this.stabilizeGesture('right', rightDetected);
    } else {
      // Reset right hand state if not detected
      this.stabilizeGesture('right', null);
    }

    // ==================== TWO-HAND GESTURE DETECTION ====================
    // Check for two-hand gestures ONLY if both hands are stabilized
    if (leftStabilized && rightStabilized) {
      const twoHandGesture = this.detectTwoHandGesture(leftStabilized, rightStabilized);
      if (twoHandGesture) {
        return twoHandGesture;
      }
    }

    // ==================== SINGLE-HAND GESTURE FALLBACK ====================
    // Return single-hand gesture if no two-hand gesture detected
    // Prefer right hand if both hands have stable gestures
    if (rightStabilized) {
      return rightStabilized;
    }
    if (leftStabilized) {
      return leftStabilized;
    }

    return null;
  }

  /**
   * DEBUG: Print finger states
   */
  debug(landmarks) {
    console.log('=== GESTURE DEBUG ===');
    const states = this.getFingerStates(landmarks);
    console.log('States:', states);
    console.log('Extended Count:', this.countExtendedFingers(landmarks));
    console.log('Thumb Up:', this.isThumbUp(landmarks));
  }
}
```