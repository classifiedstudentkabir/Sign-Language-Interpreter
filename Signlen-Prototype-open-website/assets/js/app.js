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
