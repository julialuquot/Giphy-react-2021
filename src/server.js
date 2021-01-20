const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;
const nextI18next = require('./i18n.js');
const routes = require('./routes/index.js');
const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV === 'development' });
const handle = routes.getRequestHandler(app);
const dev = process.env.NODE_ENV === 'development';

(async () => {
    await app.prepare();
    const server = express();

    if (dev) {
        const devProxy = {
            '/api/': {
                target: process.env.BACKEND_BASE_URL,
                changeOrigin: true,
            },
            '/api/merchant-dashboard': {
                target: process.env.BACKEND_BASE_URL,
                changeOrigin: true,
            },
        };
        const { createProxyMiddleware } = require('http-proxy-middleware');
        Object.keys(devProxy).forEach(function (context) {
            server.use(context, createProxyMiddleware(devProxy[context]));
        });
    }

    await nextI18next.initPromise;
    server.use(nextI18NextMiddleware(nextI18next));

    server.get('*', (req, res) => handle(req, res));

    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
