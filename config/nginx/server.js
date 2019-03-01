const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const proxy = require('http-proxy-middleware');

let CERT = 'localhost.crt';
const CERT_SIGNED = 'local.test+2.pem';
let KEY = 'localhost.key';
const KEY_SIGNED = 'local.test+2-key.pem';

if (fs.existsSync(CERT_SIGNED) && fs.existsSync(CERT_SIGNED)) {
    console.log('[PROXY] Own certificates are being used');
    CERT = CERT_SIGNED;
    KEY = KEY_SIGNED;
}

const privateKey = fs.readFileSync(KEY, 'utf8');
const certificate = fs.readFileSync(CERT, 'utf8');

const isDocker = process.env.IS_DOCKER;

const HTTPS_PORT = 443;
const HTTP_PORT = 3000;

const WEB = isDocker ? 'web' : 'localhost';
const API = isDocker ? 'graphql' : 'localhost';

const app = express();

// Our application: API
app.use(
    `${SERVICE_CONTEXT}/graphql`,
    proxy({
        target: `http://${API}:4000`,
    }),
);

// Our application: WEB
app.use(
    ['/__webpack_hmr', SERVICE_CONTEXT, '/'],
    proxy({
        target: `http://${WEB}:4001`,
    }),
);

const credentials = {
    key: privateKey,
    cert: certificate,
};
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

console.log(`[PROXY] running for: ${isDocker ? 'docker' : 'localhost'}`);

httpServer.listen(HTTP_PORT, () => {
    console.log(`[PROXY] 🚀 http started on port ${HTTP_PORT}`);
});

httpsServer.listen(HTTPS_PORT, () => {
    console.log(`[PROXY] 🚀 https started on port ${HTTPS_PORT}`);
});
