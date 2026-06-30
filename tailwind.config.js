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
        navy: {
          50: '#E8EDF3',
          100: '#C5D0DE',
          200: '#9EADC4',
          300: '#778BAA',
          400: '#5A7296',
          500: '#3E5982',
          600: '#1E3A5F',
          700: '#1A3A5C',
          800: '#0B1A33',
          900: '#0A1628',
          950: '#060E1A',
        },
        gold: {
          50: '#FDF8EE',
          100: '#F9EDCC',
          200: '#F3DE99',
          300: '#EBCB66',
          400: '#E4B833',
          500: '#D4AF37',
          600: '#C9A84C',
          700: '#B8942F',
          800: '#967826',
          900: '#745D1E',
        },
        petrol: {
          50: '#E6F0F8',
          100: '#B3D2EC',
          200: '#80B4E0',
          300: '#4D96D4',
          400: '#2678C8',
          500: '#1A5B9E',
          600: '#1A3A5C',
          700: '#0F2D4A',
          800: '#0A1F38',
          900: '#051226',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 40px rgba(0,0,0,0.1)',
        'nav': '0 1px 3px rgba(0,0,0,0.05)',
        'gold': '0 4px 14px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(212, 175, 55, 0)' },
        },
      },
    },
  },
  plugins: [],
};
