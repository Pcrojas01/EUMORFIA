/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#FF1E1E',
        dark: '#000000',
        smoke: '#1A1A1A',
        light: '#FFFFFF',
      },
      fontFamily: {
        'gothic': ['Cinzel', 'serif'],
        'urban': ['Orbitron', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(255, 30, 30, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 30, 30, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}