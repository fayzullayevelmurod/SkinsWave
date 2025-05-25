/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'GothamPro': ['"Gotham Pro"', 'sans-serif'],
      },
      backgroundImage: {
        'nav-link-gradient': "linear-gradient(180deg, #252530 0%, #11111D 100%)",
        'btn-bg': "url(/src/assets/bt-bg.png)"
      },
      boxShadow: {
        'img-shadow': "0px 0px 8.7px 0px #9882E0B0"
      }
    },
  },
  plugins: [],
}
