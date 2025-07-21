const jwt = require('jsonwebtoken');
const db = require('../config/db');

const authMiddleware = async (req, res, next) => {
  // Obtener token del header
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado, token no proporcionado' });
  }

  try {
    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Obtener usuario de la base de datos
    const user = await db.get('SELECT id, name, email FROM users WHERE id = ?', [decoded.id]);

    if (!user) {
      return res.status(401).json({ error: 'Usuario no encontrado' });
    }

    // Añadir usuario al request
    req.user = user;
    next();
  } catch (error) {
    console.error('Error de autenticación:', error);
    res.status(401).json({ error: 'Token inválido' });
  }
};

module.exports = authMiddleware;