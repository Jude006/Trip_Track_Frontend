/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#10B981",
        accent: "#F59E0B",
        error: "#DC2626",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        text: {
          primary: "#1E293B",
          secondary: "#64748B"
        },

        'dark-primary': "#3B82F6",
        'dark-background': "#0F172A",
        'dark-surface': "#1E293B",
        'dark-text-primary': "#E2E8F0",
        'dark-text-secondary': "#94A3B8"
      },
      fontFamily: {
        san: [ "Manrope", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        Dancing:["Great Vibes", 'cursive']
      }
    },
  },
  plugins: [],
}