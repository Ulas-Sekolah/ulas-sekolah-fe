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
        'blue-200': '#4FD5F8',
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#303030',
        'gray': '#F7FAFC',
        'gray-100': '#E5E5E5',
        'gray-200': '#C4C4C4',
        'blue-100': '#D4EFF6',
        'blue-200': '#4FD5F8',
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#303030',
        'primary-100': 'rgba(48, 48, 48, .4)',
        'gray': '#F7FAFC',
        'gray-100': '#E5E5E5',
        'gray-200': '#C4C4C4',
        'blue-100': '#D4EFF6',
        'blue-200': '#4FD5F8',
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
        'gray-100': '#E5E5E5',
        'gray-200': '#C4C4C4',
        'blue-100': '#D4EFF6',
        'blue-200': '#4FD5F8',
       }),
      screens: {
        'hp': '0',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      width: {
        '400': '400px',
      },
      height: {
        '300': '300px',
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
