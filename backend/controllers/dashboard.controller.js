const db = require('../config/db');
const moment = require('moment');

const getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;
    const currentMonth = moment().startOf('month').format('YYYY-MM-DD');
    
    // Obtener transacciones del mes actual
    const transactions = await db.query(
      `SELECT * FROM transactions 
       WHERE user_id = ? 
       AND strftime('%Y-%m', date) = strftime('%Y-%m', ?)
       ORDER BY date DESC`,
      [userId, currentMonth]
    );
    
    // Calcular resumen financiero
    const summary = await db.query(
      `SELECT 
        type,
        SUM(amount) as total
       FROM transactions
       WHERE user_id = ?
         AND strftime('%Y-%m', date) = strftime('%Y-%m', ?)
       GROUP BY type`,
      [userId, currentMonth]
    );
    
    // Calcular balance, ingresos y gastos
    let balance = 0;
    let income = 0;
    let expenses = 0;
    
    summary.forEach(item => {
      if (item.type === 'income') {
        income = item.total;
        balance += item.total;
      } else {
        expenses = item.total;
        balance -= item.total;
      }
    });
    
    // Obtener últimas transacciones
    const latestTransactions = transactions.slice(0, 5);
    
    // Crear datos de gráfico
    const chartData = {
      labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Ingresos',
          data: [3000, 4200, 2800, 3500, 5000, 3800],
          borderColor: '#4DB6AC',
          backgroundColor: 'rgba(77, 182, 172, 0.1)',
          tension: 0.4,
          fill: true,
        },
        {
          label: 'Gastos',
          data: [1800, 1900, 2100, 2000, 2500, 2200],
          borderColor: '#FF8A65',
          backgroundColor: 'rgba(255, 138, 101, 0.1)',
          tension: 0.4,
          fill: true,
        }
      ]
    };
    
    // Datos de presupuesto (ejemplo)
    const budgetStatus = [
      { category: 'comida', spent: 620, limit: 800 },
      { category: 'transporte', spent: 350, limit: 500 },
      { category: 'ocio', spent: 480, limit: 600 },
      { category: 'hogar', spent: 850, limit: 1000 },
    ];
    
    // Meta de ahorro (ejemplo)
    const savingsGoal = { target: 15000, current: 8540.32 };
    
    res.json({
      success: true,
      data: {
        balance,
        income,
        expenses,
        budgetStatus,
        savingsGoal,
        transactions: latestTransactions,
        chartData
      }
    });
  } catch (error) {
    console.error('Error obteniendo datos del dashboard:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
};

module.exports = {
  getDashboardData
};