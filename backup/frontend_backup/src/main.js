// This file is adapted to integrate the new gesture detection system.
// It includes camera setup and the MediaPipe onResults callback.

const videoElement = document.getElementById("video");
const canvasElement = document.getElementById("canvas");
const canvasCtx = canvasElement.getContext("2d");

/**
 * The main callback function that processes MediaPipe results.
 * @param {Object} results - The hand detection results from MediaPipe.
 */
function onResults(results) {
  // --- Standard MediaPipe drawing ---
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
    results.image,
    0,
    0,
    canvasElement.width,
    canvasElement.height
  );

  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
      window.drawConnectors(canvasCtx, landmarks, window.HAND_CONNECTIONS, {
        color: "#00FF00",
        lineWidth: 2,
      });
      window.drawLandmarks(canvasCtx, landmarks, {
        color: "#FF0000",
        lineWidth: 1,
      });
    }
  }
  canvasCtx.restore();
  // --- End of standard drawing ---

  // ✅ ADDED THESE 2 LINES FOR NEW GESTURE SYSTEM
  const gesture = processGestureDetection(results);
  updateGestureUI(gesture);
}

/**
 * Sets up the camera and MediaPipe Hands instance.
 * @param {HTMLVideoElement} videoElement - The video element to use for camera input.
 * @param {Function} onResults - The callback function for MediaPipe results.
 */
function setupCamera(videoElement, onResults) {
  const hands = new window.Hands({
    locateFile: (file) =>
      `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
  });

  hands.setOptions({
    maxNumHands: 2,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7,
  });

  hands.onResults(onResults);

  const camera = new window.Camera(videoElement, {
    onFrame: async () => {
      await hands.send({ image: videoElement });
    },
    width: 640,
    height: 480,
  });

  camera.start();
}

// Initialize the camera and gesture detection
setupCamera(videoElement, onResults);
