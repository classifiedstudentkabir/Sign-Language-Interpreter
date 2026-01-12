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