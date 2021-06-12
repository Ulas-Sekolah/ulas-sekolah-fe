module.exports = {
  env:{
    appName: 'Rating Sekolah'
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