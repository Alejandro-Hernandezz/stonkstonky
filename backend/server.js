const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/error.middleware');
const seedDatabase = require('./controllers/seed.controller');

// Configurar variables de entorno
dotenv.config();

// Crear aplicación Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sembrar base de datos con datos demo
seedDatabase();

// Rutas
const authRoutes = require('./routes/auth.routes');
const dashboardRoutes = require('./routes/dashboard.routes');

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de StonkStonky funcionando');
});

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en puerto ${PORT}`);
});