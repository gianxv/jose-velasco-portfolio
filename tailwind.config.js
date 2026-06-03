/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          400: '#94a3b8',
          500: '#64748b',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          400: '#22d3ee',
          500: '#14b8a6',
          600: '#0f9488',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.10)',
        line: '0 1px 0 rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
