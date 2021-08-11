module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#303030',
        'black': '#1F1B24',
        'gray': '#F7FAFC',
        'gray-100': '#E5E5E5',
        'gray-200': '#C4C4C4',
        'gray-300': '#9A9797',
        'gray-400': '#302C35',
        'blue-100': '#D4EFF6',
        'blue-200': '#4FD5F8',
        'blue-300': '#10143B',
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#303030',
        'black': '#1F1B24',
        'gray': '#F7FAFC',
        'gray-100': '#E5E5E5',
        'gray-200': '#C4C4C4',
        'gray-300': '#9A9797',
        'gray-400': '#302C35',
        'blue-100': '#D4EFF6',
        'blue-200': '#4FD5F8',
        'blue-300': '#10143B',
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#303030',
        'black': '#1F1B24',
        'primary-100': 'rgba(48, 48, 48, .4)',
        'gray': '#F7FAFC',
        'gray-100': '#E5E5E5',
        'gray-200': '#C4C4C4',
        'gray-300': '#9A9797',
        'gray-400': '#302C35',
        'blue-100': '#D4EFF6',
        'blue-200': '#4FD5F8',
        'blue-300': '#10143B',
       }),
      boxShadow: theme => ({
        ...theme('colors'),
        sm: '0 10px 30px 0 rgba(48, 48, 48, 0.05)',
        none: 'none',
      }),
      borderColor: theme => ({
        ...theme('colors'),
        'primary': '#303030',
        'black': '#1F1B24',
        'gray': '#F7FAFC',
        'gray-100': '#E5E5E5',
        'gray-200': '#C4C4C4',
        'gray-300': '#9A9797',
        'gray-400': '#302C35',
        'blue-100': '#D4EFF6',
        'blue-200': '#4FD5F8',
        'blue-300': '#10143B',
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
