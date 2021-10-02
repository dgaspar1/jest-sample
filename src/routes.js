const routes = require('express').Router();

const authMiddleware = require('./app/middleware/auth');

const SessionController = require('./app/controllers/SessionController');

routes.post('/sessions', SessionController.store);

routes.get('/dashboard', authMiddleware, (req, res) => {
    return res.status(200).send();
});

module.exports = routes;
