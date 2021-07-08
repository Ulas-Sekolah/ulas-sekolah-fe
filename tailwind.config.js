module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#303030',
        'gray': '#F7FAFC',
        'blue-100': '#D4EFF6',
      }),
      boxShadow: theme => ({
        ...theme('colors'),
        sm: '0 10px 30px 0 rgba(48, 48, 48, 0.05)',
        none: 'none',
      }),
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active']
    },
  },
  plugins: [],
}
