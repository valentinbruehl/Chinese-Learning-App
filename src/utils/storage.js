const KEYS = {
  mastered:  'zh_mastered',
  streak:    'zh_streak',
  lastDate:  'zh_last_date',
  quizBest:  'zh_quiz_best',
}

// ── Mastered words ──────────────────────────────────────────

export function getMastered() {
  try {
    const raw = localStorage.getItem(KEYS.mastered)
    return new Set(raw ? JSON.parse(raw) : [])
  } catch {
    return new Set()
  }
}

export function saveMastered(set) {
  localStorage.setItem(KEYS.mastered, JSON.stringify([...set]))
}

// ── Daily streak ────────────────────────────────────────────

function todayStr() {
  return new Date().toDateString()
}

export function getStreak() {
  return parseInt(localStorage.getItem(KEYS.streak) || '0', 10)
}

/** Call this whenever the user practices. Returns the current streak. */
export function touchStreak() {
  const today     = todayStr()
  const lastDate  = localStorage.getItem(KEYS.lastDate)
  const streak    = getStreak()

  if (lastDate === today) return streak  // already counted today

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const wasYesterday = lastDate === yesterday.toDateString()

  const newStreak = wasYesterday ? streak + 1 : 1
  localStorage.setItem(KEYS.streak,   String(newStreak))
  localStorage.setItem(KEYS.lastDate, today)
  return newStreak
}

// ── Quiz best score ─────────────────────────────────────────

export function getQuizBest() {
  return parseInt(localStorage.getItem(KEYS.quizBest) || '0', 10)
}

export function saveQuizBest(score) {
  const current = getQuizBest()
  if (score > current) {
    localStorage.setItem(KEYS.quizBest, String(score))
  }
}

// ── Reset everything ────────────────────────────────────────

export function resetAll() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k))
}
