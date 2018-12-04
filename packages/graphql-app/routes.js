const routes = module.exports = require('next-routes')()

routes
    .add('about')
    .add('products', '/products/:id')
    .add('flights', '/flights/:id')
    .add({name: 'v1', pattern: '/v1', page: 'index'})
