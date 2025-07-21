const db = require('../config/db');

const seedDatabase = async () => {
  try {
    // Crear usuario demo
    await db.runAsync(
      `INSERT INTO users (name, email, password) 
       VALUES ('Usuario Demo', 'demo@stonkstonky.com', 'hashed_password')`
    );
    
    const user = await db.get("SELECT * FROM users WHERE email = 'demo@stonkstonky.com'");
    
    // Crear transacciones demo
    const transactions = [
      { user_id: user.id, amount: 3250.00, description: 'Salario', category: 'ingreso', type: 'income', date: '2023-10-12' },
      { user_id: user.id, amount: 120.50, description: 'Supermercado', category: 'comida', type: 'expense', date: '2023-10-15' },
      { user_id: user.id, amount: 85.00, description: 'Pago de luz', category: 'hogar', type: 'expense', date: '2023-10-14' },
      { user_id: user.id, amount: 65.30, description: 'Cena restaurante', category: 'ocio', type: 'expense', date: '2023-10-10' },
      { user_id: user.id, amount: 50.00, description: 'Gasolina', category: 'transporte', type: 'expense', date: '2023-10-08' },
      { user_id: user.id, amount: 12.99, description: 'Netflix', category: 'entretenimiento', type: 'expense', date: '2023-10-05' },
      { user_id: user.id, amount: 120.00, description: 'Seguro del auto', category: 'transporte', type: 'expense', date: '2023-10-01' },
    ];
    
    for (const tx of transactions) {
      await db.runAsync(
        `INSERT INTO transactions (user_id, amount, description, category, type, date) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [tx.user_id, tx.amount, tx.description, tx.category, tx.type, tx.date]
      );
    }
    
    console.log('Base de datos sembrada con datos demo');
  } catch (error) {
    console.error('Error sembrando base de datos:', error);
  }
};

module.exports = seedDatabase;