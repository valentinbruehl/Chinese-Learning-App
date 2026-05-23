import { useState, useCallback } from 'react'
import { words } from '../data/words'
import { speak } from '../utils/speech'
import { saveQuizBest, getQuizBest } from '../utils/storage'

const QUIZ_LENGTH = 10

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildQuiz() {
  const pool = shuffle(words)
  return pool.slice(0, QUIZ_LENGTH).map(correct => {
    // Pick 3 wrong distractors
    const distractors = shuffle(words.filter(w => w.id !== correct.id))
      .slice(0, 3)
      .map(w => w.meaning)

    const options = shuffle([correct.meaning, ...distractors])
    return { word: correct, options, answer: correct.meaning }
  })
}

// ── Results screen ─────────────────────────────────────────────────────────────

function Results({ score, questions, onRestart }) {
  const best = getQuizBest()
  const pct  = Math.round((score / QUIZ_LENGTH) * 100)

  const emoji =
    pct === 100 ? '🏆' :
    pct >= 80   ? '🎉' :
    pct >= 60   ? '👍' :
    pct >= 40   ? '📖' : '💪'

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 flex flex-col items-center gap-6 text-center">
      <div className="text-6xl">{emoji}</div>
      <h2 className="text-2xl font-bold text-white">Quiz Complete!</h2>

      <div className="flex gap-8">
        <div>
          <div className="text-4xl font-bold text-red-400">{score}/{QUIZ_LENGTH}</div>
          <div className="text-sm text-slate-500">this round</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-yellow-400">{best}/{QUIZ_LENGTH}</div>
          <div className="text-sm text-slate-500">best ever</div>
        </div>
      </div>

      <div className="w-full max-w-sm bg-slate-800 rounded-full h-3">
        <div
          className="h-3 rounded-full bg-red-500 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Review */}
      <div className="w-full max-w-sm text-left space-y-2 max-h-64 overflow-y-auto">
        {questions.map((q, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm
              ${q.userAnswer === q.answer ? 'bg-green-900/30' : 'bg-red-900/30'}`}
          >
            <span className="font-chinese text-xl w-8 text-center">{q.word.word}</span>
            <span className="flex-1 text-slate-300">{q.answer}</span>
            {q.userAnswer !== q.answer && (
              <span className="text-red-400 text-xs">you: {q.userAnswer}</span>
            )}
            <span>{q.userAnswer === q.answer ? '✓' : '✗'}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="bg-red-600 hover:bg-red-500 text-white px-10 py-3 rounded-full font-semibold transition-colors"
      >
        Play Again
      </button>
    </div>
  )
}

// ── Main Quiz component ────────────────────────────────────────────────────────

export default function Quiz() {
  const [questions, setQuestions] = useState(() => buildQuiz())
  const [qIndex,    setQIndex]    = useState(0)
  const [selected,  setSelected]  = useState(null)
  const [score,     setScore]     = useState(0)
  const [done,      setDone]      = useState(false)
  const [answered,  setAnswered]  = useState([])   // {word, answer, userAnswer}

  const q = questions[qIndex]

  const handleAnswer = useCallback((choice) => {
    if (selected !== null) return
    setSelected(choice)

    const correct = choice === q.answer
    const newScore = correct ? score + 1 : score
    if (correct) {
      setScore(newScore)
      speak(q.word.word)
    }

    const record = { word: q.word, answer: q.answer, userAnswer: choice }
    const newAnswered = [...answered, record]
    setAnswered(newAnswered)

    setTimeout(() => {
      if (qIndex + 1 >= QUIZ_LENGTH) {
        saveQuizBest(newScore)
        setDone(true)
      } else {
        setQIndex(i => i + 1)
        setSelected(null)
      }
    }, 900)
  }, [selected, q, score, answered, qIndex])

  const restart = () => {
    setQuestions(buildQuiz())
    setQIndex(0)
    setSelected(null)
    setScore(0)
    setDone(false)
    setAnswered([])
  }

  if (done) {
    return <Results score={score} questions={answered} onRestart={restart} />
  }

  const progress = ((qIndex) / QUIZ_LENGTH) * 100

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col gap-6">

      {/* Progress bar */}
      <div className="w-full bg-slate-800 rounded-full h-2">
        <div
          className="h-2 rounded-full bg-red-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question count */}
      <div className="flex justify-between text-sm text-slate-500">
        <span>Question {qIndex + 1} of {QUIZ_LENGTH}</span>
        <span className="text-green-400">{score} correct</span>
      </div>

      {/* Word display */}
      <div className="flex flex-col items-center gap-3 py-4">
        <p className="text-slate-400 text-sm">What does this mean?</p>
        <div
          className="font-chinese text-8xl font-bold text-white drop-shadow-lg cursor-pointer"
          onClick={() => speak(q.word.word)}
          title="Click to hear"
        >
          {q.word.word}
        </div>
        <p className="text-slate-500 text-sm">{q.word.pinyin}</p>
        <button
          onClick={() => speak(q.word.word)}
          className="text-slate-500 hover:text-slate-300 text-xs flex items-center gap-1 transition-colors"
        >
          🔊 hear it
        </button>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3">
        {q.options.map((opt, i) => {
          const isSelected = selected === opt
          const isCorrect  = opt === q.answer
          const isWrong    = isSelected && !isCorrect

          return (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className={`
                w-full py-4 px-5 rounded-xl text-left font-medium transition-all duration-200
                ${selected !== null && isCorrect
                  ? 'bg-green-700 text-white border-2 border-green-500'
                  : isWrong
                    ? 'bg-red-900/60 text-red-300 border-2 border-red-500'
                    : selected !== null
                      ? 'bg-slate-800/50 text-slate-500 border-2 border-slate-700 cursor-default'
                      : 'bg-slate-800 text-slate-100 border-2 border-slate-700 hover:border-red-500 hover:bg-slate-700 cursor-pointer'
                }
              `}
            >
              <span className="text-slate-500 mr-3 text-sm">{String.fromCharCode(65 + i)}.</span>
              {opt}
              {selected !== null && isCorrect && (
                <span className="float-right text-green-400">✓</span>
              )}
              {isWrong && (
                <span className="float-right text-red-400">✗</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
