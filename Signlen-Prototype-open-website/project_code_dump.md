# Project Code Dump
Date: Saturday, 10 January 2026

## Files

### about.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Gestures - GestureAI</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <i class="fas fa-hand-sparkles"></i>
                GestureAI
            </a>
            <div class="nav-menu">
                <a href="index.html" class="nav-link">Home</a>
                <a href="hand-gestures.html" class="nav-link active">Hand Gestures</a>
                <a href="eye-tracking.html" class="nav-link">Eye Tracking</a>
                <a href="voice-commands.html" class="nav-link">Voice Commands</a>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <div class="feature-page">
        <div class="feature-content">
            <div class="feature-header">
                <h1>
                    <i class="fas fa-list"></i>
                    All Supported Gestures
                </h1>
                <p>Complete list of hand gestures and meanings supported by the AI engine.</p>
            </div>

            <div class="gesture-guide">
                <h3>Single Hand Gestures</h3>
                <div class="gestures-grid">
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 0</h4><p>Fist (Single Hand)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 1</h4><p>Index Finger Extended</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 2</h4><p>Index and Middle Fingers Extended</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 3</h4><p>Index, Middle, and Ring Extended</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 4</h4><p>Four Fingers Extended (No Thumb)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 5</h4><p>All Fingers Extended (Open Palm)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Thumbs Up</h4><p>Approval / Agreement</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Thumbs Down</h4><p>Disapproval / Negative</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>OK</h4><p>Circle with Thumb and Index</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Peace</h4><p>V-Sign</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Rock</h4><p>Index and Pinky Extended</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Call Me</h4><p>Thumb and Pinky Extended</p></div>
                    </div>
                </div>

                <h3 style="margin-top: 3rem;">Two Hand Gestures</h3>
                <div class="gestures-grid">
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Hello</h4><p>Greeting (5 + 5)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Bye</h4><p>Farewell (Peace + Peace)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Good Job</h4><p>Positive Feedback (Up + Up)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Perfect</h4><p>Excellent (OK + OK)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Yes</h4><p>Confirmation (Up + OK)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>No</h4><p>Negation (Down + OK)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Wait</h4><p>Hold on (0 + 5)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Stop</h4><p>Cease action (0 + Down)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Help</h4><p>Request assistance (Up + Peace)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Thank You</h4><p>Gratitude (5 + Peace)</p></div>
                    </div>
                </div>

                <h3 style="margin-top: 3rem;">Complex Numbers (6-10)</h3>
                <div class="gestures-grid">
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 6</h4><p>5 + 1</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 7</h4><p>5 + 2</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 8</h4><p>5 + 3</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 9</h4><p>5 + 4</p></div>
                    </div>
                </div>
            </div>

            <div class="navigation-buttons">
                <a href="hand-gestures.html" class="nav-btn">
                    <i class="fas fa-arrow-left"></i>
                    Back to Demo
                </a>
                <a href="index.html" class="nav-btn">
                    <i class="fas fa-home"></i>
                    Home
                </a>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2024 GestureAI. Made with ❤️</p>
            </div>
        </div>
    </footer>
</body>
</html>
```

### all-gestures.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Gestures - GestureAI</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <i class="fas fa-hand-sparkles"></i>
                GestureAI
            </a>
            <div class="nav-menu">
                <a href="index.html" class="nav-link">Home</a>
                <a href="hand-gestures.html" class="nav-link active">Hand Gestures</a>
                <a href="eye-tracking.html" class="nav-link">Eye Tracking</a>
                <a href="voice-commands.html" class="nav-link">Voice Commands</a>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <div class="feature-page">
        <div class="feature-content">
            <div class="feature-header">
                <h1>
                    <i class="fas fa-list"></i>
                    All Supported Gestures
                </h1>
                <p>Complete list of hand gestures and meanings supported by the AI engine.</p>
            </div>

            <div class="gesture-guide">
                <h3>Single Hand Gestures</h3>
                <div class="gestures-grid">
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 0</h4><p>Fist (Single Hand)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 1</h4><p>Index Finger Extended</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 2</h4><p>Index and Middle Fingers Extended</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 3</h4><p>Index, Middle, and Ring Extended</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 4</h4><p>Four Fingers Extended (No Thumb)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 5</h4><p>All Fingers Extended (Open Palm)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Thumbs Up</h4><p>Approval / Agreement</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Thumbs Down</h4><p>Disapproval / Negative</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>OK</h4><p>Circle with Thumb and Index</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Peace</h4><p>V-Sign</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Rock</h4><p>Index and Pinky Extended</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Call Me</h4><p>Thumb and Pinky Extended</p></div>
                    </div>
                </div>

                <h3 style="margin-top: 3rem;">Two Hand Gestures</h3>
                <div class="gestures-grid">
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Hello</h4><p>Greeting (5 + 5)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Bye</h4><p>Farewell (Peace + Peace)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Good Job</h4><p>Positive Feedback (Up + Up)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Perfect</h4><p>Excellent (OK + OK)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Yes</h4><p>Confirmation (Up + OK)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>No</h4><p>Negation (Down + OK)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Wait</h4><p>Hold on (0 + 5)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Stop</h4><p>Cease action (0 + Down)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Help</h4><p>Request assistance (Up + Peace)</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Thank You</h4><p>Gratitude (5 + Peace)</p></div>
                    </div>
                </div>

                <h3 style="margin-top: 3rem;">Complex Numbers (6-10)</h3>
                <div class="gestures-grid">
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 6</h4><p>5 + 1</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 7</h4><p>5 + 2</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 8</h4><p>5 + 3</p></div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info"><h4>Number 9</h4><p>5 + 4</p></div>
                    </div>
                </div>
            </div>

            <div class="navigation-buttons">
                <a href="hand-gestures.html" class="nav-btn">
                    <i class="fas fa-arrow-left"></i>
                    Back to Demo
                </a>
                <a href="index.html" class="nav-btn">
                    <i class="fas fa-home"></i>
                    Home
                </a>
            </div>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2024 GestureAI. Made with ❤️</p>
            </div>
        </div>
    </footer>
</body>
</html>
```

### eye-tracking.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eye Tracking - GestureAI</title>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <i class="fas fa-hand-sparkles"></i>
                GestureAI
            </a>
            <div class="nav-menu">
                <a href="index.html" class="nav-link">Home</a>
                <a href="hand-gestures.html" class="nav-link">Hand Gestures</a>
                <a href="eye-tracking.html" class="nav-link active">Eye Tracking</a>
                <a href="voice-commands.html" class="nav-link">Voice Commands</a>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <div class="feature-page">
        <div class="feature-content">
            <div class="feature-header">
                <h1>
                    <i class="fas fa-eye"></i>
                    Eye Tracking Control
                </h1>
                <p>Navigate with natural eye movements and blinks. Perfect for hands-free interaction and accessibility.</p>
            </div>

            <div class="control-panel">
                <button id="startCamera" class="control-button">
                    <i class="fas fa-video"></i>
                    Start Eye Tracking
                </button>
                <button id="stopCamera" class="control-button" style="display: none;">
                    <i class="fas fa-video-slash"></i>
                    Stop Tracking
                </button>
                <button id="calibrate" class="control-button" style="display: none;">
                    <i class="fas fa-crosshairs"></i>
                    Calibrate
                </button>
            </div>

            <div class="video-container">
                <video id="videoElement" playsinline></video>
                <div class="video-overlay">
                    <div class="eye-indicator left-eye">
                        <div class="eye-dot"></div>
                    </div>
                    <div class="eye-indicator right-eye">
                        <div class="eye-dot"></div>
                    </div>
                    <div class="gaze-cursor" id="gazeCursor"></div>
                </div>
            </div>

            <div class="gesture-guide">
                <h3>
                    <i class="fas fa-eye"></i>
                    Eye Controls
                </h3>
                <div class="gestures-grid">
                    <div class="gesture-guide-item">
                        <div class="gesture-icon">
                            <i class="fas fa-eye-slash"></i>
                        </div>
                        <div class="gesture-info">
                            <h4>Blink Detection</h4>
                            <p>Single blink to click, double blink for right-click</p>
                        </div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-icon">
                            <i class="fas fa-arrows-alt-h"></i>
                        </div>
                        <div class="gesture-info">
                            <h4>Horizontal Gaze</h4>
                            <p>Look left/right to navigate horizontally</p>
                        </div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-icon">
                            <i class="fas fa-arrows-alt-v"></i>
                        </div>
                        <div class="gesture-info">
                            <h4>Vertical Gaze</h4>
                            <p>Look up/down to scroll or navigate vertically</p>
                        </div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-icon">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <div class="gesture-info">
                            <h4>Focus Tracking</h4>
                            <p>Maintain focus on elements for selection</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="calibration-panel" id="calibrationPanel" style="display: none;">
                <h3>
                    <i class="fas fa-crosshairs"></i>
                    Eye Tracking Calibration
                </h3>
                <p>Look at each point when it appears and blink to confirm</p>
                <div class="calibration-points">
                    <div class="calibration-point" data-point="1"></div>
                    <div class="calibration-point" data-point="2"></div>
                    <div class="calibration-point" data-point="3"></div>
                    <div class="calibration-point" data-point="4"></div>
                    <div class="calibration-point" data-point="5"></div>
                </div>
            </div>



            <div class="navigation-buttons">
                <a href="index.html" class="nav-btn">
                    <i class="fas fa-home"></i>
                    Back to Home
                </a>
                <a href="hand-gestures.html" class="nav-btn">
                    <i class="fas fa-hand-paper"></i>
                    Try Hand Gestures
                </a>
                <a href="voice-commands.html" class="nav-btn">
                    <i class="fas fa-microphone"></i>
                    Try Voice Commands
                </a>
            </div>
        </div>
    </div>

    <div class="gesture-feedback" id="gestureFeedback">
        <div class="feedback-content">
            <i class="fas fa-eye"></i>
            <span>Eye Movement Detected!</span>
        </div>
    </div>

    <script src="assets/js/eye-tracking.js"></script>
</body>
</html>
```

### hand-gestures.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hand Gestures - GestureAI</title>
    <!-- MediaPipe Dependencies -->
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/control_utils/control_utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"></script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <style>
        #canvas {
            width: 100%;
            height: auto;
            border-radius: 15px;
        }
        #gesture-display {
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
            margin: 1rem 0;
            min-height: 3rem;
            color: var(--primary-color);
            text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <i class="fas fa-hand-sparkles"></i>
                GestureAI
            </a>
            <div class="nav-menu">
                <a href="index.html" class="nav-link">Home</a>
                <a href="hand-gestures.html" class="nav-link active">Hand Gestures</a>
                <a href="eye-tracking.html" class="nav-link">Eye Tracking</a>
                <a href="voice-commands.html" class="nav-link">Voice Commands</a>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <div class="feature-page">
        <div class="feature-content">
            <div class="feature-header">
                <h1>
                    <i class="fas fa-hand-paper"></i>
                    Hand Gesture Control
                </h1>
                <p>Control your device with intuitive hand movements. Make gestures in front of your camera to interact naturally.</p>
            </div>

            <div class="control-panel">
                <button id="start-camera" class="control-button">
                    <i class="fas fa-video"></i>
                    Start Camera
                </button>
                <button id="stop-camera" class="control-button" disabled>
                    <i class="fas fa-video-slash"></i>
                    Stop Camera
                </button>
            </div>

            <div id="gesture-display">Ready to detect</div>

            <div class="video-container">
                <video id="webcam" playsinline style="display: none;"></video>
                <canvas id="canvas"></canvas>
                <div class="video-overlay">
                    <div class="camera-status">
                        <i class="fas fa-camera"></i>
                        <span id="status">Camera Ready</span>
                    </div>
                </div>
            </div>

            <div class="gesture-guide">
                <h3>
                    Available Gestures
                </h3>
                <div class="gestures-grid">
                    <div class="gesture-guide-item">
                        <div class="gesture-info">
                            <h4>OK</h4>
                            <p>Sign for approval or agreement</p>
                        </div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info">
                            <h4>Hello</h4>
                            <p>Standard greeting sign (Two hands)</p>
                        </div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info">
                            <h4>Thank You</h4>
                            <p>Express gratitude (Two hands)</p>
                        </div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info">
                            <h4>Bye</h4>
                            <p>Farewell greeting (Two hands)</p>
                        </div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info">
                            <h4>Stop</h4>
                            <p>Halt or cease current action (Two hands)</p>
                        </div>
                    </div>
                    <div class="gesture-guide-item">
                        <div class="gesture-info">
                            <h4>Yes</h4>
                            <p>Confirm or positive response (Two hands)</p>
                        </div>
                    </div>
                </div>

                <div class="view-all-container" style="margin-top: 2rem;">
                    <a href="all-gestures.html" class="control-button" style="width: 100%; text-align: center; justify-content: center; text-decoration: none;">
                        <i class="fas fa-list"></i>
                        View All Gestures
                    </a>
                </div>
            </div>



            <div class="navigation-buttons">
                <a href="index.html" class="nav-btn">
                    <i class="fas fa-home"></i>
                    Back to Home
                </a>
                <a href="eye-tracking.html" class="nav-btn">
                    <i class="fas fa-eye"></i>
                    Try Eye Tracking
                </a>
                <a href="voice-commands.html" class="nav-btn">
                    <i class="fas fa-microphone"></i>
                    Try Voice Commands
                </a>
            </div>
        </div>
    </div>

    <div class="gesture-feedback" id="gestureFeedback">
        <div class="feedback-content">
            <i class="fas fa-check-circle"></i>
            <span>Gesture Detected!</span>
        </div>
    </div>

    <script src="assets/js/hand-gestures.js"></script>
</body>
</html>
```

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GestureAI - Future of Human-Computer Interaction</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <div class="loader">
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Initializing GestureAI...</p>
        </div>
    </div>

    <div class="progress-bar"></div>
    
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <i class="fas fa-hand-sparkles"></i>
                GestureAI
            </div>
            <div class="nav-menu">
                <a href="#home" class="nav-link active">Home</a>
                <a href="#features" class="nav-link">Features</a>
                <a href="#about" class="nav-link">About</a>
                <a href="#contact" class="nav-link">Contact</a>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <main>
        <section id="home" class="hero">
            <div class="hero-background">
                <div class="floating-shapes">
                    <div class="shape shape-1"></div>
                    <div class="shape shape-2"></div>
                    <div class="shape shape-3"></div>
                </div>
            </div>
            <div class="hero-content">
                <h1 class="hero-title">
                    Control Your World With
                    <span class="gradient-text">Gestures</span>
                </h1>
                <p class="hero-subtitle">
                    Experience the future of human-computer interaction with AI-powered
                    hand gestures, eye tracking, and voice commands.
                </p>
                <div class="hero-buttons">
                    <a href="#features" class="btn btn-primary">
                        <i class="fas fa-rocket"></i>
                        Explore Features
                    </a>
                    <a href="hand-gestures.html" class="btn btn-secondary">
                        <i class="fas fa-play"></i>
                        Try Demo
                    </a>
                </div>
                <div class="hero-stats">
                    <div class="stat">
                        <span class="stat-number">99%</span>
                        <span class="stat-label">Accuracy</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">30ms</span>
                        <span class="stat-label">Response Time</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">10+</span>
                        <span class="stat-label">Gestures</span>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" class="features">
            <div class="container">
                <div class="section-header">
                    <h2>Powerful Features</h2>
                    <p>Discover the cutting-edge capabilities that make GestureAI revolutionary</p>
                </div>
                <div class="features-grid">
                    <div class="feature-card" data-feature="hand">
                        <div class="feature-icon">
                            <i class="fas fa-hand-paper"></i>
                        </div>
                        <h3>Hand Gestures</h3>
                        <p>Control your device with intuitive hand movements. Peace signs, open palms, and fists for seamless interaction.</p>
                        <ul class="feature-list">
                            <li><i class="fas fa-check"></i> Real-time tracking</li>
                            <li><i class="fas fa-check"></i> Multi-hand support</li>
                            <li><i class="fas fa-check"></i> Custom gestures</li>
                        </ul>
                        <a href="hand-gestures.html" class="feature-btn">
                            Try Hand Gestures
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>

                    <div class="feature-card" data-feature="eye">
                        <div class="feature-icon">
                            <i class="fas fa-eye"></i>
                        </div>
                        <h3>Eye Tracking</h3>
                        <p>Navigate with natural eye movements and blinks. Perfect for accessibility and hands-free interaction.</p>
                        <ul class="feature-list">
                            <li><i class="fas fa-check"></i> Blink detection</li>
                            <li><i class="fas fa-check"></i> Gaze tracking</li>
                            <li><i class="fas fa-check"></i> Calibration-free</li>
                        </ul>
                        <a href="eye-tracking.html" class="feature-btn">
                            Try Eye Tracking
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>

                    <div class="feature-card" data-feature="voice">
                        <div class="feature-icon">
                            <i class="fas fa-microphone"></i>
                        </div>
                        <h3>Voice Commands</h3>
                        <p>Speak naturally to control your device. Advanced speech recognition with real-time processing.</p>
                        <ul class="feature-list">
                            <li><i class="fas fa-check"></i> Natural language</li>
                            <li><i class="fas fa-check"></i> Noise cancellation</li>
                            <li><i class="fas fa-check"></i> Multi-language</li>
                        </ul>
                        <a href="voice-commands.html" class="feature-btn">
                            Try Voice Commands
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="about" class="about">
            <div class="container">
                <div class="about-content">
                    <div class="about-text">
                        <h2>About GestureAI</h2>
                        <p>GestureAI represents the next evolution in human-computer interaction. Built with cutting-edge AI and machine learning technologies, our platform enables natural, intuitive control of digital devices through gestures, eye movements, and voice commands.</p>
                        <div class="tech-stack">
                            <h3>Powered By</h3>
                            <div class="tech-icons">
                                <div class="tech-item">
                                    <i class="fab fa-js-square"></i>
                                    <span>JavaScript</span>
                                </div>
                                <div class="tech-item">
                                    <i class="fas fa-brain"></i>
                                    <span>MediaPipe</span>
                                </div>
                                <div class="tech-item">
                                    <i class="fas fa-microchip"></i>
                                    <span>WebGL</span>
                                </div>
                                <div class="tech-item">
                                    <i class="fas fa-robot"></i>
                                    <span>AI/ML</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="about-visual">
                        <div class="visual-container">
                            <div class="gesture-demo">
                                <i class="fas fa-hand-paper gesture-icon"></i>
                                <div class="pulse-ring"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="contact">
            <div class="container">
                <div class="section-header">
                    <h2>Get Started Today</h2>
                    <p>Ready to experience the future of interaction?</p>
                </div>
                <div class="contact-content">
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h3>Email</h3>
                                <p>hello@gestureai.com</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fab fa-github"></i>
                            <div>
                                <h3>GitHub</h3>
                                <p>github.com/gestureai</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-globe"></i>
                            <div>
                                <h3>Website</h3>
                                <p>www.gestureai.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="quick-start">
                        <h3>Quick Start</h3>
                        <div class="start-options">
                            <a href="hand-gestures.html" class="start-option">
                                <i class="fas fa-hand-paper"></i>
                                <span>Hand Gestures</span>
                            </a>
                            <a href="eye-tracking.html" class="start-option">
                                <i class="fas fa-eye"></i>
                                <span>Eye Tracking</span>
                            </a>
                            <a href="voice-commands.html" class="start-option">
                                <i class="fas fa-microphone"></i>
                                <span>Voice Commands</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="logo">
                        <i class="fas fa-hand-sparkles"></i>
                        GestureAI
                    </div>
                    <p>Revolutionizing human-computer interaction through AI-powered gesture recognition.</p>
                </div>
                <div class="footer-links">
                    <div class="link-group">
                        <h4>Features</h4>
                        <a href="hand-gestures.html">Hand Gestures</a>
                        <a href="eye-tracking.html">Eye Tracking</a>
                        <a href="voice-commands.html">Voice Commands</a>
                    </div>
                    <div class="link-group">
                        <h4>Resources</h4>
                        <a href="#">Documentation</a>
                        <a href="#">API Reference</a>
                        <a href="#">Tutorials</a>
                    </div>
                    <div class="link-group">
                        <h4>Connect</h4>
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                        <a href="#">Discord</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 GestureAI. Made with ❤️ by Pritesh Gupta</p>
            </div>
        </div>
    </footer>

    <script src="assets/js/app.js"></script>
</body>
</html>
```

### voice-commands.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voice Commands - GestureAI</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="index.html" class="logo">
                <i class="fas fa-hand-sparkles"></i>
                GestureAI
            </a>
            <div class="nav-menu">
                <a href="index.html" class="nav-link">Home</a>
                <a href="hand-gestures.html" class="nav-link">Hand Gestures</a>
                <a href="eye-tracking.html" class="nav-link">Eye Tracking</a>
                <a href="voice-commands.html" class="nav-link active">Voice Commands</a>
            </div>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <div class="feature-page">
        <div class="feature-content">
            <div class="feature-header">
                <h1>
                    <i class="fas fa-microphone"></i>
                    Voice Command Control
                </h1>
                <p>Speak naturally to control your device. Advanced speech recognition with real-time processing and multi-language support.</p>
            </div>

            <div class="voice-control-container">
                <div class="microphone-visual">
                    <div class="mic-container">
                        <div class="mic-icon">
                            <i class="fas fa-microphone"></i>
                        </div>
                        <div class="sound-waves">
                            <div class="wave wave-1"></div>
                            <div class="wave wave-2"></div>
                            <div class="wave wave-3"></div>
                        </div>
                    </div>
                </div>

                <div class="control-panel">
                    <button id="startVoice" class="control-button">
                        <i class="fas fa-microphone"></i>
                        Start Voice Recognition
                    </button>
                    <button id="stopVoice" class="control-button" style="display: none;">
                        <i class="fas fa-microphone-slash"></i>
                        Stop Recognition
                    </button>
                </div>

                <div class="voice-settings">
                    <div class="setting-group">
                        <label for="language">Language:</label>
                        <select id="language" class="setting-select">
                            <option value="en-US">English (US)</option>
                            <option value="en-GB">English (UK)</option>
                            <option value="es-ES">Spanish</option>
                            <option value="fr-FR">French</option>
                            <option value="de-DE">German</option>
                            <option value="it-IT">Italian</option>
                        </select>
                    </div>
                    <div class="setting-group">
                        <label for="sensitivity">Sensitivity:</label>
                        <input type="range" id="sensitivity" class="setting-range" min="0.1" max="1" step="0.1" value="0.5">
                        <span class="range-value">50%</span>
                    </div>
                </div>
            </div>

            <div class="gesture-guide">
                <h3>
                    <i class="fas fa-comments"></i>
                    Available Commands
                </h3>
                <div class="command-categories">
                    <div class="command-category">
                        <h4><i class="fas fa-mouse"></i> Navigation</h4>
                        <div class="gestures-grid">
                            <div class="gesture-guide-item">
                                <div class="gesture-icon">
                                    <i class="fas fa-arrow-up"></i>
                                </div>
                                <div class="gesture-info">
                                    <h5>"Scroll Up"</h5>
                                    <p>Scroll page upward</p>
                                </div>
                            </div>
                            <div class="gesture-guide-item">
                                <div class="gesture-icon">
                                    <i class="fas fa-arrow-down"></i>
                                </div>
                                <div class="gesture-info">
                                    <h5>"Scroll Down"</h5>
                                    <p>Scroll page downward</p>
                                </div>
                            </div>
                            <div class="gesture-guide-item">
                                <div class="gesture-icon">
                                    <i class="fas fa-home"></i>
                                </div>
                                <div class="gesture-info">
                                    <h5>"Go Home"</h5>
                                    <p>Navigate to homepage</p>
                                </div>
                            </div>
                            <div class="gesture-guide-item">
                                <div class="gesture-icon">
                                    <i class="fas fa-arrow-left"></i>
                                </div>
                                <div class="gesture-info">
                                    <h5>"Go Back"</h5>
                                    <p>Navigate to previous page</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="command-category">
                        <h4><i class="fas fa-cog"></i> Control</h4>
                        <div class="gestures-grid">
                            <div class="gesture-guide-item">
                                <div class="gesture-icon">
                                    <i class="fas fa-play"></i>
                                </div>
                                <div class="gesture-info">
                                    <h5>"Start"</h5>
                                    <p>Begin current action</p>
                                </div>
                            </div>
                            <div class="gesture-guide-item">
                                <div class="gesture-icon">
                                    <i class="fas fa-stop"></i>
                                </div>
                                <div class="gesture-info">
                                    <h5>"Stop"</h5>
                                    <p>Stop current action</p>
                                </div>
                            </div>
                            <div class="gesture-guide-item">
                                <div class="gesture-icon">
                                    <i class="fas fa-refresh"></i>
                                </div>
                                <div class="gesture-info">
                                    <h5>"Refresh"</h5>
                                    <p>Reload current page</p>
                                </div>
                            </div>
                            <div class="gesture-guide-item">
                                <div class="gesture-icon">
                                    <i class="fas fa-times"></i>
                                </div>
                                <div class="gesture-info">
                                    <h5>"Close"</h5>
                                    <p>Close current window</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="transcript-panel">
                <h3>
                    <i class="fas fa-file-alt"></i>
                    Live Transcript
                </h3>
                <div id="transcript" class="transcript-content">
                    <p class="transcript-placeholder">Your speech will appear here...</p>
                </div>
                <div class="transcript-controls">
                    <button id="clearTranscript" class="transcript-btn">
                        <i class="fas fa-trash"></i>
                        Clear
                    </button>
                    <button id="copyTranscript" class="transcript-btn">
                        <i class="fas fa-copy"></i>
                        Copy
                    </button>
                </div>
            </div>



            <div class="navigation-buttons">
                <a href="index.html" class="nav-btn">
                    <i class="fas fa-home"></i>
                    Back to Home
                </a>
                <a href="hand-gestures.html" class="nav-btn">
                    <i class="fas fa-hand-paper"></i>
                    Try Hand Gestures
                </a>
                <a href="eye-tracking.html" class="nav-btn">
                    <i class="fas fa-eye"></i>
                    Try Eye Tracking
                </a>
            </div>
        </div>
    </div>

    <div class="gesture-feedback" id="gestureFeedback">
        <div class="feedback-content">
            <i class="fas fa-microphone"></i>
            <span>Voice Command Recognized!</span>
        </div>
    </div>

    <script src="assets/js/voice.js"></script>
</body>
</html>
```

### assets/css/style.css
```css
/* Modern CSS Variables */
:root {
    --primary-color: #00ff88;
    --primary-dark: #00cc6f;
    --secondary-color: #6366f1;
    --accent-color: #f59e0b;
    --background-dark: #0a0a0a;
    --background-light: #1a1a1a;
    --surface: #2a2a2a;
    --text-primary: #ffffff;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    --border-color: rgba(255, 255, 255, 0.1);
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
    --shadow-glow: 0 0 20px rgba(0, 255, 136, 0.3);
    --gradient-primary: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    --gradient-surface: linear-gradient(135deg, var(--surface), var(--background-light));
}

/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--background-dark);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Loading Animation */
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--background-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loader.fade-out {
    opacity: 0;
    pointer-events: none;
}

.loader-content {
    text-align: center;
}

.loader-spinner {
    width: 60px;
    height: 60px;
    border: 3px solid var(--surface);
    border-top: 3px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Progress Bar */
.progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: var(--gradient-primary);
    z-index: 1001;
    transition: width 0.3s ease;
    box-shadow: var(--shadow-glow);
}

/* Navigation */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: all 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
}

.logo i {
    font-size: 1.8rem;
}

.nav-menu {
    display: flex;
    gap: 2rem;
}

.nav-link {
    color: var(--text-secondary);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-color);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: var(--text-primary);
    margin: 3px 0;
    transition: 0.3s;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: radial-gradient(ellipse at center, rgba(0, 255, 136, 0.1) 0%, transparent 70%);
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
}

.shape {
    position: absolute;
    border-radius: 50%;
    background: var(--gradient-primary);
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
}

.shape-1 {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
}

.shape-2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 10%;
    animation-delay: 2s;
}

.shape-3 {
    width: 80px;
    height: 80px;
    bottom: 20%;
    left: 60%;
    animation-delay: 4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
}

.hero-content {
    text-align: center;
    max-width: 800px;
    z-index: 2;
    padding: 2rem;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2.5rem;
    line-height: 1.6;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.btn-primary {
    background: var(--gradient-primary);
    color: var(--background-dark);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
}

.btn-secondary {
    background: transparent;
    color: var(--primary-color);
    border-color: var(--primary-color);
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: var(--background-dark);
    transform: translateY(-2px);
}

.hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
}

.stat {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
}

.stat-label {
    font-size: 0.9rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Features Section */
.features {
    padding: 6rem 0;
    background: var(--background-light);
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-header h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

.section-header p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: var(--gradient-surface);
    border-radius: 20px;
    padding: 2.5rem;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
}

.feature-card:hover::before {
    opacity: 0.05;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
    border-color: var(--primary-color);
}

.feature-card > * {
    position: relative;
    z-index: 2;
}

.feature-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-primary);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.feature-icon i {
    font-size: 2rem;
    color: var(--background-dark);
}

.feature-card h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.feature-card p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.feature-list {
    list-style: none;
    margin-bottom: 2rem;
}

.feature-list li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
}

.feature-list i {
    color: var(--primary-color);
    font-size: 0.9rem;
}

.feature-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.feature-btn:hover {
    background: var(--primary-color);
    color: var(--background-dark);
    transform: translateX(5px);
}

/* About Section */
.about {
    padding: 6rem 0;
    background: var(--background-dark);
}

.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.about-text h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.about-text p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 2rem;
}

.tech-stack h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.tech-icons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

.tech-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem;
    background: var(--surface);
    border-radius: 10px;
    border: 1px solid var(--border-color);
}

.tech-item i {
    font-size: 1.5rem;
    color: var(--primary-color);
}

.about-visual {
    display: flex;
    justify-content: center;
    align-items: center;
}

.visual-container {
    position: relative;
    width: 300px;
    height: 300px;
}

.gesture-demo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.gesture-icon {
    font-size: 2.5rem;
    color: var(--background-dark);
    animation: pulse 2s ease-in-out infinite;
}

.pulse-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    animation: pulse-ring 2s ease-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

@keyframes pulse-ring {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0;
    }
}

/* Contact Section */
.contact {
    padding: 6rem 0;
    background: var(--background-light);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.contact-item i {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--background-dark);
    font-size: 1.2rem;
}

.contact-item h3 {
    font-size: 1.1rem;
    margin-bottom: 0.2rem;
}

.contact-item p {
    color: var(--text-secondary);
}

.quick-start h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
}

.start-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.start-option {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--surface);
    border-radius: 10px;
    text-decoration: none;
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.start-option:hover {
    background: var(--primary-color);
    color: var(--background-dark);
    transform: translateX(10px);
}

.start-option i {
    font-size: 1.5rem;
}

/* Footer */
.footer {
    background: var(--background-dark);
    border-top: 1px solid var(--border-color);
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    margin-bottom: 2rem;
}

.footer-brand p {
    color: var(--text-secondary);
    margin-top: 1rem;
    line-height: 1.6;
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
}

.link-group h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.link-group a {
    display: block;
    color: var(--text-secondary);
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.3s ease;
}

.link-group a:hover {
    color: var(--primary-color);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    color: var(--text-muted);
}

/* Feature Pages Styles */
.feature-page {
    min-height: 100vh;
    padding: 100px 2rem 2rem;
    background: var(--background-dark);
}

.feature-content {
    max-width: 1000px;
    margin: 0 auto;
    background: var(--gradient-surface);
    border-radius: 20px;
    padding: 3rem;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-xl);
}

.feature-content h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.video-container {
    max-width: 640px;
    margin: 0 auto 2rem;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid var(--primary-color);
    box-shadow: var(--shadow-glow);
    background: var(--background-dark);
}

#videoElement {
    width: 100%;
    height: auto;
    transform: scaleX(-1);
    display: block;
}

.gesture-guide {
    background: rgba(42, 42, 42, 0.5);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    border: 1px solid var(--border-color);
}

.gesture-guide h3 {
    color: var(--primary-color);
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    text-align: center;
}

.gesture-guide-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    margin: 0.5rem 0;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    transition: all 0.3s ease;
}

.gesture-guide-item:hover {
    background: rgba(0, 255, 136, 0.1);
    transform: translateX(5px);
}

.gesture-guide-item i {
    color: var(--primary-color);
    font-size: 1.5rem;
    width: 30px;
    text-align: center;
}

.status-output {
    background: var(--surface);
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    padding: 1.5rem;
    text-align: center;
    font-weight: 600;
    margin-top: 2rem;
}

.voice-control-container {
    text-align: center;
    margin: 2rem 0;
}

.control-button {
    background: var(--gradient-primary);
    color: var(--background-dark);
    border: none;
    padding: 1.2rem 2.5rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.3s ease;
    margin-bottom: 2rem;
}

.control-button:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-glow);
}

.control-button:active {
    transform: translateY(-1px);
}

.control-button.active {
    background: var(--accent-color);
    animation: pulse 1.5s ease-in-out infinite;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(10px);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        padding: 2rem 0;
        border-top: 1px solid var(--border-color);
    }

    .nav-menu.active {
        left: 0;
    }

    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }

    .hero-stats {
        gap: 2rem;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .footer-links {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .feature-content {
        padding: 2rem 1rem;
    }

    .tech-icons {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .container {
        padding: 0 1rem;
    }

    .hero-content {
        padding: 1rem;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .btn {
        padding: 0.8rem 1.5rem;
        font-size: 0.9rem;
    }

    .feature-card {
        padding: 1.5rem;
    }

    .section-header h2 {
        font-size: 2rem;
    }

    .gestures-grid {
        grid-template-columns: 1fr;
    }
    
    .navigation-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .nav-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
}

/* Animations and Transitions */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeIn 0.6s ease forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    animation: slideInLeft 0.6s ease forwards;
}

@keyframes slideInLeft {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    animation: slideInRight 0.6s ease forwards;
}

@keyframes slideInRight {
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Utility Classes */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mt-4 { margin-top: 2rem; }

.hidden { display: none; }
.visible { display: block; }

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--background-dark);
}

::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
}

/* Selection */
::selection {
    background: var(--primary-color);
    color: var(--background-dark);
}

/* Focus States */
:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
}

/* Loading States */
.loading {
    position: relative;
    pointer-events: none;
}

.loading::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-color);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    transform: translate(-50%, -50%);
}

/* Enhanced Feature Page Styles */
.feature-header {
    text-align: center;
    margin-bottom: 3rem;
}

.feature-header h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.feature-header p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.control-panel {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.camera-status {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: rgba(0, 0, 0, 0.7);
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
}

.gestures-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.gesture-guide-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
}

.gesture-guide-item:hover {
    background: rgba(0, 255, 136, 0.1);
    transform: translateY(-2px);
    border-color: var(--primary-color);
}

.gesture-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.gesture-icon i {
    font-size: 1.5rem;
    color: var(--background-dark);
}

.gesture-info h4,
.gesture-info h5 {
    margin-bottom: 0.5rem;
    color: var(--text-primary);
}

.gesture-info p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0;
}

.status-panel {
    margin: 2rem 0;
}

.status-header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.status-header h3 {
    color: var(--primary-color);
    margin: 0;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.pulse-dot {
    width: 12px;
    height: 12px;
    background: var(--primary-color);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
}

.navigation-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 3rem;
    flex-wrap: wrap;
}

.nav-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    background: var(--surface);
    color: var(--text-primary);
    text-decoration: none;
    border-radius: 10px;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
}

.nav-btn:hover {
    background: var(--primary-color);
    color: var(--background-dark);
    transform: translateY(-2px);
}

.gesture-feedback {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--gradient-primary);
    color: var(--background-dark);
    padding: 1rem 1.5rem;
    border-radius: 50px;
    box-shadow: var(--shadow-xl);
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
}

.gesture-feedback.show {
    transform: translateY(0);
    opacity: 1;
}

.feedback-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
}

/* Eye Tracking Specific Styles */
.eye-indicator {
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    background: rgba(0, 255, 136, 0.2);
}

.left-eye {
    top: 30%;
    left: 35%;
}

.right-eye {
    top: 30%;
    right: 35%;
}

.eye-dot {
    width: 8px;
    height: 8px;
    background: var(--primary-color);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: blink 3s ease-in-out infinite;
}

@keyframes blink {
    0%, 90%, 100% { opacity: 1; }
    95% { opacity: 0; }
}

.gaze-cursor {
    position: absolute;
    width: 10px;
    height: 10px;
    background: var(--accent-color);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent-color);
    transition: all 0.1s ease;
    pointer-events: none;
}

.calibration-panel {
    background: var(--surface);
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    text-align: center;
    border: 1px solid var(--border-color);
}

.calibration-points {
    position: relative;
    width: 100%;
    height: 300px;
    margin: 2rem 0;
    border: 1px solid var(--border-color);
    border-radius: 10px;
}

.calibration-point {
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--primary-color);
    border-radius: 50%;
    cursor: pointer;
    animation: pulse 1.5s ease-in-out infinite;
}

.calibration-point[data-point="1"] { top: 10%; left: 10%; }
.calibration-point[data-point="2"] { top: 10%; right: 10%; }
.calibration-point[data-point="3"] { top: 50%; left: 50%; transform: translate(-50%, -50%); }
.calibration-point[data-point="4"] { bottom: 10%; left: 10%; }
.calibration-point[data-point="5"] { bottom: 10%; right: 10%; }

.eye-metrics,
.voice-metrics {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.metric-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.metric-value {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--primary-color);
}

/* Voice Commands Specific Styles */
.voice-control-container {
    text-align: center;
    margin: 2rem 0;
}

.microphone-visual {
    margin-bottom: 2rem;
}

.mic-container {
    position: relative;
    display: inline-block;
}

.mic-icon {
    width: 100px;
    height: 100px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.mic-icon i {
    font-size: 2.5rem;
    color: var(--background-dark);
}

.sound-waves {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.wave {
    position: absolute;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    opacity: 0;
}

.wave-1 {
    width: 120px;
    height: 120px;
    animation: wave 2s ease-out infinite;
}

.wave-2 {
    width: 140px;
    height: 140px;
    animation: wave 2s ease-out infinite 0.5s;
}

.wave-3 {
    width: 160px;
    height: 160px;
    animation: wave 2s ease-out infinite 1s;
}

@keyframes wave {
    0% {
        transform: translate(-50%, -50%) scale(0.5);
        opacity: 1;
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
    }
}

.voice-settings {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;
}

.setting-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.setting-group label {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.setting-select {
    background: var(--surface);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
}

.setting-range {
    width: 100px;
    accent-color: var(--primary-color);
}

.range-value {
    font-size: 0.8rem;
    color: var(--primary-color);
    font-weight: 600;
}

.command-categories {
    display: grid;
    gap: 2rem;
}

.command-category {
    background: rgba(255, 255, 255, 0.02);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid var(--border-color);
}

.command-category h4 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
    font-size: 1.1rem;
}

.transcript-panel {
    background: var(--surface);
    border-radius: 15px;
    padding: 2rem;
    margin: 2rem 0;
    border: 1px solid var(--border-color);
}

.transcript-panel h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.transcript-content {
    background: var(--background-dark);
    border-radius: 10px;
    padding: 1.5rem;
    min-height: 100px;
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid var(--border-color);
    margin-bottom: 1rem;
}

.transcript-placeholder {
    color: var(--text-muted);
    font-style: italic;
    margin: 0;
}

.transcript-controls {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.transcript-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border-color);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.transcript-btn:hover {
    background: var(--primary-color);
    color: var(--background-dark);
    border-color: var(--primary-color);
}

/* Mobile Responsive Enhancements */
@media (max-width: 768px) {
    .gestures-grid {
        grid-template-columns: 1fr;
    }
    
    .voice-settings {
        flex-direction: column;
        align-items: center;
    }
    
    .eye-metrics,
    .voice-metrics {
        flex-direction: column;
        gap: 1rem;
    }
    
    .navigation-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .nav-btn {
        width: 100%;
        max-width: 300px;
        justify-content: center;
    }
}
```

### assets/js/app.js
```javascript
// Modern GestureAI Application
class GestureAI {
    constructor() {
        this.init();
    }

    init() {
        this.setupLoader();
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupMobileMenu();
    }

    setupLoader() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.querySelector('.loader');
                if (loader) {
                    loader.classList.add('fade-out');
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 500);
                }
            }, 1500);
        });
    }

    setupNavigation() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Active navigation highlighting
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    setupScrollEffects() {
        // Progress bar
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progressBar = document.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = scrolled + '%';
            }
        });

        // Parallax effects for floating shapes
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.shape');
            shapes.forEach((shape, index) => {
                const speed = 0.5 + (index * 0.1);
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    setupAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.feature-card, .about-text, .contact-item').forEach(el => {
            observer.observe(el);
        });

        // Counter animation for stats
        this.animateCounters();
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = counter.textContent;
            const isPercentage = target.includes('%');
            const isTime = target.includes('ms');
            const isPlus = target.includes('+');
            
            let numericTarget = parseInt(target.replace(/[^\d]/g, ''));
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.countUp(counter, numericTarget, isPercentage, isTime, isPlus);
                        observer.unobserve(entry.target);
                    }
                });
            });
            
            observer.observe(counter);
        });
    }

    countUp(element, target, isPercentage, isTime, isPlus) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (isPercentage) displayValue += '%';
            if (isTime) displayValue += 'ms';
            if (isPlus) displayValue += '+';
            
            element.textContent = displayValue;
        }, 40);
    }

    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    // Utility method to show feedback
    static showFeedback(message, type = 'success') {
        const feedback = document.createElement('div');
        feedback.className = `gesture-feedback show ${type}`;
        feedback.innerHTML = `
            <div class="feedback-content">
                <i class="fas fa-check-circle"></i>
                <span>${message}</span>
            </div>
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.classList.remove('show');
            setTimeout(() => {
                feedback.remove();
            }, 300);
        }, 3000);
    }
}

// Feature-specific controllers
class HandGestureController {
    constructor() {
        this.isActive = false;
        this.camera = null;
        this.hands = null;
        this.init();
    }

    init() {
        this.setupElements();
        this.setupEventListeners();
    }

    setupElements() {
        this.video = document.getElementById('videoElement');
        this.output = document.getElementById('output');
        this.startBtn = document.getElementById('startCamera');
        this.stopBtn = document.getElementById('stopCamera');
    }

    setupEventListeners() {
        if (this.startBtn) {
            this.startBtn.addEventListener('click', () => this.startCamera());
        }
        if (this.stopBtn) {
            this.stopBtn.addEventListener('click', () => this.stopCamera());
        }
    }

    async startCamera() {
        try {
            this.updateStatus('Initializing camera...', 'loading');
            
            if (this.startBtn) this.startBtn.style.display = 'none';
            if (this.stopBtn) this.stopBtn.style.display = 'inline-flex';

            // Initialize MediaPipe Hands
            this.hands = new Hands({
                locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
            });

            this.hands.setOptions({
                maxNumHands: 2,
                modelComplexity: 1,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5
            });

            this.hands.onResults(this.onResults.bind(this));

            // Initialize camera
            this.camera = new Camera(this.video, {
                onFrame: async () => {
                    await this.hands.send({image: this.video});
                },
                width: 640,
                height: 480
            });

            await this.camera.start();
            this.isActive = true;
            this.updateStatus('Camera active - Show your gestures!');
            
        } catch (error) {
            console.error('Error starting camera:', error);
            this.updateStatus('Error: Could not access camera. Please check permissions.', 'error');
        }
    }

    stopCamera() {
        if (this.camera) {
            this.camera.stop();
        }
        this.isActive = false;
        
        if (this.startBtn) this.startBtn.style.display = 'inline-flex';
        if (this.stopBtn) this.stopBtn.style.display = 'none';
        
        this.updateStatus('Camera stopped');
    }

    onResults(results) {
        if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
            const gesture = this.detectGesture(results.multiHandLandmarks[0]);
            if (gesture) {
                this.handleGesture(gesture);
            }
        }
    }

    detectGesture(landmarks) {
        // Simple gesture detection logic
        const fingers = this.getFingerStates(landmarks);
        
        if (fingers.index && fingers.middle && !fingers.ring && !fingers.pinky) {
            return 'peace';
        } else if (fingers.index && fingers.middle && fingers.ring && fingers.pinky) {
            return 'open_palm';
        } else if (!fingers.index && !fingers.middle && !fingers.ring && !fingers.pinky) {
            return 'fist';
        } else if (fingers.index && !fingers.middle && !fingers.ring && !fingers.pinky) {
            return 'pointing';
        }
        
        return null;
    }

    getFingerStates(landmarks) {
        return {
            thumb: landmarks[4].y < landmarks[3].y,
            index: landmarks[8].y < landmarks[6].y,
            middle: landmarks[12].y < landmarks[10].y,
            ring: landmarks[16].y < landmarks[14].y,
            pinky: landmarks[20].y < landmarks[18].y
        };
    }

    handleGesture(gesture) {
        const messages = {
            peace: 'Peace sign detected! ✌️',
            open_palm: 'Open palm - Scroll mode activated! 👋',
            fist: 'Fist detected - Action cancelled! ✊',
            pointing: 'Pointing gesture detected! 👉'
        };

        this.updateStatus(messages[gesture] || 'Gesture detected!');
        GestureAI.showFeedback(messages[gesture] || 'Gesture detected!');

        // Handle specific gesture actions
        switch(gesture) {
            case 'open_palm':
                // Implement scroll functionality
                break;
            case 'fist':
                // Cancel current action
                break;
            case 'pointing':
                // Implement cursor control
                break;
        }
    }

    updateStatus(message, type = 'normal') {
        if (this.output) {
            const indicator = this.output.querySelector('.status-indicator');
            if (indicator) {
                const span = indicator.querySelector('span');
                if (span) {
                    span.textContent = message;
                }
                
                const dot = indicator.querySelector('.pulse-dot');
                if (dot) {
                    dot.className = `pulse-dot ${type}`;
                }
            }
        }
    }
}

class EyeTrackingController {
    constructor() {
        this.isActive = false;
        this.camera = null;
        this.faceMesh = null;
        this.blinkCount = 0;
        this.init();
    }

    init() {
        this.setupElements();
        this.setupEventListeners();
    }

    setupElements() {
        this.video = document.getElementById('videoElement');
        this.output = document.getElementById('output');
        this.startBtn = document.getElementById('startCamera');
        this.stopBtn = document.getElementById('stopCamera');
        this.calibrateBtn = document.getElementById('calibrate');
        this.gazeCursor = document.getElementById('gazeCursor');
        this.blinkRateElement = document.getElementById('blinkRate');
    }

    setupEventListeners() {
        if (this.startBtn) {
            this.startBtn.addEventListener('click', () => this.startTracking());
        }
        if (this.stopBtn) {
            this.stopBtn.addEventListener('click', () => this.stopTracking());
        }
        if (this.calibrateBtn) {
            this.calibrateBtn.addEventListener('click', () => this.startCalibration());
        }
    }

    async startTracking() {
        try {
            this.updateStatus('Initializing eye tracking...', 'loading');
            
            if (this.startBtn) this.startBtn.style.display = 'none';
            if (this.stopBtn) this.stopBtn.style.display = 'inline-flex';
            if (this.calibrateBtn) this.calibrateBtn.style.display = 'inline-flex';

            // Initialize MediaPipe FaceMesh
            this.faceMesh = new FaceMesh({
                locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
            });

            this.faceMesh.setOptions({
                maxNumFaces: 1,
                refineLandmarks: true,
                minDetectionConfidence: 0.5,
                minTrackingConfidence: 0.5
            });

            this.faceMesh.onResults(this.onResults.bind(this));

            // Initialize camera
            this.camera = new Camera(this.video, {
                onFrame: async () => {
                    await this.faceMesh.send({image: this.video});
                },
                width: 640,
                height: 480
            });

            await this.camera.start();
            this.isActive = true;
            this.updateStatus('Eye tracking active - Look around and blink!');
            
        } catch (error) {
            console.error('Error starting eye tracking:', error);
            this.updateStatus('Error: Could not access camera. Please check permissions.', 'error');
        }
    }

    stopTracking() {
        if (this.camera) {
            this.camera.stop();
        }
        this.isActive = false;
        
        if (this.startBtn) this.startBtn.style.display = 'inline-flex';
        if (this.stopBtn) this.stopBtn.style.display = 'none';
        if (this.calibrateBtn) this.calibrateBtn.style.display = 'none';
        
        this.updateStatus('Eye tracking stopped');
    }

    onResults(results) {
        if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
            const landmarks = results.multiFaceLandmarks[0];
            this.detectBlinks(landmarks);
            this.trackGaze(landmarks);
        }
    }

    detectBlinks(landmarks) {
        // Simple blink detection based on eye aspect ratio
        const leftEAR = this.calculateEAR(landmarks, 'left');
        const rightEAR = this.calculateEAR(landmarks, 'right');
        const avgEAR = (leftEAR + rightEAR) / 2;

        if (avgEAR < 0.2) {
            this.blinkCount++;
            this.updateStatus('Blink detected! 👁️');
            GestureAI.showFeedback('Blink detected!');
            
            if (this.blinkRateElement) {
                this.blinkRateElement.textContent = `${this.blinkCount} blinks`;
            }
        }
    }

    calculateEAR(landmarks, eye) {
        // Simplified EAR calculation
        const eyePoints = eye === 'left' ? 
            [landmarks[159], landmarks[145], landmarks[33], landmarks[133]] :
            [landmarks[386], landmarks[374], landmarks[362], landmarks[263]];
        
        const vertical = Math.abs(eyePoints[0].y - eyePoints[1].y);
        const horizontal = Math.abs(eyePoints[2].x - eyePoints[3].x);
        
        return vertical / horizontal;
    }

    trackGaze(landmarks) {
        // Simple gaze tracking - move cursor based on nose position
        if (this.gazeCursor && landmarks[1]) {
            const x = (1 - landmarks[1].x) * window.innerWidth;
            const y = landmarks[1].y * window.innerHeight;
            
            this.gazeCursor.style.left = `${x}px`;
            this.gazeCursor.style.top = `${y}px`;
        }
    }

    startCalibration() {
        const panel = document.getElementById('calibrationPanel');
        if (panel) {
            panel.style.display = 'block';
            this.updateStatus('Calibration started - Look at each point and blink');
        }
    }

    updateStatus(message, type = 'normal') {
        if (this.output) {
            const indicator = this.output.querySelector('.status-indicator');
            if (indicator) {
                const span = indicator.querySelector('span');
                if (span) {
                    span.textContent = message;
                }
            }
        }
    }
}

class VoiceCommandController {
    constructor() {
        this.isListening = false;
        this.recognition = null;
        this.commandCount = 0;
        this.init();
    }

    init() {
        this.setupElements();
        this.setupEventListeners();
        this.setupSpeechRecognition();
    }

    setupElements() {
        this.output = document.getElementById('output');
        this.startBtn = document.getElementById('startVoice');
        this.stopBtn = document.getElementById('stopVoice');
        this.transcript = document.getElementById('transcript');
        this.languageSelect = document.getElementById('language');
        this.sensitivityRange = document.getElementById('sensitivity');
        this.confidenceElement = document.getElementById('confidence');
        this.commandCountElement = document.getElementById('commandCount');
    }

    setupEventListeners() {
        if (this.startBtn) {
            this.startBtn.addEventListener('click', () => this.startListening());
        }
        if (this.stopBtn) {
            this.stopBtn.addEventListener('click', () => this.stopListening());
        }
        
        if (this.languageSelect) {
            this.languageSelect.addEventListener('change', () => this.updateLanguage());
        }
        
        if (this.sensitivityRange) {
            this.sensitivityRange.addEventListener('input', (e) => {
                const value = e.target.value;
                const rangeValue = document.querySelector('.range-value');
                if (rangeValue) {
                    rangeValue.textContent = `${Math.round(value * 100)}%`;
                }
            });
        }

        // Transcript controls
        const clearBtn = document.getElementById('clearTranscript');
        const copyBtn = document.getElementById('copyTranscript');
        
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearTranscript());
        }
        if (copyBtn) {
            copyBtn.addEventListener('click', () => this.copyTranscript());
        }
    }

    setupSpeechRecognition() {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.recognition.lang = this.languageSelect ? this.languageSelect.value : 'en-US';

            this.recognition.onresult = (event) => {
                this.handleSpeechResult(event);
            };

            this.recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                this.updateStatus('Speech recognition error: ' + event.error, 'error');
            };

            this.recognition.onend = () => {
                if (this.isListening) {
                    this.recognition.start(); // Restart if still listening
                }
            };
        } else {
            this.updateStatus('Speech recognition not supported in this browser', 'error');
        }
    }

    startListening() {
        if (!this.recognition) return;

        try {
            this.recognition.start();
            this.isListening = true;
            
            if (this.startBtn) this.startBtn.style.display = 'none';
            if (this.stopBtn) this.stopBtn.style.display = 'inline-flex';
            
            this.updateStatus('Listening for voice commands...');
            this.animateMicrophone(true);
            
        } catch (error) {
            console.error('Error starting speech recognition:', error);
            this.updateStatus('Error starting voice recognition', 'error');
        }
    }

    stopListening() {
        if (this.recognition) {
            this.recognition.stop();
        }
        this.isListening = false;
        
        if (this.startBtn) this.startBtn.style.display = 'inline-flex';
        if (this.stopBtn) this.stopBtn.style.display = 'none';
        
        this.updateStatus('Voice recognition stopped');
        this.animateMicrophone(false);
    }

    handleSpeechResult(event) {
        let finalTranscript = '';
        let interimTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            const confidence = event.results[i][0].confidence;

            if (event.results[i].isFinal) {
                finalTranscript += transcript;
                this.processCommand(transcript.toLowerCase().trim());
                
                if (this.confidenceElement && confidence) {
                    this.confidenceElement.textContent = `${Math.round(confidence * 100)}%`;
                }
            } else {
                interimTranscript += transcript;
            }
        }

        this.updateTranscript(finalTranscript, interimTranscript);
    }

    processCommand(command) {
        const commands = {
            'scroll up': () => window.scrollBy(0, -100),
            'scroll down': () => window.scrollBy(0, 100),
            'go home': () => window.location.href = 'index.html',
            'go back': () => window.history.back(),
            'start': () => this.executeStartCommand(),
            'stop': () => this.executeStopCommand(),
            'refresh': () => window.location.reload(),
            'close': () => window.close()
        };

        if (commands[command]) {
            commands[command]();
            this.commandCount++;
            
            if (this.commandCountElement) {
                this.commandCountElement.textContent = this.commandCount;
            }
            
            this.updateStatus(`Command executed: "${command}"`);
            GestureAI.showFeedback(`Command: ${command}`);
        }
    }

    executeStartCommand() {
        const startBtn = document.getElementById('startCamera');
        if (startBtn && startBtn.style.display !== 'none') {
            startBtn.click();
        }
    }

    executeStopCommand() {
        const stopBtn = document.getElementById('stopCamera');
        if (stopBtn && stopBtn.style.display !== 'none') {
            stopBtn.click();
        }
    }

    updateTranscript(finalText, interimText) {
        if (this.transcript) {
            const placeholder = this.transcript.querySelector('.transcript-placeholder');
            if (placeholder && (finalText || interimText)) {
                placeholder.remove();
            }
            
            if (finalText) {
                const p = document.createElement('p');
                p.textContent = finalText;
                this.transcript.appendChild(p);
                this.transcript.scrollTop = this.transcript.scrollHeight;
            }
        }
    }

    clearTranscript() {
        if (this.transcript) {
            this.transcript.innerHTML = '<p class="transcript-placeholder">Your speech will appear here...</p>';
        }
    }

    copyTranscript() {
        if (this.transcript) {
            const text = Array.from(this.transcript.querySelectorAll('p:not(.transcript-placeholder)'))
                .map(p => p.textContent).join('\n');
            
            navigator.clipboard.writeText(text).then(() => {
                GestureAI.showFeedback('Transcript copied to clipboard!');
            });
        }
    }

    updateLanguage() {
        if (this.recognition && this.languageSelect) {
            this.recognition.lang = this.languageSelect.value;
        }
    }

    animateMicrophone(active) {
        const waves = document.querySelectorAll('.wave');
        waves.forEach(wave => {
            if (active) {
                wave.style.animationPlayState = 'running';
            } else {
                wave.style.animationPlayState = 'paused';
            }
        });
    }

    updateStatus(message, type = 'normal') {
        if (this.output) {
            const indicator = this.output.querySelector('.status-indicator');
            if (indicator) {
                const span = indicator.querySelector('span');
                if (span) {
                    span.textContent = message;
                }
            }
        }
    }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main app
    new GestureAI();
    
    // Initialize feature-specific controllers based on current page
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'hand-gestures.html':
            new HandGestureController();
            break;
        case 'eye-tracking.html':
            new EyeTrackingController();
            break;
        case 'voice-commands.html':
            new VoiceCommandController();
            break;
    }
});

// Export for global access
window.GestureAI = GestureAI;
```

### assets/js/eye-tracking.js
```javascript
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
```

### assets/js/hand-gestures.js
```javascript
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
```

### assets/js/translator.js
```javascript
// ======================================== 
// LANGUAGE TRANSLATION
// LibreTranslate API Integration
// ======================================== 

// ==================== CONFIGURATION ==================== 
const TRANSLATION_CONFIG = { 
  // Public LibreTranslate instance (free, no API key needed)
  apiUrl: 'https://libretranslate.com/translate',
  
  // Fallback to local instance if available
  // Change this to your own LibreTranslate instance URL if needed
  fallbackUrl: 'http://localhost:5000/translate',
  
  // Default language
  defaultSourceLang: 'en',
  defaultTargetLang: 'es',
  
  // Cache translations to reduce API calls
  cacheEnabled: true,
  cache: new Map()
};

// ==================== SUPPORTED LANGUAGES ==================== 
const SUPPORTED_LANGUAGES = { 
  'en': 'English',
  'es': 'Spanish',
  'fr': 'French',
  'de': 'German',
  'it': 'Italian',
  'pt': 'Portuguese',
  'ru': 'Russian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'zh': 'Chinese',
  'ar': 'Arabic',
  'hi': 'Hindi',
  'nl': 'Dutch',
  'sv': 'Swedish',
  'pl': 'Polish',
  'tr': 'Turkish'
};

// ==================== GLOBAL STATE ==================== 
let currentTargetLanguage = TRANSLATION_CONFIG.defaultTargetLang;
let languageDropdown = null;
let translatedGestureElement = null;
let translatedVoiceElement = null;
let statusIndicator = null;

// ==================== TRANSLATION FUNCTION ==================== 
async function translateText(text, targetLang = currentTargetLanguage, sourceLang = 'en') {
  // Don't translate if target is English
  if (targetLang === 'en' || !text || text.trim() === '') {
    return text;
  }

  // Check cache
  const cacheKey = `${text}_${sourceLang}_${targetLang}`;
  if (TRANSLATION_CONFIG.cacheEnabled && TRANSLATION_CONFIG.cache.has(cacheKey)) {
    console.log('📦 Using cached translation');
    return TRANSLATION_CONFIG.cache.get(cacheKey);
  }

  try {
    // Show loading indicator
    updateStatusIndicator('translating');

    const response = await fetch(TRANSLATION_CONFIG.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: text,
        source: sourceLang,
        target: targetLang,
        format: 'text'
      })
    });

    if (!response.ok) {
      throw new Error(`Translation API error: ${response.status}`);
    }

    const data = await response.json();
    const translatedText = data.translatedText;

    // Cache the result
    if (TRANSLATION_CONFIG.cacheEnabled) {
      TRANSLATION_CONFIG.cache.set(cacheKey, translatedText);
    }

    console.log(`🌐 Translated: "${text}" → "${translatedText}" (${targetLang})`);
    updateStatusIndicator('success');

    return translatedText;

  } catch (error) {
    console.error('Translation error:', error);
    updateStatusIndicator('error');
    
    // Return original text on error
    return `[Translation Error] ${text}`;
  }
}

// ==================== TRANSLATE GESTURE TEXT ==================== 
async function translateGesture(gestureText) {
  if (!translatedGestureElement) return;

  const translated = await translateText(gestureText);
  translatedGestureElement.textContent = translated;

  // Fire custom event
  window.dispatchEvent(new CustomEvent('gestureTranslated', {
    detail: { 
      original: gestureText, 
      translated: translated,
      language: currentTargetLanguage 
    }
  }));
}

// ==================== TRANSLATE VOICE TEXT ==================== 
async function translateVoice(voiceText) {
  if (!translatedVoiceElement) return;

  const translated = await translateText(voiceText);
  translatedVoiceElement.textContent = translated;

  // Fire custom event
  window.dispatchEvent(new CustomEvent('voiceTranslated', {
    detail: { 
      original: voiceText, 
      translated: translated,
      language: currentTargetLanguage 
    }
  }));
}

// ==================== BATCH TRANSLATION (FOR EFFICIENCY) ==================== 
async function translateBatch(texts, targetLang = currentTargetLanguage) {
  // LibreTranslate supports batch translation with newline separators
  if (!texts || texts.length === 0) return [];

  const combinedText = texts.join('\n');
  const translatedCombined = await translateText(combinedText, targetLang);
  
  return translatedCombined.split('\n');
}

// ==================== UI UPDATE: Status Indicator ==================== 
function updateStatusIndicator(status) {
  if (!statusIndicator) return;

  statusIndicator.className = 'translation-status';

  switch (status) {
    case 'translating':
      statusIndicator.textContent = '🔄 Translating...';
      statusIndicator.classList.add('translating');
      break;
    case 'success':
      statusIndicator.textContent = '✓ Translated';
      statusIndicator.classList.add('success');
      // Clear after 2 seconds
      setTimeout(() => {
        statusIndicator.textContent = '';
        statusIndicator.className = 'translation-status';
      }, 2000);
      break;
    case 'error':
      statusIndicator.textContent = '✗ Translation failed';
      statusIndicator.classList.add('error');
      // Clear after 3 seconds
      setTimeout(() => {
        statusIndicator.textContent = '';
        statusIndicator.className = 'translation-status';
      }, 3000);
      break;
    default:
      statusIndicator.textContent = '';
  }
}

// ==================== LANGUAGE DROPDOWN HANDLER ==================== 
function handleLanguageChange(event) {
  const selectedLang = event.target.value;
  
  if (!SUPPORTED_LANGUAGES[selectedLang]) {
    console.error('Unsupported language:', selectedLang);
    return;
  }

  currentTargetLanguage = selectedLang;
  console.log(`🌍 Language changed to: ${SUPPORTED_LANGUAGES[selectedLang]} (${selectedLang})`);

  // Clear cache when language changes (optional)
  if (TRANSLATION_CONFIG.cacheEnabled) {
    TRANSLATION_CONFIG.cache.clear();
    console.log('🗑️ Translation cache cleared');
  }

  // Fire custom event
  window.dispatchEvent(new CustomEvent('languageChanged', {
    detail: { 
      language: selectedLang,
      languageName: SUPPORTED_LANGUAGES[selectedLang]
    }
  }));
}

// ==================== POPULATE LANGUAGE DROPDOWN ==================== 
function populateLanguageDropdown() {
  if (!languageDropdown) return;

  // Clear existing options
  languageDropdown.innerHTML = '';

  // Add all supported languages
  for (const [code, name] of Object.entries(SUPPORTED_LANGUAGES)) {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    
    // Set default selected
    if (code === currentTargetLanguage) {
      option.selected = true;
    }
    
    languageDropdown.appendChild(option);
  }

  console.log('✅ Language dropdown populated');
}

// ==================== EVENT LISTENERS ==================== 
function setupEventListeners() {
  // Listen for gesture detection events from hand-gestures.js
  window.addEventListener('gestureDetected', (event) => {
    const gestureText = event.detail.gesture;
    if (gestureText && gestureText !== 'No gesture detected') {
      translateGesture(gestureText);
    }
  });

  // Listen for voice recognition events from voice.js
  window.addEventListener('voiceRecognized', (event) => {
    const voiceText = event.detail.text;
    if (voiceText && voiceText.trim() !== '') {
      translateVoice(voiceText);
    }
  });

  // Listen for language dropdown changes
  if (languageDropdown) {
    languageDropdown.addEventListener('change', handleLanguageChange);
  }

  console.log('✅ Translation event listeners setup');
}

// ==================== INITIALIZATION ==================== 
function initializeTranslator() {
  // Get DOM elements
  languageDropdown = document.getElementById('language-select') || 
                     document.querySelector('.language-dropdown') ||
                     document.querySelector('select[name="language"]');
  
  translatedGestureElement = document.getElementById('translated-gesture') ||
                            document.querySelector('.translated-gesture');
  
  translatedVoiceElement = document.getElementById('translated-voice') ||
                          document.querySelector('.translated-voice');
  
  statusIndicator = document.getElementById('translation-status') ||
                   document.querySelector('.translation-status');

  // Populate language dropdown
  populateLanguageDropdown();

  // Setup event listeners
  setupEventListeners();

  console.log('✅ Translator initialized');
  console.log(`🌍 Default language: ${SUPPORTED_LANGUAGES[currentTargetLanguage]}`);
}

// ==================== UTILITY: Get Available Languages ==================== 
function getAvailableLanguages() {
  return Object.entries(SUPPORTED_LANGUAGES).map(([code, name]) => ({
    code,
    name
  }));
}

// ==================== UTILITY: Clear Translation Cache ==================== 
function clearTranslationCache() {
  TRANSLATION_CONFIG.cache.clear();
  console.log('🗑️ Translation cache cleared manually');
}

// ==================== UTILITY: Get Cache Statistics ==================== 
function getCacheStats() {
  return {
    size: TRANSLATION_CONFIG.cache.size,
    enabled: TRANSLATION_CONFIG.cacheEnabled,
    entries: Array.from(TRANSLATION_CONFIG.cache.keys())
  };
}

// ==================== EXPOSE PUBLIC API ==================== 
window.Translator = {
  translate: translateText,
  translateGesture,
  translateVoice,
  translateBatch,
  getAvailableLanguages,
  clearCache: clearTranslationCache,
  getCacheStats,
  setTargetLanguage: (lang) => {
    if (SUPPORTED_LANGUAGES[lang]) {
      currentTargetLanguage = lang;
      if (languageDropdown) {
        languageDropdown.value = lang;
      }
    }
  },
  getCurrentLanguage: () => currentTargetLanguage
};

// ==================== AUTO-INITIALIZATION ==================== 
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTranslator);
} else {
  initializeTranslator();
}

// ==================== ALTERNATIVE API: MyMemory (Fallback) ==================== 
// If LibreTranslate fails, you can use this fallback
async function translateWithMyMemory(text, targetLang, sourceLang = 'en') {
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.responseStatus === 200) {
      return data.responseData.translatedText;
    } else {
      throw new Error('MyMemory API error');
    }
  } catch (error) {
    console.error('MyMemory translation error:', error);
    return text;
  }
}

// ==================== EXPORT FOR TESTING ==================== 
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    translateText,
    translateGesture,
    translateVoice,
    SUPPORTED_LANGUAGES
  };
}
```

### assets/js/voice.js
```javascript
class VoiceCommandController {
    constructor() {
        this.initializeElements();
        this.setupVoiceRecognition();
        this.setupEventListeners();
    }

    initializeElements() {
        this.output = document.getElementById('output');
        this.startButton = document.getElementById('startVoice');
        
        if (!this.output || !this.startButton) {
            console.error('Required elements not found');
            return;
        }
    }

    setupVoiceRecognition() {
        if ('webkitSpeechRecognition' in window) {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;

            this.recognition.onresult = (event) => {
                const command = event.results[event.results.length - 1][0].transcript.toLowerCase();
                this.handleVoiceCommand(command);
            };

            this.recognition.onerror = (event) => {
                this.showFeedback('Error: ' + event.error);
            };

            this.recognition.onend = () => {
                this.startButton.innerHTML = '<i class="fas fa-microphone"></i> Start Voice Recognition';
                this.showFeedback('Voice recognition stopped');
            };
        } else {
            this.showFeedback('Voice recognition not supported in this browser');
            this.startButton.disabled = true;
        }
    }

    setupEventListeners() {
        this.startButton.addEventListener('click', () => {
            if (this.recognition) {
                if (this.isListening) {
                    this.stopVoiceRecognition();
                } else {
                    this.startVoiceRecognition();
                }
            }
        });
    }

    startVoiceRecognition() {
        this.recognition.start();
        this.isListening = true;
        this.startButton.innerHTML = '<i class="fas fa-microphone-slash"></i> Stop Voice Recognition';
        this.showFeedback('Listening for commands...');
    }

    stopVoiceRecognition() {
        this.recognition.stop();
        this.isListening = false;
        this.startButton.innerHTML = '<i class="fas fa-microphone"></i> Start Voice Recognition';
    }

    handleVoiceCommand(command) {
        if (command.includes('scroll down')) {
            window.scrollBy(0, 100);
            this.showFeedback('Command recognized: Scrolling down');
        } else if (command.includes('scroll up')) {
            window.scrollBy(0, -100);
            this.showFeedback('Command recognized: Scrolling up');
        }
    }

    showFeedback(message) {
        this.output.textContent = message;
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new VoiceCommandController();
});
```