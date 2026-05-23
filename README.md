# 汉字 Learn — Chinese Vocabulary App

A web app for learning Mandarin Chinese vocabulary. Built with React + Vite + Tailwind CSS.

🌐 **[Live app →](https://chinese-learning-app-three.vercel.app)**

---

## Features

| Mode | What it does |
|---|---|
| 📚 **Flashcards** | 139 HSK 1–2 words — tap to flip English → Chinese + pinyin, 🔊 listen button, mark words as mastered |
| 🎵 **Tone Drill** | See a character, press listen, pick the correct tone from 4 pinyin options |
| 🧠 **Quiz** | 10-question multiple choice — Chinese character → pick English meaning |
| 📊 **Progress** | Tracks mastered words, daily streak, and quiz best score |

All progress is saved in your browser automatically (no account needed).

---

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in Chrome or Edge (best for Chinese audio).

> **Note:** Audio works best in Chrome or Edge — they have built-in Chinese text-to-speech voices.

---

## Adding new words

Open [src/data/words.js](src/data/words.js) and add an entry to the array:

```js
{ id: 200, word: '咖啡', pinyin: 'kāfēi', meaning: 'coffee', hsk: 2 }
```

For single-character words you also want in the Tone Drill, add:

```js
{ id: 201, word: '累', pinyin: 'lèi', meaning: 'tired', hsk: 2, tone: 4, base: 'lei' }
```

- `tone`: 1 = flat, 2 = rising, 3 = dip, 4 = falling
- `base`: the syllable without any tone mark (e.g. `lei`, `hao`, `ni`)

---

## Reset progress

In the app go to **📊 Progress → Reset all progress** at the bottom of the page.

---

## Tech stack

- [React 18](https://react.dev)
- [Vite 5](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- Browser Web Speech API (free, no API key)
- localStorage (no database)
