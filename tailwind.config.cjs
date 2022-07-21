/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Play: ["Play"],
        Questrial: ["Questrial"],
      },
    },
  },
  plugins: [],
}
