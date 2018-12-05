const routes = module.exports = require('next-routes')()

routes
    .add('about')
    .add('/products', '/products/:id', 'products')
    .add('/flights', '/flights/:id', 'flights')
    .add({name: 'v1', pattern: '/v1', page: 'index'})
