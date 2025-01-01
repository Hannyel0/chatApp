/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // This will include all files in src, including components and pages
    './src/components/**/*.{js,jsx,ts,tsx}', // Specifically look into components
    './src/pages/**/*.{js,jsx,ts,tsx}', // Specifically look into pages
  ],
  theme: {
    extend: {
      colors: {
        "primary-a0": "#f012e6",
        "primary-a10": "#f448e9",
        "primary-a20": "#f867ec",
        "primary-a30": "#fb81ef",
        "primary-a40": "#fe98f2",
        "primary-a50": "#ffaef5",
        "surface-a0": "#121212",
        "surface-a10": "#282828",
        "surface-a20": "#3f3f3f",
        "surface-a30": "#575757",
        "surface-a40": "#717171",
        "surface-a50": "#8b8b8b"

      }
    },
  },
  plugins: [],
}

