// ================== ELEMENTS ==================
const videoElement = document.getElementById("video");
const canvasElement = document.getElementById("canvas");
const canvasCtx = canvasElement.getContext("2d");
const gestureText = document.getElementById("gestureText");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

// ================== STATE ==================
let isCameraRunning = false;
let camera = null;
let mediaStream = null;

// Gesture stability
let lastGesture = "";
let stableGesture = "";
let sameGestureCount = 0;
const STABLE_FRAMES = 7;

// ================== MEDIAPIPE HANDS ==================
const hands = new Hands({
  locateFile: (file) =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
});

hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7,
});

// ================== HELPERS ==================
function isFingerUp(landmarks, tip, pip) {
  return landmarks[tip].y < landmarks[pip].y;
}

function countFingers(landmarks) {
  let count = 0;
  if (isFingerUp(landmarks, 8, 6)) count++;   // Index
  if (isFingerUp(landmarks, 12, 10)) count++; // Middle
  if (isFingerUp(landmarks, 16, 14)) count++; // Ring
  if (isFingerUp(landmarks, 20, 18)) count++; // Pinky
  return count;
}

// Palm facing camera heuristic
function isPalmFacingCamera(landmarks) {
  const wrist = landmarks[0];
  const middleMCP = landmarks[9];
  return wrist.y < middleMCP.y;
}

// ================== ONE HAND GESTURES ==================
function detectOneHandGesture(landmarks) {
  const indexUp  = isFingerUp(landmarks, 8, 6);
  const middleUp = isFingerUp(landmarks, 12, 10);
  const ringUp   = isFingerUp(landmarks, 16, 14);
  const pinkyUp  = isFingerUp(landmarks, 20, 18);

  const thumbUp = landmarks[4].y < landmarks[2].y;

  const fingerCount = countFingers(landmarks);

  /* =========================
     NUMBERS 0–5 (STRICT)
     ========================= */
  if (!thumbUp) {
    if (!indexUp && !middleUp && !ringUp && !pinkyUp) return "0";
    if ( indexUp && !middleUp && !ringUp && !pinkyUp) return "1";
    if ( indexUp && middleUp && !ringUp && !pinkyUp) return "2";
    if ( indexUp && middleUp && ringUp && !pinkyUp) return "3";
    if ( indexUp && middleUp && ringUp && pinkyUp) return "4";
  }

  if (
    indexUp &&
    middleUp &&
    ringUp &&
    pinkyUp &&
    thumbUp
  ) {
    return "5";
  }

  /* =========================
     THUMBS UP / DOWN
     ========================= */
  if (
    !indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ) {
    if (thumbUp) return "THUMBS UP";
    if (!thumbUp) return "THUMBS DOWN";
  }

  /* =========================
     OK
     ========================= */
  const dx = landmarks[4].x - landmarks[8].x;
  const dy = landmarks[4].y - landmarks[8].y;
  const thumbIndexDistance = Math.sqrt(dx * dx + dy * dy);

  if (
    thumbIndexDistance < 0.04 &&
    middleUp &&
    ringUp &&
    pinkyUp
  ) {
    return "OK";
  }

  /* =========================
     STOP
     ========================= */
  if (indexUp && middleUp && ringUp && pinkyUp) {
    return "STOP";
  }

  /* =========================
     POINT LEFT / RIGHT
     ========================= */
  if (indexUp && !middleUp && !ringUp && !pinkyUp) {
    const tip = landmarks[8];
    const base = landmarks[5];
    if (tip.x > base.x + 0.04) return "POINT RIGHT";
    if (tip.x < base.x - 0.04) return "POINT LEFT";
  }

  /* =========================
     COMMUNICATION
     ========================= */
  if (!thumbUp && !indexUp && !middleUp && !ringUp && !pinkyUp) {
    return "YES";
  }

  if (!thumbUp && indexUp && !middleUp && !ringUp && !pinkyUp) {
    return "NO";
  }

  return null;
}

// ================== STABILITY ==================
function getStableGesture(current) {
  if (current === lastGesture) sameGestureCount++;
  else {
    sameGestureCount = 0;
    lastGesture = current;
  }
  if (sameGestureCount >= STABLE_FRAMES) stableGesture = current;
  return stableGesture;
}

// ================== RESULTS ==================
hands.onResults((results) => {
  if (!isCameraRunning) return;

  const handCount = results.multiHandLandmarks?.length || 0;

  canvasElement.width = videoElement.videoWidth;
  canvasElement.height = videoElement.videoHeight;
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(results.image, 0, 0);

  if (handCount === 1) {
    const landmarks = results.multiHandLandmarks[0];
    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: "#00FF00" });
    drawLandmarks(canvasCtx, landmarks, { color: "#FF0000" });

    const gesture = getStableGesture(detectOneHandGesture(landmarks));
    gestureText.textContent = `Gesture: ${gesture || "Detecting..."}`;
  } else {
    gestureText.textContent = "Gesture: None";
    lastGesture = "";
    sameGestureCount = 0;
  }
});

// ================== CAMERA ==================
startBtn.addEventListener("click", async () => {
  if (isCameraRunning) return;
  mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
  videoElement.srcObject = mediaStream;

  camera = new Camera(videoElement, {
    onFrame: async () => await hands.send({ image: videoElement }),
  });

  isCameraRunning = true;
  camera.start();
});

stopBtn.addEventListener("click", () => {
  if (!isCameraRunning) return;
  camera.stop();
  mediaStream.getTracks().forEach((t) => t.stop());
  videoElement.srcObject = null;
  isCameraRunning = false;
  gestureText.textContent = "Gesture: —";
});
