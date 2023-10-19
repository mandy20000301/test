/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        "xs": "375px",
        "sm": "480px",
        "ms": "576px",
        "md": "768px",
        "lg": "992px",
        "xl": "1200px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1800px",
        "5xl": "1920px",
      },
      colors: {
        'primary-01': '#5B61F4',
        'primary-02': '#5257DB',
        'primary-03': '#1A1A31',
        'primary-04': '#D4FC68',

      },
      fontFamily: {
        chinese: [
            "PingFang HK",
        ],
        english: [
            "Inter",
        ],
    },
    },
    container: {
      center: true,
    },
  },
  corePlugins: {
    // aspectRatio: false,
    container: false,
  },
  plugins: [],
}

