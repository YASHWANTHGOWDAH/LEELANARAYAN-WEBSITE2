/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F3EAD8',
          300: '#EBE0C7',
        },
        gold: {
          400: '#D4AF37',
          500: '#C5A059',
          600: '#B38F38',
          700: '#917228',
        },
        maroon: {
          800: '#6B1D2F',
          900: '#4D1220',
          950: '#350A14',
        },
        coral: {
          400: '#EE8891',
          500: '#E26D77',
          600: '#D94A56',
        },
        royal: {
          900: '#0F1D38',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Cinzel', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'classical-pattern': "radial-gradient(circle, rgba(197, 160, 89, 0.08) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
