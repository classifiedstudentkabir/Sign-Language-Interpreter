# SignLens - AI-Based Sign Language Interpreter

A real-time web application that interprets sign language gestures using computer vision and machine learning (MediaPipe). Designed for accessibility and inclusive education.

## 🚀 Live Demo

**[Click here to view the live project](https://classifiedstudentkabir.github.io/Sign-Language-Interpreter/)

## ✨ Features

- **Real-Time Hand Tracking:** Uses MediaPipe Hands for high-performance hand landmark detection.
- **Multi-Gesture Recognition:** Supports single-hand and two-hand gestures.
- **Responsive Design:** Works on desktop and mobile browsers.
- **Privacy-Focused:** All processing happens locally in the browser; video data is never sent to a server.
- **Speech-to-Text:** Integrated speech recognition for two-way communication.

## 👐 Supported Gestures

See the full [Gesture Guide](SignLens/frontend/gesture.md) for detailed instructions.

### Basic Numbers
- **0 - 5** (Single hand)
- **6 - 10** (Two hands)

### Common Phrases
- **Yes / No**
- **Thumbs Up / Down**
- **Okay**
- **Thank You**
- **Call Me / I Love You**
- **Hello / Bye**
- **Help / Stop**
- **And more...**

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **AI/ML:** MediaPipe Hands (Google), Custom Geometric Classifiers
- **Deployment:** GitHub Pages

## 📂 Project Structure

```
D:\hacknova\SignLens\
├───frontend\           # Main application code
│   ├───index.html      # (Old UI restored in root for live site)
│   ├───style.css       # New styling (optional)
│   ├───old-style.css   # Original styling (active)
│   ├───gesture.md      # Guide to gestures
│   └───src\
│       ├───app.js      # Main logic
│       └───gesture-detection.js # Gesture recognition engine
├───backend\            # (Optional backend components)
└───...
```

## 👨‍💻 Development

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/classifiedstudentkabir/Sign-Language-Interpreter.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Sign-Language-Interpreter
   ```
3. Open `index.html` in your browser to test locally.

### Contributing

1. **Pull** latest changes: `git pull origin main`
2. **Make** your changes.
3. **Stage** changes: `git add .`
4. **Commit**: `git commit -m "Description of changes"`
5. **Push**: `git push origin main`

---

*Part of HackNova Hackathon Project - Team SignLens*
