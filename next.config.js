const withPlugins = require('next-compose-plugins')
const withImage = require('next-images')

module.exports =  withPlugins([
  withImage, {
    env:{
      appName: 'Rating Sekolah'
    },
    future: {
      webpack5: true,
    },
  
    async rewrites() {
      return [{
          source: '/login',
          destination: '/auth/login',
        }, {
          source: '/register',
          destination: '/auth/register',
      }]
    }
  }
])