/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        chinese: ['"Noto Sans SC"', 'sans-serif'],
      },
      colors: {
        red: {
          chinese: '#DC2626',
        },
      },
    },
  },
  plugins: [],
}
