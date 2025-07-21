// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid,
  LinearProgress,
  Alert,
  IconButton,
  Avatar
} from '@mui/material';
import {
  AccountBalance,
  TrendingUp,
  TrendingDown,
  Savings,
  Close,
  Notifications,
  Settings
} from '@mui/icons-material';
import DashboardLayout from '../components/dashboard/Layout';
import Chart from '../components/dashboard/Chart';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import QuickAdd from '../components/dashboard/QuickAdd';
import SavingsProgress from '../components/dashboard/SavingsProgress';

function Dashboard() {
  const [showDemoAlert, setShowDemoAlert] = useState(true);
  const [financialData] = useState({
    balance: 8540.32,
    income: 6250.00,
    expenses: 3120.75,
    budgetStatus: {
      comida: { spent: 620, limit: 800 },
      transporte: { spent: 350, limit: 500 },
      ocio: { spent: 480, limit: 600 },
      hogar: { spent: 850, limit: 1000 },
    },
    savingsGoal: { target: 15000, current: 8540.32 },
    transactions: [
      { id: 1, date: '2023-10-15', description: 'Supermercado', amount: 120.50, category: 'comida' },
      { id: 2, date: '2023-10-14', description: 'Pago de luz', amount: 85.00, category: 'hogar' },
      { id: 3, date: '2023-10-12', description: 'Salario', amount: 3250.00, category: 'ingreso' },
      { id: 4, date: '2023-10-10', description: 'Cena restaurante', amount: 65.30, category: 'ocio' },
      { id: 5, date: '2023-10-08', description: 'Gasolina', amount: 50.00, category: 'transporte' },
      { id: 6, date: '2023-10-05', description: 'Netflix', amount: 12.99, category: 'ocio' },
      { id: 7, date: '2023-10-01', description: 'Seguro del auto', amount: 120.00, category: 'transporte' },
    ],
    chartData: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [
        {
          label: 'Ingresos',
          data: [4200, 3000, 6000, 4800, 5800, 6250],
          borderColor: '#4DB6AC',
          backgroundColor: 'rgba(77, 182, 172, 0.1)',
          tension: 0.4,
          fill: true,
        },
        {
          label: 'Gastos',
          data: [2800, 3100, 2500, 3800, 2200, 3120],
          borderColor: '#FF8A65',
          backgroundColor: 'rgba(255, 138, 101, 0.1)',
          tension: 0.4,
          fill: true,
        }
      ]
    }
  });

  // Calcular el estado de los presupuestos
  const budgetItems = Object.entries(financialData.budgetStatus).map(([category, data]) => {
    const progress = (data.spent / data.limit) * 100;
    const statusColor = progress > 90 ? 'error' : progress > 75 ? 'warning' : 'primary';
    
    return {
      category,
      spent: data.spent,
      limit: data.limit,
      progress,
      statusColor
    };
  });

  return (
    <DashboardLayout title="Dashboard">
      {/* Alerta de demo */}
      {showDemoAlert && (
        <Alert 
          severity="info"
          icon={<Notifications />}
          sx={{ 
            mb: 3,
            background: 'linear-gradient(90deg, #1a2a2a 0%, #121212 100%)',
            border: '1px solid rgba(77, 182, 172, 0.3)',
            color: '#B2DFDB'
          }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setShowDemoAlert(false)}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          ¡Estás viendo una versión de demostración con datos de ejemplo! 
          Regístrate para comenzar a usar tu propia información financiera.
        </Alert>
      )}
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
        gap: 3,
        mt: 2,
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
            gap: 3
          }}>
            <Box sx={{ 
              p: 3, 
              borderRadius: 3, 
              background: 'linear-gradient(135deg, #1a3a3a 0%, #1a2a2a 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(77, 182, 172, 0.3)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
            }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2">Balance Total</Typography>
                <Typography variant="h4" fontWeight={700} sx={{ color: '#82E9DE' }}>
                  ${financialData.balance.toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ 
                width: 50, 
                height: 50, 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #4DB6AC 0%, #00867D 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <AccountBalance sx={{ color: 'white' }} />
              </Box>
            </Box>
            
            <Box sx={{ 
              p: 3, 
              borderRadius: 3, 
              background: 'linear-gradient(135deg, #1a3a2a 0%, #1a2a2a 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(129, 199, 132, 0.3)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
            }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2">Ingresos</Typography>
                <Typography variant="h4" fontWeight={700} sx={{ color: '#B2FEB7' }}>
                  ${financialData.income.toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ 
                width: 50, 
                height: 50, 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #81C784 0%, #4CAF50 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <TrendingUp sx={{ color: 'white' }} />
              </Box>
            </Box>
            
            <Box sx={{ 
              p: 3, 
              borderRadius: 3, 
              background: 'linear-gradient(135deg, #3a1a2a 0%, #2a1a1a 100%)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(255, 138, 101, 0.3)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.4)'
            }}>
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2">Gastos</Typography>
                <Typography variant="h4" fontWeight={700} sx={{ color: '#FFAB91' }}>
                  ${financialData.expenses.toFixed(2)}
                </Typography>
              </Box>
              <Box sx={{ 
                width: 50, 
                height: 50, 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #FF8A65 0%, #F4511E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <TrendingDown sx={{ color: 'white' }} />
              </Box>
            </Box>
          </Box>
          
          <Box sx={{ 
            p: 3, 
            borderRadius: 3, 
            background: 'linear-gradient(145deg, #1e2a2a 0%, #1a1a1a 100%)',
            border: '1px solid rgba(77, 182, 172, 0.1)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
          }}>
            <Typography variant="h6" sx={{ mb: 3, color: '#82E9DE' }}>Resumen Financiero</Typography>
            <Chart data={financialData.chartData} />
          </Box>
          
          <Box sx={{ 
            p: 3, 
            borderRadius: 3, 
            background: 'linear-gradient(145deg, #1e2a2a 0%, #1a1a1a 100%)',
            border: '1px solid rgba(77, 182, 172, 0.1)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
          }}>
            <Typography variant="h6" sx={{ mb: 3, color: '#82E9DE' }}>Estado de Presupuestos</Typography>
            <Grid container spacing={2}>
              {budgetItems.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" fontWeight={500} textTransform="capitalize" sx={{ color: '#B2DFDB' }}>
                        {item.category}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#B2DFDB' }}>
                        ${item.spent} / ${item.limit}
                      </Typography>
                    </Box>
                    <LinearProgress 
                      variant="determinate" 
                      value={item.progress} 
                      color={item.statusColor}
                      sx={{ 
                        height: 10, 
                        borderRadius: 5,
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <QuickAdd />
          <SavingsProgress goal={financialData.savingsGoal} />
          <RecentTransactions transactions={financialData.transactions} />
        </Box>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard;