// ================== ELEMENTS ==================
const videoElement = document.getElementById("video");
const canvasElement = document.getElementById("canvas");
const canvasCtx = canvasElement.getContext("2d");
const gestureText = document.getElementById("gestureText");

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

const speechText = document.getElementById("speechText");
const startListenBtn = document.getElementById("startListen");
const stopListenBtn = document.getElementById("stopListen");

// ================== STATE ==================
let isCameraRunning = false;
let camera = null;
let mediaStream = null;

let recognition = null;
let isListening = false;

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

// ================== HELPER FUNCTIONS ==================
function isFingerUp(landmarks, tip, pip) {
  return landmarks[tip].y < landmarks[pip].y;
}

function detectOneHandGesture(landmarks) {
  const indexUp  = isFingerUp(landmarks, 8, 6);
  const middleUp = isFingerUp(landmarks, 12, 10);
  const ringUp   = isFingerUp(landmarks, 16, 14);
  const pinkyUp  = isFingerUp(landmarks, 20, 18);

  const thumbTip  = landmarks[4];
  const thumbBase = landmarks[2];

  // Distance between thumb & index (used to avoid confusion)
  const dxTI = landmarks[4].x - landmarks[8].x;
  const dyTI = landmarks[4].y - landmarks[8].y;
  const thumbIndexDistance = Math.sqrt(dxTI * dxTI + dyTI * dyTI);

  /* =========================
     THUMBS UP / DOWN (STRICT)
     ========================= */
  const thumbClearlyIsolated =
    !indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp &&
    thumbIndexDistance > 0.08; // important

  if (thumbClearlyIsolated) {
    if (thumbTip.y < thumbBase.y - 0.03) {
      return "THUMBS UP";
    }
    if (thumbTip.y > thumbBase.y + 0.03) {
      return "THUMBS DOWN";
    }
  }

  /* =========================
     OK
     ========================= */
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
  if (
    indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ) {
    const indexTip = landmarks[8];
    const indexBase = landmarks[5];

    // POINT RIGHT
    if (indexTip.x > indexBase.x + 0.04) {
      return "POINT RIGHT";
    }

    // POINT LEFT
    if (indexTip.x < indexBase.x - 0.04) {
      return "POINT LEFT";
    }
  }


  /* =========================
     NO (INDEX ONLY)
     ========================= */
  if (
    indexUp &&
    !ringUp &&
    !pinkyUp &&
    landmarks[12].y > landmarks[10].y
  ) {
    return "NO";
  }

  /* =========================
     YES (FIST – FALLBACK)
     ========================= */
  if (
    !indexUp &&
    !middleUp &&
    !ringUp &&
    !pinkyUp
  ) {
    return "YES";
  }

  return null;
}


function getStableGesture(current) {
  if (current === lastGesture) {
    sameGestureCount++;
  } else {
    sameGestureCount = 0;
    lastGesture = current;
  }

  if (sameGestureCount >= STABLE_FRAMES) {
    stableGesture = current;
  }

  return stableGesture;
}

// ================== RESULTS CALLBACK ==================
hands.onResults((results) => {
  if (!isCameraRunning) return;

  const handCount = results.multiHandLandmarks?.length || 0;

  canvasElement.width = videoElement.videoWidth;
  canvasElement.height = videoElement.videoHeight;

  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
    results.image,
    0,
    0,
    canvasElement.width,
    canvasElement.height
  );

  if (handCount === 1) {
    const landmarks = results.multiHandLandmarks[0];

    drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, {
      color: "#00FF00",
      lineWidth: 3,
    });

    drawLandmarks(canvasCtx, landmarks, {
      color: "#FF0000",
      lineWidth: 2,
      radius: 4,
    });

    const rawGesture = detectOneHandGesture(landmarks);
    const finalGesture = getStableGesture(rawGesture);

    gestureText.textContent = `Gesture: ${finalGesture || "Detecting..."}`;
    gestureText.className = "";

    if (finalGesture === "YES") gestureText.classList.add("gesture-YES");
    if (finalGesture === "NO") gestureText.classList.add("gesture-NO");
    if (finalGesture === "STOP") gestureText.classList.add("gesture-STOP");
  } else {
    gestureText.textContent = "Gesture: None";
    lastGesture = "";
    sameGestureCount = 0;
    stableGesture = "";
  }
});

// ================== CAMERA CONTROL ==================
startBtn.addEventListener("click", async () => {
  if (isCameraRunning) return;

  mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
  videoElement.srcObject = mediaStream;

  camera = new Camera(videoElement, {
    onFrame: async () => {
      if (isCameraRunning) {
        await hands.send({ image: videoElement });
      }
    },
    width: 640,
    height: 480,
  });

  isCameraRunning = true;
  camera.start();
});

stopBtn.addEventListener("click", () => {
  if (!isCameraRunning) return;

  camera.stop();
  mediaStream.getTracks().forEach((t) => t.stop());

  videoElement.srcObject = null;
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  isCameraRunning = false;
  gestureText.textContent = "Gesture: —";
});

// ================== SPEECH TO TEXT ==================
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

startListenBtn.addEventListener("click", () => {
  if (!SpeechRecognition || isListening) return;

  recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = (e) => {
    speechText.textContent = e.results[0][0].transcript;
  };

  isListening = true;
  recognition.start();
});

stopListenBtn.addEventListener("click", () => {
  if (recognition && isListening) {
    recognition.stop();
    isListening = false;
    speechText.textContent = "Stopped listening";
  }
});
