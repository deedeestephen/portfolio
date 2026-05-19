/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0F',
        cyan: {
          DEFAULT: '#00dbe9',
          light: '#dbfcff',
        },
        purple: {
          DEFAULT: '#7000FF',
          light: '#d1bcff',
          dark: '#3c0090',
        },
        teal: {
          DEFAULT: '#00f6bb',
          light: '#d6ffeb',
        },
        surface: {
          0: '#131318',
          1: '#1b1b20',
          2: '#1f1f25',
          3: '#2a292f',
        },
        text: {
          main: '#e4e1e9',
          muted: '#b9cacb',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 219, 233, 0.5), inset 0 0 10px rgba(0, 219, 233, 0.3)',
        'neon-purple': '0 0 10px rgba(112, 0, 255, 0.5), inset 0 0 10px rgba(112, 0, 255, 0.3)',
        'neon-teal': '0 0 10px rgba(0, 246, 187, 0.5), inset 0 0 10px rgba(0, 246, 187, 0.3)',
      }
    },
  },
  plugins: [],
}
