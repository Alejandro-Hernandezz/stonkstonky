import React from 'react';
import { Box, Container, Typography, Grid, Avatar, useTheme } from '@mui/material';
import FormatQuote from '@mui/icons-material/FormatQuote';


function Testimonials() {
  const theme = useTheme();
  
  const testimonials = [
    {
      name: 'Alejandro Hernández',
      role: 'Emprendedor',
      content: 'StonkStonky ha transformado completamente cómo gestiono mis finanzas. Las alertas predictivas me han ayudado a evitar gastos excesivos y a ahorrar un 30% más que el año pasado.',
      avatar: '/static/images/avatar/1.jpg'
    },
    {
      name: 'María Rodríguez',
      role: 'Freelancer',
      content: 'Como trabajadora independiente, necesitaba una herramienta que se adaptara a mis ingresos variables. Las metas flexibles y los análisis de flujo de caja son exactamente lo que necesitaba.',
      avatar: '/static/images/avatar/2.jpg'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Estudiante',
      content: 'Por primera vez en mi vida, estoy controlando mis gastos. La interfaz es tan intuitiva que incluso alguien como yo, que no sabe nada de finanzas, puede entender sus reportes.',
      avatar: '/static/images/avatar/3.jpg'
    }
  ];
  
  return (
    <Box id="testimonials" sx={{ py: 15, background: `linear-gradient(to bottom, ${theme.palette.background.default}, #ffffff)` }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 2 }}>
          Lo que dicen nuestros usuarios
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" sx={{ mb: 10, maxWidth: 700, mx: 'auto' }}>
          Miles de usuarios ya están transformando su relación con el dinero
        </Typography>
        
        <Grid container spacing={6}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ 
                p: 4, 
                height: '100%',
                borderRadius: 4,
                border: '1px solid',
                borderColor: theme.palette.divider,
                position: 'relative',
                '&:before': {
                  content: '"\\201C"',
                  position: 'absolute',
                  top: -30,
                  left: 20,
                  fontSize: 100,
                  color: theme.palette.primary.light,
                  fontFamily: 'Georgia, serif',
                  lineHeight: 1,
                }
              }}>
                <FormatQuote sx={{ 
                  position: 'absolute', 
                  top: 20, 
                  right: 20, 
                  color: theme.palette.primary.light,
                  fontSize: 40,
                  opacity: 0.3
                }} />
                
                <Typography sx={{ mb: 3, fontStyle: 'italic' }}>
                  {testimonial.content}
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 4 }}>
                  <Avatar alt={testimonial.name} src={testimonial.avatar} sx={{ width: 56, height: 56 }} />
                  <Box sx={{ ml: 2 }}>
                    <Typography fontWeight={600}>{testimonial.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{testimonial.role}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Testimonials;