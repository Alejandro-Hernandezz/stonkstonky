// src/components/dashboard/RecentTransactions.jsx
import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  Avatar, 
  ListItemSecondaryAction,
  IconButton,
  Divider
} from '@mui/material';
import { 
  ArrowDownward as IncomeIcon, 
  ArrowUpward as ExpenseIcon,
  MoreVert as MoreIcon
} from '@mui/icons-material';

const RecentTransactions = ({ transactions }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      'comida': '🍔',
      'hogar': '🏠',
      'ingreso': '💰',
      'ocio': '🎮',
      'transporte': '🚗',
      'entretenimiento': '🎬'
    };
    return icons[category] || '💳';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'comida': '#FFD54F', // Amarillo
      'hogar': '#4FC3F7',  // Azul
      'ingreso': '#81C784', // Verde
      'ocio': '#BA68C8',   // Púrpura
      'transporte': '#FF8A65', // Naranja
      'entretenimiento': '#9575CD' // Violeta
    };
    return colors[category] || '#4DB6AC';
  };

  return (
    <Box sx={{ 
      p: 3, 
      borderRadius: 3, 
      background: 'linear-gradient(145deg, #1e2a2a 0%, #1a1a1a 100%)',
      border: '1px solid rgba(77, 182, 172, 0.1)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
      height: '100%',
    }}>
      <Typography variant="h6" sx={{ mb: 2, color: '#82E9DE' }}>Transacciones Recientes</Typography>
      <List sx={{ maxHeight: 400, overflow: 'auto' }}>
        {transactions.map((transaction, index) => (
          <React.Fragment key={transaction.id}>
            <ListItem sx={{ py: 1.5 }}>
              <ListItemAvatar>
                <Avatar sx={{ 
                  bgcolor: 'rgba(0,0,0,0.3)',
                  color: getCategoryColor(transaction.category),
                  border: `1px solid ${getCategoryColor(transaction.category)}`
                }}>
                  {getCategoryIcon(transaction.category)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography sx={{ color: '#E0F7FA' }}>
                    {transaction.description}
                  </Typography>
                }
                secondary={
                  <Typography sx={{ color: '#B2DFDB', fontSize: '0.8rem' }}>
                    {new Date(transaction.date).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'short'
                    })}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <Typography 
                  variant="body1" 
                  fontWeight={600}
                  color={transaction.category === 'ingreso' ? '#81C784' : '#FF8A65'}
                >
                  {transaction.category === 'ingreso' ? '+' : '-'}${transaction.amount.toFixed(2)}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
            {index < transactions.length - 1 && (
              <Divider 
                variant="inset" 
                component="li" 
                sx={{ backgroundColor: 'rgba(255,255,255,0.1)' }} 
              />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default RecentTransactions;