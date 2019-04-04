const express = require('express');
const helmet = require('helmet');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const restricted = require('../auth/restricted-middleware.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);

server.get('/', (req, res) => {
    res.send('server working')
});

module.exports = server;
