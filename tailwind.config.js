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

