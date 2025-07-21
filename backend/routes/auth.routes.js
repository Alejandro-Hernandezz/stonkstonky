const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// @route   POST /api/auth/register
// @desc    Registrar nuevo usuario
router.post('/register', authController.register);

// @route   POST /api/auth/login
// @desc    Iniciar sesión
router.post('/login', authController.login);

module.exports = router;