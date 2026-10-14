/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: '#00f0ff' },
        purple: { DEFAULT: '#7b2fff' },
        pink: { DEFAULT: '#ff2d78' },
        dark: { DEFAULT: '#04060e', 2: '#080d1a', 3: '#0d1428' },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'blink': 'blink 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,240,255,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(0,240,255,0.7)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.2 },
        },
      },
    },
  },
  plugins: [],
}
