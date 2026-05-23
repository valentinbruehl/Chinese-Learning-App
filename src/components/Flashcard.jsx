import { useState, useEffect, useCallback } from 'react'
import { words } from '../data/words'
import { speak } from '../utils/speech'
import { getMastered, saveMastered, touchStreak } from '../utils/storage'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Flashcard() {
  const [deck, setDeck]       = useState(() => shuffle(words))
  const [index, setIndex]     = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [mastered, setMastered] = useState(() => getMastered())
  const [showMasteredBanner, setShowMasteredBanner] = useState(false)

  const word = deck[index]
  const isMastered = mastered.has(word.id)

  // Touch streak once on mount
  useEffect(() => { touchStreak() }, [])

  const flip = useCallback(() => setFlipped(f => !f), [])

  const goNext = useCallback(() => {
    setFlipped(false)
    setIndex(i => (i + 1) % deck.length)
  }, [deck.length])

  const goPrev = useCallback(() => {
    setFlipped(false)
    setIndex(i => (i - 1 + deck.length) % deck.length)
  }, [deck.length])

  const handleMastered = () => {
    const next = new Set(mastered)
    if (isMastered) {
      next.delete(word.id)
    } else {
      next.add(word.id)
      setShowMasteredBanner(true)
      setTimeout(() => setShowMasteredBanner(false), 1500)
    }
    setMastered(next)
    saveMastered(next)
    if (!isMastered) goNext()
  }

  const handleSpeak = (e) => {
    e.stopPropagation()
    speak(word.word)
  }

  // Keyboard support
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') goNext()
      if (e.key === 'ArrowLeft')  goPrev()
      if (e.key === 'Enter')      flip()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [goNext, goPrev, flip])

  const masteredCount = mastered.size

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col items-center gap-6">

      {/* Stats bar */}
      <div className="w-full flex items-center justify-between text-sm text-slate-400">
        <span>Card {index + 1} / {deck.length}</span>
        <span className="text-green-400 font-medium">{masteredCount} mastered ✓</span>
      </div>

      {/* Mastered banner */}
      {showMasteredBanner && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg z-50 pointer-events-none">
          ✓ Marked as mastered!
        </div>
      )}

      {/* Card */}
      <div className="card-container w-full max-w-sm h-72 cursor-pointer" onClick={flip}>
        <div className={`card-inner ${flipped ? 'flipped' : ''}`}>

          {/* Front — English */}
          <div className="card-front bg-slate-800 border border-slate-700 flex flex-col items-center justify-center gap-3 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">meaning</p>
            <p className="text-3xl font-semibold text-slate-100 text-center">{word.meaning}</p>
            <p className="text-xs text-slate-500 mt-4">tap to reveal</p>
            {isMastered && (
              <span className="absolute top-3 right-4 text-green-400 text-xs">✓ mastered</span>
            )}
          </div>

          {/* Back — Chinese + pinyin */}
          <div className="card-back bg-slate-800 border border-red-700/40 flex flex-col items-center justify-center gap-4 p-6">
            <p className="text-xs uppercase tracking-widest text-slate-500">Chinese</p>
            <p className="font-chinese text-7xl font-bold text-white">{word.word}</p>
            <p className="text-red-400 text-xl tracking-widest">{word.pinyin}</p>
            <button
              onClick={handleSpeak}
              className="mt-1 text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1"
            >
              🔊 <span>Listen</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-3 w-full max-w-sm">
        <button
          onClick={goPrev}
          className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
        >
          ← Prev
        </button>

        <button
          onClick={handleMastered}
          className={`
            flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors
            ${isMastered
              ? 'bg-green-700 hover:bg-green-600 text-white'
              : 'bg-green-600 hover:bg-green-500 text-white'}
          `}
        >
          {isMastered ? '✓ Mastered' : 'Got it ✓'}
        </button>

        <button
          onClick={goNext}
          className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium transition-colors"
        >
          Next →
        </button>
      </div>

      {/* Quick listen button (always visible) */}
      <button
        onClick={() => speak(word.word)}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
      >
        🔊 Hear it now
      </button>

      {/* Keyboard hint */}
      <p className="text-xs text-slate-600 text-center">
        ← → to navigate &nbsp;·&nbsp; Space / Enter to flip
      </p>
    </div>
  )
}
