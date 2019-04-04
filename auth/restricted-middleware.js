const bcrypt= require('bcryptjs');
const Users = require('../users/users-model.js');
const jwt = require('jsonwebtoken');
const secrets = require('./secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
            if (error) {
                res.status(401).json({ message: 'Invalid credentials' });
            } else {
                req.decodedJwt = decodedToken // optional - makes the token payload available to any endpoint that uses this restricted middleware
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
};