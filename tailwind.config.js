module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#303030',
      'gray': '#F7FAFC',
      'blue-100': '#D4EFF6',
     })

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
