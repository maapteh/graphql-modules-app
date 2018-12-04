const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 4001;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.get('/products', (req, res) => {
      return app.render(req, res, '/products', req.query)
    });

    server.get('/products/:id', (req, res) => {
        return app.render(req, res, '/products', { id: req.params.id })
    });

    server.get('/flights', (req, res) => {
        return app.render(req, res, '/products', req.query)
    });

    server.get('/flights/:id', (req, res) => {
      return app.render(req, res, '/flights', { id: req.params.id })
    });

    server.get('*', (req, res) => {
        return app.render(req, res, '/index', req.query)
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    });

});
