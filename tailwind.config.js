/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "sf-pro-display": "'SF Pro Display', sans-serif",
    },
    extend: {
      colors: {
        "custom-bg" : '#F9F5F3'
      },
      backgroundImage: {
        'course-image': "url('/images/CourseImage.png')"
      },
      width: {
        '25': '6.25rem',
        '112': '28rem',
        '128' : '32rem',
        '144' : '36rem',
        '160' : '40rem',
        '176' : '44rem',
        '192' : '48rem',
        '208' : '52rem',
        '240' : '60rem',
        '260' : '65rem',
        '280' : '70rem',
        '300' : '75rem',
        '320' : '80rem'
      },
      height: {
        '112': '28rem',
        '128' : '32rem',
        '144' : '36rem',
        '160' : '40rem',
        '176' : '44rem',
        '192' : '48rem',
        '208' : '52rem',
        '240' : '60rem',
        '260' : '65rem',
        '280' : '70rem',
        '300' : '75rem',
        '320' : '80rem'
      }
    },
  },
  plugins: [],
}
