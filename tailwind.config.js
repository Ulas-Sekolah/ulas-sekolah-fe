module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#303030',
        'gray': '#F7FAFC',
        'gray-100': '#E5E5E5',
        'gray-200': '#C4C4C4',
        'blue-100': '#D4EFF6',
      }),
      boxShadow: theme => ({
        ...theme('colors'),
        sm: '0 10px 30px 0 rgba(48, 48, 48, 0.05)',
        none: 'none',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'primary': '#303030',
        'gray': '#F7FAFC',
        'blue-100': '#D4EFF6',
       }),
       width: {
        '400': '400px',
       },
       height: {
        '268': '268px',
        '292': '292px',
        '296': '296px',
       }
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active']
    },
  },
  plugins: [],
}
