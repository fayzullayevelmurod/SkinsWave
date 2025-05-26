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
        'Speed': ['"Speed"', 'sans-serif'],
        'BebasNeue': ['"Bebas Neue"', 'sans-serif'],
      },
      backgroundImage: {
        'nav-link-gradient': "linear-gradient(180deg, #252530 0%, #11111D 100%)",
        'btn-bg': "url(/src/assets/bt-bg.png)",
        "intro-img": "url(/src/assets/intro-img.png)",
        "intro-bg": "url(/src/assets/intro-bg.png)",
        'text-gradient': 'linear-gradient(180deg, #FD9C00 0%, #FFD301 100%)',
        'play-card-one': 'url(/images/play-card-bg-1.png)',
        'play-card-two': 'url(/images/play-card-bg-2.png)',
        'play-card-three': 'url(/images/play-card-bg-3.png)',
        'play-card-four': 'url(/images/play-card-bg-4.png)',
        'most-card-one': 'url(/images/most-card-1.png)',
        'most-card-two': 'url(/images/most-card-2.png)',
        'most-card-three': 'url(/images/most-card-3.png)',
        'most-card-four': 'url(/images/most-card-4.png)',
        'trade-skin-bg-one': 'url(images/trade-skins-bg-1.png)',
        'trade-skin-bg-two': 'url(images/trade-skins-bg-2.png)',
        'trade-skin-bg-three': 'url(images/trade-skins-bg-3.png)',
      },
      boxShadow: {
        'img-shadow': "0px 0px 8.7px 0px #9882E0B0",
        'fire-shadow': "0px 3.8px 14.46px 0px #9A2E1B"
      },
      fontSize: {
        'xs-base': '15px'
      },
      lineHeight: {

      }
    },
  },
  plugins: [],
}
