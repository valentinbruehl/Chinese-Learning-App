/**
 * Speaks Chinese text using the browser's built-in text-to-speech.
 * Works in Chrome, Edge, and most modern browsers.
 */
export function speak(text, rate = 0.85) {
  if (!window.speechSynthesis) return

  // Cancel any currently speaking utterance
  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = 'zh-CN'
  utterance.rate = rate
  utterance.pitch = 1

  // Try to use a Chinese voice if available
  const voices = window.speechSynthesis.getVoices()
  const chineseVoice = voices.find(
    v => v.lang === 'zh-CN' || v.lang === 'zh_CN' || v.lang.startsWith('zh')
  )
  if (chineseVoice) utterance.voice = chineseVoice

  window.speechSynthesis.speak(utterance)
}

/**
 * Some browsers load voices asynchronously.
 * Call this once on startup to pre-load voices.
 */
export function preloadVoices() {
  return new Promise(resolve => {
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      resolve(voices)
      return
    }
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices())
    }
  })
}
