/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#00FF41",
        "on-primary": "#000000",
        "primary-container": "#00d1ff",
        "on-primary-container": "#00566a",
        "secondary": "#00D1FF",
        "on-secondary": "#053900",
        "tertiary": "#FFAC93",
        "on-tertiary": "#5e1700",
        "background": "#050505",
        "on-background": "#e5e2e1",
        "surface": "#0e0e0e",
        "on-surface": "#f5f5f5",
        "on-surface-variant": "#a3a3a3",
        "surface-container": "#181818",
        "surface-container-low": "#111111",
        "surface-container-high": "#2a2a2a",
        "surface-container-highest": "#353534",
        "outline": "#333333",
        "outline-variant": "#3c494e"
      },
      borderRadius: {
        "DEFAULT": "4px",
        "lg": "8px",
        "xl": "16px",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Manrope", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
      boxShadow: {
        "3d-glow": "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 255, 65, 0.2)",
        "tactile": "0 4px 0 #00bf31, 0 8px 20px rgba(0, 255, 65, 0.3)",
        "tactile-active": "0 1px 0 #00bf31, 0 2px 10px rgba(0, 255, 65, 0.2)"
      }
    },
  },
  plugins: [],
}
