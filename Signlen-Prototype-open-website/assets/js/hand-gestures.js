// ========================================
// HAND GESTURES - BROWSER CONTROL
// Simplified 4-Gesture Logic
// ========================================

// ==================== SAFETY CHECK ====================
// Only run on hand-gestures.html page
if (!window.location.pathname.includes('hand-gestures.html')) {
  console.log('⏸️ Hand gesture script skipped (not on hand-gestures.html)');
} else {

// ==================== GLOBAL VARIABLES ====================
let videoElement, canvasElement, canvasCtx;
let hands, camera;
let gestureDetector;
let isRunning = false;

// ==================== DOM ELEMENTS ====================
let startButton, stopButton, statusElement, gestureDisplayElement;

// ==================== MEDIAPIPE LANDMARK INDICES ====================
const LANDMARKS = {
  WRIST: 0,
  INDEX_TIP: 8,
  INDEX_PIP: 6,
  MIDDLE_TIP: 12,
  MIDDLE_PIP: 10,
  RING_TIP: 16,
  RING_PIP: 14,
  PINKY_TIP: 20,
  PINKY_PIP: 18
};

// ==================== GESTURE DETECTOR CLASS ====================
class GestureDetector {
  constructor() {
    this.lastActionTime = 0;
    this.COOLDOWN_MS = 2000; // 2 seconds cooldown
  }

  isFingerExtended(landmarks, tipIdx, pipIdx) {
    if (!landmarks[tipIdx] || !landmarks[pipIdx]) return false;
    // Simple check: Tip is higher (lower y value) than PIP joint
    return landmarks[tipIdx].y < landmarks[pipIdx].y;
  }

  process(results) {
    if (!results || !results.multiHandLandmarks || results.multiHandLandmarks.length === 0) {
      return { text: 'No hand detected', active: false };
    }

    // Use only the first detected hand
    const landmarks = results.multiHandLandmarks[0];

    // Check individual finger states (Ignoring Thumb)
    const indexExt = this.isFingerExtended(landmarks, LANDMARKS.INDEX_TIP, LANDMARKS.INDEX_PIP);
    const middleExt = this.isFingerExtended(landmarks, LANDMARKS.MIDDLE_TIP, LANDMARKS.MIDDLE_PIP);
    const ringExt = this.isFingerExtended(landmarks, LANDMARKS.RING_TIP, LANDMARKS.RING_PIP);
    const pinkyExt = this.isFingerExtended(landmarks, LANDMARKS.PINKY_TIP, LANDMARKS.PINKY_PIP);

    const isFist = !indexExt && !middleExt && !ringExt && !pinkyExt;

    // 4) CLOSED FIST - STOP DETECTION COMPLETELY
    if (isFist) {
      stopCamera();
      return { text: "🛑 Detection Stopped", active: false };
    }

    // Determine Active Gesture
    let gestureName = '';
    let action = null;

    if (indexExt && !middleExt && !ringExt && !pinkyExt) {
      // 1) INDEX FINGER ONLY -> New Tab (Google)
      gestureName = "☝️ New Tab";
      action = this.openNewTab;
    } else if (indexExt && middleExt && !ringExt && !pinkyExt) {
      // 2) TWO FINGERS -> YouTube
      gestureName = "✌️ YouTube";
      action = this.openYouTube;
    } else if (indexExt && middleExt && ringExt && !pinkyExt) {
      // 3) THREE FINGERS -> Spotify
      gestureName = "🤟 Spotify";
      action = this.openSpotify;
    } else {
      gestureName = "Detecting...";
    }

    // Handle Action Triggering with Cooldown
    if (action && (Date.now() - this.lastActionTime > this.COOLDOWN_MS)) {
      console.log(`🚀 Triggering Action: ${gestureName}`);
      action();
      this.lastActionTime = Date.now();
      return { text: `Opening ${gestureName}...`, active: true };
    }

    return { text: gestureName, active: false };
  }

  // --- Actions ---
  openNewTab() {
    window.open("https://www.google.com", "_blank");
  }

  openYouTube() {
    window.open("https://www.youtube.com", "_blank");
  }

  openSpotify() {
    window.open("https://open.spotify.com", "_blank");
  }
}

// ==================== MEDIAPIPE RESULTS CALLBACK ====================
function onResults(results) {
  if (!canvasCtx || !canvasElement) return;

  // 1. Draw Camera Feed & Landmarks
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
        color: '#00FF00',
        lineWidth: 2
      });
      drawLandmarks(canvasCtx, landmarks, {
        color: '#FF0000',
        lineWidth: 1,
        radius: 3
      });
    }
  }
  canvasCtx.restore();

  // 2. Process Gestures
  try {
    const result = gestureDetector.process(results);
    updateGestureUI(result);
  } catch (error) {
    console.error('Gesture logic error:', error);
  }
}

// ==================== UI UPDATE FUNCTION ====================
function updateGestureUI(result) {
  if (!gestureDisplayElement) return;

  gestureDisplayElement.textContent = result.text;
  
  if (result.active) {
    gestureDisplayElement.style.color = '#00ff88'; 
    gestureDisplayElement.style.transform = 'scale(1.1)';
  } else if (result.text.includes("Stopped")) {
    gestureDisplayElement.style.color = '#ff4444'; // Red for stop
    gestureDisplayElement.style.transform = 'scale(1)';
  } else {
    gestureDisplayElement.style.color = ''; 
    gestureDisplayElement.style.transform = 'scale(1)';
  }
}

// ==================== START CAMERA ====================
async function startCamera() {
  if (isRunning) return;

  try {
    updateStatus('Initializing camera...', 'loading');

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480 }
    });

    videoElement.srcObject = stream;
    await videoElement.play();

    canvasElement.width = 640;
    canvasElement.height = 480;

    hands = new Hands({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
      maxNumHands: 1, 
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    hands.onResults(onResults);

    camera = new Camera(videoElement, {
      onFrame: async () => {
        await hands.send({ image: videoElement });
      },
      width: 640,
      height: 480
    });

    await camera.start();

    isRunning = true;
    updateStatus('Camera active - Show gestures', 'success');
    
    if (startButton) startButton.disabled = true;
    if (stopButton) stopButton.disabled = false;

  } catch (error) {
    console.error('Camera error:', error);
    updateStatus('Camera access denied', 'error');
  }
}

// ==================== STOP CAMERA ====================
function stopCamera() {
  if (!isRunning) return;

  try {
    if (camera) camera.stop();
    if (videoElement && videoElement.srcObject) {
      videoElement.srcObject.getTracks().forEach(track => track.stop());
      videoElement.srcObject = null;
    }

    isRunning = false;
    updateStatus('Camera stopped', 'idle');
    
    if (startButton) startButton.disabled = false;
    if (stopButton) stopButton.disabled = true;
    if (gestureDisplayElement) gestureDisplayElement.textContent = 'Ready to detect';

  } catch (error) {
    console.error('Stop error:', error);
  }
}

// ==================== UPDATE STATUS ====================
function updateStatus(message, type = 'idle') {
  if (!statusElement) return;
  statusElement.textContent = message;
  statusElement.className = `status status-${type}`;
}

// ==================== INITIALIZATION ====================
function initialize() {
  console.log('🚀 Initializing Simple Browser Control...');

  // Get DOM elements
  videoElement = document.getElementById('webcam') || document.querySelector('video');
  canvasElement = document.getElementById('canvas') || document.querySelector('canvas');
  gestureDisplayElement = document.getElementById('gesture-display');
  statusElement = document.getElementById('status');
  startButton = document.getElementById('start-camera');
  stopButton = document.getElementById('stop-camera');

  if (!videoElement || !canvasElement) {
    console.error('❌ Required elements not found');
    return;
  }

  canvasCtx = canvasElement.getContext('2d');
  gestureDetector = new GestureDetector();

  if (startButton) startButton.addEventListener('click', startCamera);
  if (stopButton) {
    stopButton.addEventListener('click', stopCamera);
    stopButton.disabled = true;
  }

  updateStatus('Ready', 'idle');
}

// ==================== AUTO-INITIALIZE ====================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

window.addEventListener('beforeunload', () => {
  if (isRunning) stopCamera();
});

} // End of page check