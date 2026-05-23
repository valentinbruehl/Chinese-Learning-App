import { useState, useCallback } from 'react'
import { drillWords } from '../data/words'
import { speak } from '../utils/speech'

// ── Tone utility ──────────────────────────────────────────────────────────────

const TONE_MARKS = {
  a: ['ā', 'á', 'ǎ', 'à'],
  e: ['ē', 'é', 'ě', 'è'],
  i: ['ī', 'í', 'ǐ', 'ì'],
  o: ['ō', 'ó', 'ǒ', 'ò'],
  u: ['ū', 'ú', 'ǔ', 'ù'],
}

function applyTone(base, toneNum) {
  if (toneNum === 5) return base
  const idx = toneNum - 1
  if (base.includes('a')) return base.replace('a', TONE_MARKS.a[idx])
  if (base.includes('e')) return base.replace('e', TONE_MARKS.e[idx])
  if (base.includes('ou')) return base.replace('o', TONE_MARKS.o[idx])
  for (let i = base.length - 1; i >= 0; i--) {
    const ch = base[i]
    if (TONE_MARKS[ch]) {
      return base.slice(0, i) + TONE_MARKS[ch][idx] + base.slice(i + 1)
    }
  }
  return base
}

const TONE_NAMES = { 1: '1st tone (flat)', 2: '2nd tone (rising)', 3: '3rd tone (dip)', 4: '4th tone (falling)' }

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickQuestion(exclude = null) {
  const pool = exclude ? drillWords.filter(w => w.id !== exclude) : drillWords
  return pool[Math.floor(Math.random() * pool.length)]
}

function buildOptions(word) {
  // Generate all 4 tones for this syllable
  const options = [1, 2, 3, 4].map(t => ({
    tone: t,
    pinyin: applyTone(word.base, t),
    correct: t === word.tone,
  }))
  return shuffle(options)
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ToneDrill() {
  const [word, setWord]         = useState(() => pickQuestion())
  const [options, setOptions]   = useState(() => buildOptions(pickQuestion()))
  const [selected, setSelected] = useState(null)  // tone number
  const [score, setScore]       = useState({ correct: 0, total: 0 })
  const [shakeId, setShakeId]   = useState(null)

  const currentWord = word
  const currentOptions = options

  const next = useCallback(() => {
    const w = pickQuestion(currentWord.id)
    setWord(w)
    setOptions(buildOptions(w))
    setSelected(null)
    setShakeId(null)
  }, [currentWord.id])

  const handleAnswer = (opt) => {
    if (selected !== null) return  // already answered
    setSelected(opt.tone)

    if (opt.correct) {
      setScore(s => ({ correct: s.correct + 1, total: s.total + 1 }))
      speak(currentWord.word)
      setTimeout(next, 1200)
    } else {
      setShakeId(opt.tone)
      setScore(s => ({ ...s, total: s.total + 1 }))
      speak(currentWord.word)
    }
  }

  const accuracy = score.total > 0
    ? Math.round((score.correct / score.total) * 100)
    : null

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col items-center gap-8">

      {/* Score */}
      <div className="flex gap-6 text-center">
        <div>
          <div className="text-2xl font-bold text-green-400">{score.correct}</div>
          <div className="text-xs text-slate-500">correct</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-slate-300">{score.total}</div>
          <div className="text-xs text-slate-500">total</div>
        </div>
        {accuracy !== null && (
          <div>
            <div className="text-2xl font-bold text-yellow-400">{accuracy}%</div>
            <div className="text-xs text-slate-500">accuracy</div>
          </div>
        )}
      </div>

      {/* Instruction */}
      <p className="text-slate-400 text-sm text-center">
        Listen, then pick the correct pinyin (tone included)
      </p>

      {/* Character display */}
      <div className="flex flex-col items-center gap-4">
        <div className="font-chinese text-8xl font-bold text-white drop-shadow-lg">
          {currentWord.word}
        </div>
        <p className="text-slate-400 text-sm">{currentWord.meaning}</p>

        {/* Listen button */}
        <button
          onClick={() => speak(currentWord.word)}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-full font-medium transition-colors"
        >
          🔊 Listen
        </button>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        {currentOptions.map(opt => {
          const isSelected = selected === opt.tone
          const isCorrect  = opt.correct
          const isWrong    = isSelected && !isCorrect
          const showCorrect = selected !== null && isCorrect

          return (
            <button
              key={opt.tone}
              onClick={() => handleAnswer(opt)}
              className={`
                relative py-5 rounded-2xl text-2xl font-bold border-2 transition-all duration-200
                ${shakeId === opt.tone ? 'shake' : ''}
                ${showCorrect
                  ? 'border-green-500 bg-green-900/40 text-green-300'
                  : isWrong
                    ? 'border-red-500 bg-red-900/40 text-red-300'
                    : selected !== null
                      ? 'border-slate-700 bg-slate-800/50 text-slate-500 cursor-default'
                      : 'border-slate-600 bg-slate-800 text-white hover:border-red-500 hover:bg-slate-700 cursor-pointer'
                }
              `}
            >
              {opt.pinyin}
              {showCorrect && (
                <span className="absolute top-1.5 right-2.5 text-sm text-green-400">✓</span>
              )}
              {isWrong && (
                <span className="absolute top-1.5 right-2.5 text-sm text-red-400">✗</span>
              )}
            </button>
          )
        })}
      </div>

      {/* Feedback & next */}
      {selected !== null && (
        <div className="flex flex-col items-center gap-3">
          {currentOptions.find(o => o.correct) && (
            <p className="text-slate-400 text-sm">
              Correct: <span className="text-white font-semibold">
                {currentOptions.find(o => o.correct).pinyin}
              </span>
              {' '}— {TONE_NAMES[currentWord.tone]}
            </p>
          )}
          <button
            onClick={next}
            className="bg-red-600 hover:bg-red-500 text-white px-8 py-2.5 rounded-full font-medium transition-colors"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}
