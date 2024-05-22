/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#212130",
        "light-blue": "#2C2C4B",
        "gray": "#2B2B3E",
        "light-gray": "#62627C",
        "white": "#E4DFED",
        custom2b2b3e: '#2b2b3e',
        custom222233: '#222233',
      },

    },
  },
  plugins: [],
}

