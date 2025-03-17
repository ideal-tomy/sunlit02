/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9AA33',  // アクセントカラー（オレンジ）
        secondary: '#FFFFFF', // セカンダリカラー（白）
        accent: {
          light: '#F8F8F8',  // ライトグレー
          dark: '#4A6572',   // ダークグレー
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif JP', 'serif'],
      },
    },
  },
  plugins: [],
}
