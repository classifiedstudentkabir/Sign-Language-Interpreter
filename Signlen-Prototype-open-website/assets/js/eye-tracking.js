// ========================================
// EYE TRACKING - Gaze Direction Detection
// MediaPipe FaceMesh Integration
// ========================================

// ==================== GLOBAL VARIABLES ====================
let videoElement, canvasElement, canvasCtx;
let faceMesh, camera;
let gazeTextElement;
let currentGaze = 'CENTER';
let gazeStability = { lastGaze: null, frameCount: 0 };
const STABILITY_THRESHOLD = 5;

// ==================== FACEMESH IRIS LANDMARK INDICES ====================
const IRIS_LANDMARKS = {
  LEFT_IRIS: [468, 469, 470, 471, 472],  // Left iris points
  RIGHT_IRIS: [473, 474, 475, 476, 477], // Right iris points
  LEFT_EYE_OUTER: 33,
  LEFT_EYE_INNER: 133,
  RIGHT_EYE_OUTER: 362,
  RIGHT_EYE_INNER: 263,
  NOSE_TIP: 1,
  LEFT_EYE_TOP: 159,
  LEFT_EYE_BOTTOM: 145,
  RIGHT_EYE_TOP: 386,
  RIGHT_EYE_BOTTOM: 374
};

// ==================== GAZE DETECTION CLASS ====================
class GazeDetector {
  constructor() {
    this.calibration = {
      leftEyeWidth: 0,
      rightEyeWidth: 0,
      leftEyeHeight: 0,
      rightEyeHeight: 0
    };
    this.calibrated = false;
  }

  // ========== HELPER: Get average iris position ==========
  getIrisCenter(landmarks, irisIndices) {
    let sumX = 0, sumY = 0;
    for (const idx of irisIndices) {
      sumX += landmarks[idx].x;
      sumY += landmarks[idx].y;
    }
    return {
      x: sumX / irisIndices.length,
      y: sumY / irisIndices.length
    };
  }

  // ========== HELPER: Calculate eye dimensions ==========
  calibrateEye(landmarks) {
    const leftOuter = landmarks[IRIS_LANDMARKS.LEFT_EYE_OUTER];
    const leftInner = landmarks[IRIS_LANDMARKS.LEFT_EYE_INNER];
    const rightOuter = landmarks[IRIS_LANDMARKS.RIGHT_EYE_OUTER];
    const rightInner = landmarks[IRIS_LANDMARKS.RIGHT_EYE_INNER];

    const leftTop = landmarks[IRIS_LANDMARKS.LEFT_EYE_TOP];
    const leftBottom = landmarks[IRIS_LANDMARKS.LEFT_EYE_BOTTOM];
    const rightTop = landmarks[IRIS_LANDMARKS.RIGHT_EYE_TOP];
    const rightBottom = landmarks[IRIS_LANDMARKS.RIGHT_EYE_BOTTOM];

    this.calibration.leftEyeWidth = Math.abs(leftOuter.x - leftInner.x);
    this.calibration.rightEyeWidth = Math.abs(rightOuter.x - rightInner.x);
    this.calibration.leftEyeHeight = Math.abs(leftTop.y - leftBottom.y);
    this.calibration.rightEyeHeight = Math.abs(rightTop.y - rightBottom.y);
    
    this.calibrated = true;
  }

  // ========== DETECT GAZE DIRECTION ==========
  detectGaze(landmarks) {
    if (!this.calibrated) {
      this.calibrateEye(landmarks);
      return 'CALIBRATING';
    }

    // Get iris centers
    const leftIris = this.getIrisCenter(landmarks, IRIS_LANDMARKS.LEFT_IRIS);
    const rightIris = this.getIrisCenter(landmarks, IRIS_LANDMARKS.RIGHT_IRIS);

    // Get eye corners
    const leftOuter = landmarks[IRIS_LANDMARKS.LEFT_EYE_OUTER];
    const leftInner = landmarks[IRIS_LANDMARKS.LEFT_EYE_INNER];
    const rightOuter = landmarks[IRIS_LANDMARKS.RIGHT_EYE_OUTER];
    const rightInner = landmarks[IRIS_LANDMARKS.RIGHT_EYE_INNER];

    // Get eye vertical points
    const leftTop = landmarks[IRIS_LANDMARKS.LEFT_EYE_TOP];
    const leftBottom = landmarks[IRIS_LANDMARKS.LEFT_EYE_BOTTOM];
    const rightTop = landmarks[IRIS_LANDMARKS.RIGHT_EYE_TOP];
    const rightBottom = landmarks[IRIS_LANDMARKS.RIGHT_EYE_BOTTOM];

    // Calculate horizontal position ratios (0 = left, 1 = right)
    const leftHorizontalRatio = (leftIris.x - leftOuter.x) / (leftInner.x - leftOuter.x);
    const rightHorizontalRatio = (rightIris.x - rightOuter.x) / (rightInner.x - rightOuter.x);
    const avgHorizontalRatio = (leftHorizontalRatio + rightHorizontalRatio) / 2;

    // Calculate vertical position ratios (0 = top, 1 = bottom)
    const leftVerticalRatio = (leftIris.y - leftTop.y) / (leftBottom.y - leftTop.y);
    const rightVerticalRatio = (rightIris.y - rightTop.y) / (rightBottom.y - rightTop.y);
    const avgVerticalRatio = (leftVerticalRatio + rightVerticalRatio) / 2;

    // Determine gaze direction
    let horizontalGaze = 'CENTER';
    let verticalGaze = 'CENTER';

    // Horizontal detection (adjusted thresholds for better sensitivity)
    if (avgHorizontalRatio < 0.35) {
      horizontalGaze = 'LEFT';
    } else if (avgHorizontalRatio > 0.65) {
      horizontalGaze = 'RIGHT';
    }

    // Vertical detection
    if (avgVerticalRatio < 0.35) {
      verticalGaze = 'UP';
    } else if (avgVerticalRatio > 0.65) {
      verticalGaze = 'DOWN';
    }

    // Combine directions
    if (verticalGaze === 'CENTER' && horizontalGaze === 'CENTER') {
      return 'CENTER';
    } else if (verticalGaze === 'CENTER') {
      return horizontalGaze;
    } else if (horizontalGaze === 'CENTER') {
      return verticalGaze;
    } else {
      // Diagonal gaze
      return `${verticalGaze}_${horizontalGaze}`;
    }
  }

  // ========== STABILIZE GAZE (PREVENT FLICKERING) ==========
  stabilizeGaze(detectedGaze) {
    if (!detectedGaze || detectedGaze === 'CALIBRATING') {
      return detectedGaze;
    }

    if (gazeStability.lastGaze === detectedGaze) {
      gazeStability.frameCount++;
      if (gazeStability.frameCount >= STABILITY_THRESHOLD) {
        return detectedGaze;
      }
    } else {
      gazeStability.lastGaze = detectedGaze;
      gazeStability.frameCount = 1;
    }

    return currentGaze; // Return previous stable gaze
  }
}

// ==================== MEDIAPIPE INITIALIZATION ====================
function initializeMediaPipe() {
  // Get DOM elements
  videoElement = document.getElementById('eye-webcam') || document.querySelector('video');
  canvasElement = document.getElementById('eye-canvas') || document.querySelector('canvas');
  gazeTextElement = document.getElementById('gaze-text') || document.querySelector('.gaze-display');

  if (!videoElement || !canvasElement) {
    console.error('Required elements not found');
    return;
  }

  canvasCtx = canvasElement.getContext('2d');
  const gazeDetector = new GazeDetector();

  // Setup MediaPipe FaceMesh
  faceMesh = new FaceMesh({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
  });

  faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true, // CRITICAL: Enables iris tracking
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });

  faceMesh.onResults((results) => onResults(results, gazeDetector));

  // Setup camera
  camera = new Camera(videoElement, {
    onFrame: async () => {
      await faceMesh.send({ image: videoElement });
    },
    width: 640,
    height: 480
  });

  camera.start();
  console.log('✅ Eye tracking initialized');
}

// ==================== MEDIAPIPE RESULTS CALLBACK ====================
function onResults(results, gazeDetector) {
  // Clear and draw video frame
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

  if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
    const landmarks = results.multiFaceLandmarks[0];

    // Draw face mesh (optional - comment out for cleaner look)
    drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, {
      color: '#C0C0C070',
      lineWidth: 1
    });

    // Draw irises (highlight)
    drawLandmarks(canvasCtx, landmarks, {
      color: '#00FF00',
      lineWidth: 1,
      radius: 2,
      visibilityMin: 0.5
    });

    // Highlight iris points specifically
    const leftIris = IRIS_LANDMARKS.LEFT_IRIS;
    const rightIris = IRIS_LANDMARKS.RIGHT_IRIS;
    
    canvasCtx.fillStyle = '#FF0000';
    leftIris.forEach(idx => {
      const point = landmarks[idx];
      canvasCtx.beginPath();
      canvasCtx.arc(point.x * 640, point.y * 480, 3, 0, 2 * Math.PI);
      canvasCtx.fill();
    });
    
    canvasCtx.fillStyle = '#0000FF';
    rightIris.forEach(idx => {
      const point = landmarks[idx];
      canvasCtx.beginPath();
      canvasCtx.arc(point.x * 640, point.y * 480, 3, 0, 2 * Math.PI);
      canvasCtx.fill();
    });

    // Detect gaze
    try {
      const detectedGaze = gazeDetector.detectGaze(landmarks);
      const stableGaze = gazeDetector.stabilizeGaze(detectedGaze);
      
      if (stableGaze && stableGaze !== currentGaze) {
        currentGaze = stableGaze;
        updateGazeUI(stableGaze);
      }
    } catch (error) {
      console.error('Gaze detection error:', error);
    }
  } else {
    updateGazeUI('NO FACE DETECTED');
  }

  canvasCtx.restore();
}

// ==================== UI UPDATE FUNCTION ====================
function updateGazeUI(gaze) {
  if (!gazeTextElement) return;

  // Format gaze direction
  const displayGaze = formatGazeName(gaze);
  gazeTextElement.textContent = displayGaze;

  // Apply different colors based on direction
  gazeTextElement.className = 'gaze-display';
  
  if (gaze === 'CENTER') {
    gazeTextElement.classList.add('gaze-center');
  } else if (gaze.includes('LEFT') || gaze.includes('RIGHT')) {
    gazeTextElement.classList.add('gaze-horizontal');
  } else if (gaze.includes('UP') || gaze.includes('DOWN')) {
    gazeTextElement.classList.add('gaze-vertical');
  }

  console.log(`👁️ Gaze: ${gaze}`);

  // Fire custom event for other components
  window.dispatchEvent(new CustomEvent('gazeDetected', {
    detail: { gaze: displayGaze }
  }));
}

// ==================== HELPER: Format gaze name ==========
function formatGazeName(gaze) {
  if (gaze === 'CALIBRATING') return 'Calibrating...';
  if (gaze === 'NO FACE DETECTED') return 'No Face Detected';
  
  return gaze
    .split('_')
    .map(word => word.charAt(0) + word.slice(1).toLowerCase())
    .join(' ');
}

// ==================== INITIALIZATION ====================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeMediaPipe);
} else {
  initializeMediaPipe();
}

// ==================== CLEANUP ====================
window.addEventListener('beforeunload', () => {
  if (camera) camera.stop();
  console.log('Eye tracking stopped');
});

// ==================== CALIBRATION HELPER ====================
// Optional: Add a calibration button handler
function startCalibration() {
  gazeStability = { lastGaze: null, frameCount: 0 };
  currentGaze = 'CENTER';
  console.log('🎯 Eye tracking calibration reset');
}

// Expose calibration function globally
window.startEyeCalibration = startCalibration;