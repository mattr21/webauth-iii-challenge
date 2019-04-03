const express = require('express');
const helmet = require('helmet');
// add router(s) once they exist
// i.e. const [name]Router = require('[router file path]');

const server = express();

server.use(express.json());
server.use(helmet());

// add router(s) once they exist
// i.e. server.use('[base api path]', [name]Router);

server.get('/', (req, res) => {
    res.send('server working')
});

module.exports = server;
