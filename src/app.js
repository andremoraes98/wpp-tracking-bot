'use strict';
require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 9000;

let wppRoutes = require('./routes/wpp');

const main = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/', wppRoutes);
    app.use('*', (_req, res) => res.status(404).send('404 Not Found'));
    app.listen(port, () =>
        console.log(`Rodando na porta ${port}`)
    );
};

main();