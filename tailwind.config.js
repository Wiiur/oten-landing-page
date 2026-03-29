/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        telegraf: ['Telegraf', 'sans-serif'],
        michroma: ['Michroma', 'sans-serif'], 
      },
      // ADICIONE ESTE BLOCO DE KEYFRAMES E ANIMATION:
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'fade-in-delayed': 'fadeIn 1.5s ease-out 0.8s forwards',
      }
    },
  },
  plugins: [],
}