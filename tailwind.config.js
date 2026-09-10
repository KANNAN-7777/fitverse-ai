/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ccff00",
        dark: "#0b0f17",
        darker: "#05070a",
        card: "#121824",
      },
    },
  },
  plugins: [],
}