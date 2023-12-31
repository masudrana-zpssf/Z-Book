/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif']
      },
      colors: {
        "primary": '#5F35F5',
        'secondary': '#11175D',
        'overlay': "rgba(0, 0, 0, 0.25)"
      },
      boxShadow: {
        'gray': '0px 4px 4px 0px rgba(0, 0, 0, 0.41)',
      }
    },
  },
  plugins: [],
}
