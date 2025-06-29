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
        'product-card-bg': "url(/images/card-bg.png)",
        'text-gradient': 'linear-gradient(180deg, #FD9C00 0%, #FFD301 100%)',
        'play-card-one': 'url(/images/play-card-bg-1.png)',
        'play-card-two': 'url(/images/play-card-bg-2.png)',
        'play-card-three': 'url(/images/play-card-bg-3.png)',
        'play-card-four': 'url(/images/play-card-bg-4.png)',
        'most-card-one': 'url(/images/most-card-1.png)',
        'most-card-two': 'url(/images/most-card-2.png)',
        'most-card-three': 'url(/images/most-card-3.png)',
        'most-card-four': 'url(/images/most-card-4.png)',
        'trade-skin-bg-one': 'url(/images/trade-skins-bg-1.png)',
        'trade-skin-bg-two': 'url(/images/trade-skins-bg-2.png)',
        'trade-skin-bg-three': 'url(/images/trade-skins-bg-3.png)',
        'swiper-btn': 'linear-gradient(180deg, #252447 0%, #1E1D35 100%)',
        'cheaper-items-bg': 'url(/images/cheaper-items-bg.png)',
        'bottom-hero-bg': 'url(/images/bottom-hero-bg.png)',
        'cheaper-bg-media': 'url(/images/cheaper-bg-media.png)',
        'card-bg': 'linear-gradient(180deg, #27154B 0%, #171432 100%)',
        'card-bg-1': 'url(/images/card-bg-1.png)',
        'media-card-last': 'url(/images/media-card-last.png)',
        'media-card-midle': 'url(/images/media-card-midle.png)',
        'card-gradient': 'linear-gradient(180deg, rgba(36, 19, 69, 0) 0%, rgba(36, 19, 69, 0.77) 56.25%, #241345 100%)',
        'skin-card': "linear-gradient(180deg, #161530 0%, #161525 100%)",
        'skin-child-card': "linear-gradient(180deg, #14182B 0%, rgba(41, 27, 90, 0.7) 44.71%, #14182B 100%)",
        "tooltip-bg": "url(/images/tooltip-bg.png)",
      },
      backgroundColor: {
        'custom-dark': 'rgba(10, 13, 28, 0.86)',
      },
      boxShadow: {
        'img-shadow': "0px 0px 8.7px 0px #9882E0B0",
        'fire-shadow': "0px 3.8px 14.46px 0px #9A2E1B",

      },
      fontSize: {
        'xs-base': '15px'
      },
      lineHeight: {

      },
      dropShadow: {
        "skin-shd": "-1.23px 17px 14px rgba(0, 0, 0, 0.32)",
        'product-shd': "-6px 13px 12px rgba(0, 0, 0, 0.47)",
      }
    },
  },
  plugins: [],
}
