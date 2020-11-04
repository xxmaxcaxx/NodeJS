const express = require('express');

// Rotas
const users = require('./users');
const auth = require('./auth');

// instancia do router
const router = express.Router();

// Rotas base
router.use('/users', users);
router.use('/auth', auth);

module.exports = router;