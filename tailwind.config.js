/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // Smooth grid movement for techno feel
        'slow-pan': {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        // Optional glow pulsing effect (for the grid)
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'slow-pan': 'slow-pan 30s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
