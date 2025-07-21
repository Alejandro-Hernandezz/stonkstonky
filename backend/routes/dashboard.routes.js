const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const dashboardController = require('../controllers/dashboard.controller');

// Aplicar middleware de autenticación
router.use(authMiddleware);

// @route   GET /api/dashboard
// @desc    Obtener datos para el dashboard
router.get('/', dashboardController.getDashboardData);

module.exports = router;