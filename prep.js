const posts = require('./src/posts.json')

const routes = posts.map(post => `/songs/${post.slug}`)
routes.push('/')

exports.default = () => ({
  routes,
  timeout: 1000,
  dimensions: {
    width: 1440,
    height: 900
  },
  https: true,
  hostname: 'https://donniewest.com',
  minify: true
})
