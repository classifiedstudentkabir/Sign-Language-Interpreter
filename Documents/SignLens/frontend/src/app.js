// ========================================
// SIGN A.I INTERPRETER - CORE APPLICATION
// ========================================

// State Management
let currentPage = 'landing';
let isAudioActive = false;
let isCameraActive = false;
let cameraStream = null;
let gestureRotationInterval = null;
let audioVisualizerInterval = null;
let speechRecognition = null;

// DOM Elements
const pages = {
    landing: document.getElementById('landingPage'),
    welcome: document.getElementById('welcomePage'),
    permissions: document.getElementById('permissionsPage'),
    help: document.getElementById('helpPage'),
    interpreter: document.getElementById('interpreterPage')
};

// Buttons
const getStartedBtn = document.getElementById('getStartedBtn');
const googleSignIn = document.getElementById('googleSignIn');
const githubSignIn = document.getElementById('githubSignIn');
const guestSignIn = document.getElementById('guestSignIn');
const allowPermissionsBtn = document.getElementById('allowPermissionsBtn');
const helpBtn = document.getElementById('helpBtn');
const tryAgainBtn = document.getElementById('tryAgainBtn');
const skipToDemoBtn = document.getElementById('skipToDemoBtn');
const switchCameraBtn = document.getElementById('switchCameraBtn');
const toggleVideoBtn = document.getElementById('toggleVideoBtn');
const toggleAudioBtn = document.getElementById('toggleAudioBtn');
const logoutBtn = document.getElementById('logoutBtn');
const startAudioBtn = document.getElementById('startAudioBtn');
const stopAudioBtn = document.getElementById('stopAudioBtn');
const guideBtn = document.getElementById('guideBtn');
const closeGuideBtn = document.getElementById('closeGuideBtn');
const guideModal = document.getElementById('guideModal');
const guideContent = document.getElementById('guideContent');

// Display Elements
const gestureNameDisplay = document.getElementById('gestureName');
const centerEmoji = document.getElementById('centerEmoji');
const detectedGestureElement = document.getElementById('detectedGesture');
const transcriptText = document.getElementById('transcriptText');
const audioVisualizer = document.getElementById('audioVisualizer');
const videoElement = document.getElementById('cameraVideo');
const canvasElement = document.getElementById('output-canvas');
const canvasCtx = canvasElement.getContext('2d');

// MediaPipe & Gesture Detection
let hands = null;
let camera = null;
const gestureDetector = new ImprovedGestureDetector();

// Gesture Data for Landing Page Orbit
const gestures = [
    { emoji: '👍', name: 'Thumbs Up', meanings: ['Good', 'Yes', 'Okay'] },
    { emoji: '👎', name: 'Thumbs Down', meanings: ['Bad', 'No', 'Dislike'] },
    { emoji: '👌', name: 'OK Hand', meanings: ['OK', 'Perfect', 'Nice'] },
    { emoji: '🖐️', name: 'Open Palm', meanings: ['Stop', 'Wait', 'High Five'] },
    { emoji: '✌️', name: 'Peace', meanings: ['Two', 'Victory'] },
    { emoji: '☝️', name: 'Number 1', meanings: ['Point', 'One'] },
    { emoji: '🤙', name: 'Call Me', meanings: ['Call', 'Hang Loose'] },
    { emoji: '🤘', name: 'Rock On', meanings: ['Rock', 'Metal'] }
];

// ========================================
// INITIALIZATION
// ========================================
function init() {
    createCircularHandGestures();
    setupEventListeners();
    initMediaPipe();
}

// ========================================
// 1. LANDING PAGE ANIMATIONS
// ========================================
function createCircularHandGestures() {
    const container = document.querySelector('.gesture-orbit-container');
    const radius = 200;
    const centerX = 250;
    const centerY = 250;
    const numberOfHands = gestures.length;

    // Clear existing hands
    container.querySelectorAll('.hand-emoji').forEach(el => el.remove());

    // Create hand emojis
    for (let i = 0; i < numberOfHands; i++) {
        const hand = document.createElement('div');
        hand.className = 'hand-emoji';
        hand.innerHTML = gestures[i].emoji;
        hand.dataset.name = gestures[i].name;
        
        // Position on circle
        const angle = (i / numberOfHands) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        hand.style.left = `${x - 30}px`;
        hand.style.top = `${y - 30}px`;

        // Add interactions
        hand.addEventListener('mouseenter', (e) => showGestureInfo(gestures[i], hand));
        hand.addEventListener('mouseleave', () => gestureNameDisplay.style.opacity = '0');
        hand.addEventListener('click', () => showGestureInfo(gestures[i], hand, true));

        container.appendChild(hand);
    }

    startGestureRotation();
    startCenterEmojiRotation();
}

function startGestureRotation() {
    const handsEls = document.querySelectorAll('.hand-emoji');
    const radius = 200;
    const centerX = 250;
    const centerY = 250;
    let angle = 0;

    if (gestureRotationInterval) clearInterval(gestureRotationInterval);
    gestureRotationInterval = setInterval(() => {
        handsEls.forEach((hand, i) => {
            const individualAngle = angle + (i / handsEls.length) * 2 * Math.PI;
            const x = centerX + radius * Math.cos(individualAngle);
            const y = centerY + radius * Math.sin(individualAngle);
            hand.style.left = `${x - 30}px`;
            hand.style.top = `${y - 30}px`;
        });
        angle += 0.005;
    }, 30);
}

function startCenterEmojiRotation() {
    let centerIndex = 0;
    const centerEmojis = ['🤖', '👋', '👍', '👌', '🙏', '✌️'];
    setInterval(() => {
        centerEmoji.textContent = centerEmojis[centerIndex];
        centerIndex = (centerIndex + 1) % centerEmojis.length;
    }, 2000);
}

function showGestureInfo(gesture, element, isClick = false) {
    const rect = element.getBoundingClientRect();
    const containerRect = element.parentElement.getBoundingClientRect();
    
    gestureNameDisplay.textContent = `${gesture.name}: ${gesture.meanings.join(', ')}`;
    gestureNameDisplay.style.left = `${rect.left - containerRect.left + 40}px`;
    gestureNameDisplay.style.top = `${rect.top - containerRect.top - 50}px`;
    gestureNameDisplay.style.opacity = '1';
    
    if (isClick) {
        element.style.transform = 'scale(1.5)';
        setTimeout(() => element.style.transform = 'scale(1.4)', 300);
        centerEmoji.textContent = gesture.emoji;
    }
}

// ========================================
// 2. PAGE NAVIGATION
// ========================================
function showPage(pageName) {
    Object.values(pages).forEach(page => page.classList.add('hidden'));
    pages[pageName].classList.remove('hidden');
    currentPage = pageName;
    
    if (pageName === 'interpreter') {
        startInterpreter();
    } else {
        stopInterpreter();
    }
}

// ========================================
// 3. MEDIAPIPE LOGIC
// ========================================
function initMediaPipe() {
    hands = new Hands({
        locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
    });

    hands.setOptions({
        maxNumHands: 2,
        modelComplexity: 0, // 0 = Lite (Faster), 1 = Full (Accurate)
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
    });

    hands.onResults(onResults);
}

async function startInterpreter() {
    try {
        if (!camera) {
            camera = new Camera(videoElement, {
                onFrame: async () => {
                    if (isCameraActive) {
                        await hands.send({ image: videoElement });
                    }
                },
                width: 640,  // Reduced from 1280 for performance
                height: 480
            });
        }
        await camera.start();
        isCameraActive = true;
        toggleVideoBtn.innerHTML = '<i class="fas fa-video"></i> Camera: ON';
        canvasElement.width = 640;
        canvasElement.height = 480;
    } catch (error) {
        console.error('Camera start error:', error);
        alert('Failed to start camera. Please check permissions.');
    }
}

function stopInterpreter() {
    if (camera) {
        camera.stop();
        isCameraActive = false;
    }
}

function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
        for (const landmarks of results.multiHandLandmarks) {
            drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: '#40e0d0', lineWidth: 4 });
            drawLandmarks(canvasCtx, landmarks, { color: '#ffffff', lineWidth: 1, radius: 4 });
        }
    }

    const gestureResult = gestureDetector.process(results);
    updateGestureUI(gestureResult);

    canvasCtx.restore();
}

function updateGestureUI(result) {
    if (!result) {
        detectedGestureElement.textContent = 'None';
        return;
    }

    const displayName = result.gesture.split('_').map(w => w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
    
    if (detectedGestureElement.textContent !== displayName) {
        detectedGestureElement.textContent = displayName;
        detectedGestureElement.classList.add('gesture-detected');
        setTimeout(() => detectedGestureElement.classList.remove('gesture-detected'), 300);
    }
}

// ========================================
// 4. SPEECH LOGIC
// ========================================
function setupSpeech() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    speechRecognition = new SpeechRecognition();
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.lang = 'en-US';

    speechRecognition.onresult = (event) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript + ' ';
            }
        }
        if (finalTranscript) {
            transcriptText.textContent = finalTranscript;
        }
    };
}

async function startAudioRecording() {
    if (!speechRecognition) setupSpeech();
    if (!speechRecognition) {
        alert('Speech recognition not supported in this browser.');
        return;
    }

    try {
        // Only get stream if visualizer is needed, otherwise speech recognition works without getUserMedia in some browsers
        // But for visualizer we need it.
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        isAudioActive = true;
        startAudioBtn.disabled = true;
        stopAudioBtn.disabled = false;
        toggleAudioBtn.innerHTML = '<i class="fas fa-microphone"></i> Audio: ON';
        toggleAudioBtn.style.color = '#40e0d0'; // Highlight active state
        
        try {
            speechRecognition.start();
        } catch (e) {
            console.log("Recognition already started");
        }
        
        startAudioVisualization(stream);
    } catch (err) {
        console.error('Audio start error:', err);
        alert('Could not access microphone. Please allow permissions.');
    }
}

function stopAudioRecording() {
    if (speechRecognition) {
        try {
            speechRecognition.stop();
        } catch(e) { console.log(e); }
    }
    
    isAudioActive = false;
    startAudioBtn.disabled = false;
    stopAudioBtn.disabled = true;
    toggleAudioBtn.innerHTML = '<i class="fas fa-microphone-slash"></i> Audio: OFF';
    toggleAudioBtn.style.color = ''; // Reset color
    
    if (audioVisualizerInterval) clearInterval(audioVisualizerInterval);
    audioVisualizer.innerHTML = ''; // Clear bars
}

function startAudioVisualization(stream) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    audioVisualizer.innerHTML = '';
    const barCount = 20;
    for (let i = 0; i < barCount; i++) {
        const bar = document.createElement('div');
        bar.className = 'visualizer-bar';
        bar.style.left = `${(i * (100 / barCount))}%`;
        bar.style.width = '4px';
        audioVisualizer.appendChild(bar);
    }
    const bars = audioVisualizer.querySelectorAll('.visualizer-bar');

    audioVisualizerInterval = setInterval(() => {
        analyser.getByteFrequencyData(dataArray);
        bars.forEach((bar, i) => {
            const height = (dataArray[i % bufferLength] / 255) * 100;
            bar.style.height = `${Math.max(10, height)}%`;
        });
    }, 50);
}

// ========================================
// 5. EVENT LISTENERS
// ========================================
function setupEventListeners() {
    getStartedBtn.addEventListener('click', () => showPage('welcome'));
    
    // Simplified Auth
    [googleSignIn, githubSignIn, guestSignIn].forEach(btn => {
        btn.addEventListener('click', () => {
            showLoading('Signing in...');
            setTimeout(() => {
                hideLoading();
                showPage('permissions');
            }, 1000);
        });
    });

    allowPermissionsBtn.addEventListener('click', async () => {
        showLoading('Initializing Devices...');
        try {
            // Test permissions
            const cam = await navigator.mediaDevices.getUserMedia({ video: true });
            cam.getTracks().forEach(t => t.stop());
            const mic = await navigator.mediaDevices.getUserMedia({ audio: true });
            mic.getTracks().forEach(t => t.stop());
            
            hideLoading();
            showPage('interpreter');
        } catch (err) {
            hideLoading();
            showPage('help');
        }
    });

    helpBtn.addEventListener('click', () => showPage('help'));
    tryAgainBtn.addEventListener('click', () => showPage('permissions'));
    skipToDemoBtn.addEventListener('click', () => showPage('interpreter'));

    logoutBtn.addEventListener('click', () => {
        stopInterpreter();
        stopAudioRecording();
        showPage('landing');
    });

    toggleVideoBtn.addEventListener('click', () => {
        if (isCameraActive) {
            stopInterpreter(); // This stops the camera instance
            toggleVideoBtn.innerHTML = '<i class="fas fa-video-slash"></i> Camera: OFF';
            // Clear canvas
            canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
            canvasCtx.fillStyle = 'black';
            canvasCtx.fillRect(0, 0, canvasElement.width, canvasElement.height);
            canvasCtx.fillStyle = 'white';
            canvasCtx.font = '20px Arial';
            canvasCtx.fillText('Camera Paused', canvasElement.width/2 - 60, canvasElement.height/2);
        } else {
            startInterpreter();
            toggleVideoBtn.innerHTML = '<i class="fas fa-video"></i> Camera: ON';
        }
    });

    switchCameraBtn.addEventListener('click', async () => {
        // Implement camera switching logic if multiple cameras exist
        alert('Switching camera not fully implemented in this demo (requires hardware check).');
    });

    startAudioBtn.addEventListener('click', startAudioRecording);
    stopAudioBtn.addEventListener('click', stopAudioRecording);
    
    toggleAudioBtn.addEventListener('click', () => {
        // This is a master toggle for the feature
        if (isAudioActive) {
            stopAudioRecording();
        } else {
            startAudioRecording();
        }
    });

    // Guide Modal
    guideBtn.addEventListener('click', () => {
        populateGuide();
        guideModal.classList.remove('hidden');
    });

    closeGuideBtn.addEventListener('click', () => {
        guideModal.classList.add('hidden');
    });

    // Close modal when clicking outside
    guideModal.addEventListener('click', (e) => {
        if (e.target === guideModal) {
            guideModal.classList.add('hidden');
        }
    });

    // Feature Icons alerts


    document.getElementById('privacyFeature').addEventListener('click', () => alert('Privacy: All processing happens locally.'));
    document.getElementById('aiFeature').addEventListener('click', () => alert('AI: Powered by MediaPipe & Custom Logic.'));
    document.getElementById('realtimeFeature').addEventListener('click', () => alert('Real-Time: Low latency hand tracking.'));
}

// ========================================
// UTILS
// ========================================
function populateGuide() {
    if (guideContent.innerHTML !== '') return; // Already populated

    const sections = [
        {
            title: 'Single-Hand Gestures',
            gestures: [
                { g: 'Number 0', d: '✊ Make a fist with all fingers curled, including the thumb.' },
                { g: 'Number 1', d: '☝️ Extend only the index finger upwards. Curl all other fingers.' },
                { g: 'Number 2', d: '✌️ Extend the index and middle fingers (V-shape). The thumb must be curled IN.' },
                { g: 'Number 3', d: '🖐️ Extend the index, middle, and ring fingers. The thumb must be curled IN.' },
                { g: 'Number 4', d: '🖐️ Extend all four fingers (index, middle, ring, pinky). The thumb must be curled IN.' },
                { g: 'Number 5', d: '🖐️ Extend all five fingers, including the thumb.' },
                { g: 'Thumbs Up', d: '👍 Make a fist and point your thumb upwards.' },
                { g: 'Thumbs Down', d: '👎 Make a fist and point your thumb downwards.' },
                { g: 'Okay', d: '👌 Touch your thumb and index finger to form a circle. Extend the other three fingers.' },
                { g: 'Thank You', d: '✌️ Index and middle (thumb OUT).' },
                { g: 'Call Me', d: '🤙 Thumb and pinky extended.' },
                { g: 'Rock', d: '🤘 Index and pinky extended.' }
            ]
        },
        {
            title: 'Two-Hand Gestures',
            gestures: [
                { g: 'YES', d: 'Right: 👍 Thumbs Up + Left: 👌 Okay' },
                { g: 'NO', d: 'Right: 👎 Thumbs Down + Left: 👌 Okay' },
                { g: 'HELP', d: 'Right: 👍 Thumbs Up + Left: ✌️ Thank You' },
                { g: 'Good Job', d: '👍 Thumbs Up + 👍 Thumbs Up' },
                { g: 'Perfect', d: '👌 Okay + 👌 Okay' },
                { g: 'Accepted', d: 'Right: 🖐️ Five + Left: 👍 Thumbs Up' },
                { g: 'Rejected', d: 'Right: 🖐️ Five + Left: 👎 Thumbs Down' },
                { g: 'Ready', d: 'Right: ✊ Fist + Left: 👍 Thumbs Up' },
                { g: 'Select', d: 'Right: ✌️ Thank You + Left: ☝️ Number 1' },
                { g: 'Alert', d: '🖐️ Five + ✌️ Thank You' },
                { g: 'All Good', d: 'Right: 👌 Okay + Left: 👍 Thumbs Up' },
                { g: 'We built SignLens.', d: '✊ Fist + 🖐️ Five' },
                { g: 'Daily Greetings', d: '✊ Fist + Number (1-4)' },
                { g: 'STOP', d: '✊ Fist + 👎 Thumbs Down' },
                { g: 'Silent Coders', d: '✊ Fist + ✊ Fist' },
                { g: 'Numbers 6-10', d: '🖐️ Five + Number (1-5)' }
            ]
        }
    ];

    let html = '';
    sections.forEach(s => {
        html += `<h3 style="color: #40e0d0; margin: 1.5rem 0 1rem; border-bottom: 1px solid rgba(64, 224, 208, 0.3); padding-bottom: 0.5rem;">${s.title}</h3>`;
        html += `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">`;
        s.gestures.forEach(g => {
            html += `
                <div style="background: rgba(255,255,255,0.05); padding: 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
                    <strong style="color: #80e1ff; display: block; margin-bottom: 0.5rem;">${g.g}</strong>
                    <span style="font-size: 0.9rem;">${g.d}</span>
                </div>
            `;
        });
        html += `</div>`;
    });
    guideContent.innerHTML = html;
}

function showLoading(msg) {
    const loader = document.createElement('div');
    loader.id = 'loadingModal';
    loader.className = 'modal';
    loader.innerHTML = `
        <div class="modal-content" style="text-align:center;">
            <i class="fas fa-spinner fa-spin" style="font-size:3rem;color:#40e0d0;margin-bottom:1rem;"></i>
            <h3>${msg}</h3>
        </div>
    `;
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.getElementById('loadingModal');
    if (loader) loader.remove();
}

// Start the app
window.onload = init;
