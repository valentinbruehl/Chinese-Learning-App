const TABS = [
  { id: 'flashcards', label: 'Flashcards', emoji: '📚' },
  { id: 'tone-drill', label: 'Tone Drill', emoji: '🎵' },
  { id: 'quiz',       label: 'Quiz',       emoji: '🧠' },
  { id: 'progress',   label: 'Progress',   emoji: '📊' },
]

export default function Nav({ view, setView }) {
  return (
    <nav className="sticky top-0 z-10 bg-slate-900/90 backdrop-blur border-b border-slate-700">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between py-3">
          <h1 className="text-xl font-bold tracking-wide">
            <span className="text-red-500">汉字</span>
            <span className="text-slate-300 ml-2 text-base font-normal">Learn</span>
          </h1>
        </div>

        {/* Tab row */}
        <div className="flex gap-1 pb-2">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setView(tab.id)}
              className={`
                flex-1 flex flex-col items-center gap-0.5 py-2 px-1 rounded-lg text-xs font-medium
                transition-colors duration-150
                ${view === tab.id
                  ? 'bg-red-600 text-white'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }
              `}
            >
              <span className="text-base">{tab.emoji}</span>
              <span className="hidden sm:block">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
