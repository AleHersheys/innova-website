/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#EF8318",
        "secondary": "#cc5500",
        "tartiary": "#999A99",
        "orange": "#FFA145"
      },
      boxShadow: {
        '3xl': '0 10px 50px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

