import { useState } from 'react'
import { words } from '../data/words'
import { getMastered, getStreak, getQuizBest, resetAll } from '../utils/storage'

export default function Progress() {
  const [mastered, setMastered] = useState(() => getMastered())
  const streak   = getStreak()
  const quizBest = getQuizBest()
  const total    = words.length
  const count    = mastered.size
  const pct      = Math.round((count / total) * 100)

  const masteredWords = words.filter(w => mastered.has(w.id))

  const handleReset = () => {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      resetAll()
      setMastered(new Set())
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 flex flex-col gap-8">

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          value={`${count}/${total}`}
          label="Words mastered"
          color="text-green-400"
        />
        <StatCard
          value={streak === 0 ? '—' : `${streak} 🔥`}
          label="Day streak"
          color="text-orange-400"
        />
        <StatCard
          value={`${quizBest}/10`}
          label="Quiz best"
          color="text-yellow-400"
        />
      </div>

      {/* Progress bar */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm text-slate-400">
          <span>Overall progress</span>
          <span className="text-white font-semibold">{pct}%</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
          <div
            className="h-4 rounded-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 text-center">
          {total - count} words left to master
        </p>
      </div>

      {/* Mastered word list */}
      {masteredWords.length > 0 && (
        <div>
          <h3 className="text-slate-300 font-semibold mb-3">
            Mastered words ({count})
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
            {masteredWords.map(w => (
              <div
                key={w.id}
                className="bg-slate-800 rounded-lg px-3 py-2 flex items-center gap-2"
              >
                <span className="font-chinese text-lg text-white">{w.word}</span>
                <span className="text-slate-500 text-xs truncate">{w.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {masteredWords.length === 0 && (
        <div className="text-center text-slate-500 py-8">
          <p className="text-4xl mb-3">📚</p>
          <p>No words mastered yet.</p>
          <p className="text-sm mt-1">Hit <strong>"Got it ✓"</strong> on the flashcards to track your progress!</p>
        </div>
      )}

      {/* Reset button */}
      <button
        onClick={handleReset}
        className="text-slate-600 hover:text-red-400 text-sm transition-colors underline self-center"
      >
        Reset all progress
      </button>
    </div>
  )
}

function StatCard({ value, label, color }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 flex flex-col items-center gap-1">
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-xs text-slate-500 text-center">{label}</div>
    </div>
  )
}
