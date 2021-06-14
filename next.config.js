module.exports = {
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