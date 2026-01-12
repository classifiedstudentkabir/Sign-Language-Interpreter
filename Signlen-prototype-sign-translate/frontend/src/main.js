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
  // Special cases for exact requested text
  const specialCases = {
    'WE_ARE_SILENT_CODERS': 'We are Silent Coders.',
    'WE_BUILT_SIGNLENS': 'We built SignLens.',
    'LETS_BEGIN': "Let's Begin!"
  };

  if (specialCases[gesture]) {
    return specialCases[gesture];
  }

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