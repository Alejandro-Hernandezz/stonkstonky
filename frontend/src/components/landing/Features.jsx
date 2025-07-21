import React from 'react';
import { Box, Container, Grid, Typography, Paper, useTheme } from '@mui/material';
import { 
  Analytics, 
  Savings, 
  NotificationsActive, 
  BarChart, 
  Security, 
  Devices 
} from '@mui/icons-material';

function Features() {
  const theme = useTheme();
  
  const features = [
    {
      icon: <Analytics fontSize="large" />,
      title: 'Análisis Predictivo',
      description: 'Obtén proyecciones de tus finanzas basadas en tus patrones de gastos e ingresos históricos.'
    },
    {
      icon: <Savings fontSize="large" />,
      title: 'Metas de Ahorro',
      description: 'Establece objetivos financieros y sigue tu progreso con visualizaciones intuitivas.'
    },
    {
      icon: <NotificationsActive fontSize="large" />,
      title: 'Alertas Inteligentes',
      description: 'Recibe notificaciones cuando estés excediendo tus presupuestos o tengas pagos pendientes.'
    },
    {
      icon: <BarChart fontSize="large" />,
      title: 'Reportes Detallados',
      description: 'Genera y descarga reportes personalizados en PDF o Excel para un análisis profundo.'
    },
    {
      icon: <Security fontSize="large" />,
      title: 'Seguridad Bancaria',
      description: 'Tus datos están protegidos con cifrado de grado militar y autenticación de dos factores.'
    },
    {
      icon: <Devices fontSize="large" />,
      title: 'Acceso Multiplataforma',
      description: 'Usa StonkStonky en cualquier dispositivo: web, iOS y Android.'
    }
  ];
  
  return (
    <Box id="features" sx={{ py: 15, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>
          Características Potentes
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" sx={{ mb: 10, maxWidth: 700, mx: 'auto' }}>
          Todo lo que necesitas para tomar el control total de tus finanzas personales
        </Typography>
        
        <Grid container spacing={6}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper sx={{ 
                p: 4, 
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[6],
                }
              }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  bgcolor: theme.palette.primary.light,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 3,
                  color: theme.palette.primary.main,
                }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {feature.title}
                </Typography>
                <Typography color="textSecondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;