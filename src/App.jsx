import { useState, useEffect } from 'react'
import Nav        from './components/Nav'
import Flashcard  from './components/Flashcard'
import ToneDrill  from './components/ToneDrill'
import Quiz       from './components/Quiz'
import Progress   from './components/Progress'
import { preloadVoices } from './utils/speech'

export default function App() {
  const [view, setView] = useState('flashcards')

  // Pre-load TTS voices on startup
  useEffect(() => { preloadVoices() }, [])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-chinese">
      <Nav view={view} setView={setView} />

      <main>
        {view === 'flashcards' && <Flashcard />}
        {view === 'tone-drill' && <ToneDrill />}
        {view === 'quiz'       && <Quiz />}
        {view === 'progress'   && <Progress />}
      </main>
    </div>
  )
}
