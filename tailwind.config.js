/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1250px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1251px' }, // Desktop smallest.
      xl: { min: '1159px' }, // Desktop wide.
      xxl: { min: '1359px' } // Desktop widescreen.
    },
    fontFamily: {
      'dancing-script': ['Dancing Script', 'cursive']
    },
    dropShadow: {
      '3xl': '35px 0px 0px rgba(0, 0, 0, 0.25)',
      '4xl': [
        '0 35px 35px rgba(0, 0, 0, 0.25)',
        '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
  },
  plugins: [],
}
