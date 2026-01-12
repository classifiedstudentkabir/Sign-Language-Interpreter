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