const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 4001;
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express()

        server.get('/products/:id', (req, res) => {
            const actualPage = '/product';
            const queryParams = { id: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });

        server.get('*', (req, res) => {
            return handler(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`Ready on http://localhost:${port}`)
        });
    });
