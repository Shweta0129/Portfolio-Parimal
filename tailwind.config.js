/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f4f5f5",
        surface: "#ffffff",
        surface2: "#f9fafb",
        border: "#e5e7eb",
        primary: "#ff5a1f", // Orange (like Cohesion button)
        secondary: "#6366f1", // Purple/Blue
        accent: "#3b82f6", // Blue
        textMain: "#111827",
        textMuted: "#4b5563",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        }
      }
    },
  },
  plugins: [],
}
