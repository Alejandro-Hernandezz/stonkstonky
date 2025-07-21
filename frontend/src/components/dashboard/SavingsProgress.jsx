import React from 'react';
import { 
  Box, 
  Typography, 
  LinearProgress, 
  Button 
} from '@mui/material';
import { Savings as SavingsIcon } from '@mui/icons-material';

const SavingsProgress = ({ goal }) => {
  const progress = (goal.current / goal.target) * 100;
  
  return (
    <Box sx={{ 
      p: 3, 
      borderRadius: 3, 
      bgcolor: 'background.paper',
      height: '100%',
    }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Meta de Ahorro</Typography>
      
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        mb: 2,
        bgcolor: 'primary.light',
        p: 2,
        borderRadius: 2,
      }}>
        <SavingsIcon sx={{ fontSize: 40, mr: 2, color: 'primary.dark' }} />
        <Box>
          <Typography variant="body2" color="textSecondary">Objetivo</Typography>
          <Typography variant="h5" fontWeight={700}>${goal.target.toLocaleString()}</Typography>
        </Box>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Progreso</Typography>
          <Typography variant="body2" fontWeight={600}>{Math.round(progress)}%</Typography>
        </Box>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: 10, 
            borderRadius: 5,
            backgroundColor: 'action.hover',
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
            }
          }}
        />
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        mb: 2,
      }}>
        <Typography variant="body2">Ahorrado:</Typography>
        <Typography variant="body2" fontWeight={600}>
          ${goal.current.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
        </Typography>
      </Box>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        mb: 3,
      }}>
        <Typography variant="body2">Faltante:</Typography>
        <Typography variant="body2" fontWeight={600}>
          ${(goal.target - goal.current).toLocaleString('es-ES', { minimumFractionDigits: 2 })}
        </Typography>
      </Box>
      
      <Button 
        fullWidth 
        variant="outlined" 
        color="primary"
        sx={{ borderRadius: 2 }}
      >
        Agregar a Ahorros
      </Button>
    </Box>
  );
};

export default SavingsProgress;