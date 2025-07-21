import React, { useRef, useEffect } from 'react';
import { Box, Container, Grid, Typography, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowForward, Dashboard } from '@mui/icons-material';

function Hero() {
  const theme = useTheme();
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Limpiar canvas
    ctx.clearRect(0, 0, width, height);
    
    // Fondo oscuro con gradiente
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#0a1a1a');
    gradient.addColorStop(1, '#121212');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // Dibujar líneas de gráficos financieros
    ctx.strokeStyle = 'rgba(77, 182, 172, 0.15)';
    ctx.lineWidth = 1;
    
    // Patrón de líneas de cuadrícula
    for (let x = 0; x < width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    
    for (let y = 0; y < height; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    
    // Dibujar múltiples líneas de tendencia financiera
    const drawFinancialLine = (offset, amplitude, color, widthMultiplier = 1) => {
      ctx.beginPath();
      ctx.moveTo(0, height / 2 + offset);
      
      for (let x = 0; x < width; x += 5) {
        const y = height / 2 + offset + amplitude * Math.sin(x / 50) * Math.sin(x / 200);
        ctx.lineTo(x, y);
      }
      
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5 * widthMultiplier;
      ctx.stroke();
    };
    
    // Líneas principales (más visibles)
    drawFinancialLine(50, 80, 'rgba(77, 182, 172, 0.4)', 1.5);
    drawFinancialLine(-30, 60, 'rgba(129, 199, 132, 0.4)', 1.5);
    drawFinancialLine(10, 40, 'rgba(255, 138, 101, 0.4)', 1.2);
    
    // Líneas secundarias (más sutiles)
    drawFinancialLine(-80, 50, 'rgba(77, 182, 172, 0.2)');
    drawFinancialLine(70, 45, 'rgba(129, 199, 132, 0.2)');
    drawFinancialLine(-50, 35, 'rgba(255, 138, 101, 0.2)');
    
    // Puntos de datos (simulando puntos clave en gráficos)
    const drawDataPoints = () => {
      const points = [
        { x: 100, y: 150, size: 4 },
        { x: 250, y: 300, size: 6 },
        { x: 400, y: 200, size: 5 },
        { x: 550, y: 350, size: 7 },
        { x: 700, y: 250, size: 5 },
        { x: 850, y: 400, size: 6 },
      ];
      
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(77, 182, 172, 0.5)';
        ctx.fill();
        
        // Efecto de resplandor
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size + 5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(77, 182, 172, 0.2)';
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    };
    
    drawDataPoints();
    
    // Textura sutil para dar profundidad
    const addTexture = () => {
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        // Añadir ruido sutil
        const noise = Math.random() * 10;
        data[i] = Math.max(0, data[i] - noise);     // R
        data[i + 1] = Math.max(0, data[i + 1] - noise); // G
        data[i + 2] = Math.max(0, data[i + 2] - noise); // B
      }
      
      ctx.putImageData(imageData, 0, 0);
    };
    
    addTexture();
    
  }, []);
  
  return (
    <Box 
      sx={{ 
        pt: 20,
        pb: 15,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Canvas con gráficos financieros como fondo */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
        width={window.innerWidth}
        height={window.innerHeight}
      />
      
      {/* Capa de superposición para oscurecer */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at center, transparent, #121212 80%)',
        zIndex: 1,
      }} />
      
      {/* Capa con elementos de gráficos adicionales */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 10% 20%, rgba(77, 182, 172, 0.1) 0%, transparent 40%),
          radial-gradient(circle at 90% 80%, rgba(129, 199, 132, 0.1) 0%, transparent 40%)
        `,
        zIndex: 2,
      }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                mb: 3, 
                color: theme.palette.primary.light,
                textShadow: '0 0 10px rgba(77, 182, 172, 0.5)'
              }}
            >
              Controla tus finanzas con inteligencia
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4, 
                fontWeight: 400, 
                color: theme.palette.text.secondary,
                backdropFilter: 'blur(2px)',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: 'rgba(30, 30, 30, 0.4)'
              }}
            >
              StonkStonky te ayuda a gestionar tus ingresos, gastos y ahorros con análisis predictivo y recomendaciones personalizadas.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
              <Button 
                component={Link} 
                to="/register" 
                variant="contained" 
                color="primary"
                size="large"
                endIcon={<ArrowForward />}
                sx={{ 
                  borderRadius: 10,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  boxShadow: '0 0 15px rgba(77, 182, 172, 0.5)',
                }}
              >
                Comenzar gratis
              </Button>
              <Button 
                component={Link} 
                to="/dashboard" 
                variant="contained" 
                color="secondary"
                size="large"
                startIcon={<Dashboard />}
                sx={{ 
                  borderRadius: 10,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  boxShadow: '0 0 15px rgba(129, 199, 132, 0.4)',
                }}
              >
                Ver Demo
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 3 }}>
            <Box sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 0 30px rgba(77, 182, 172, 0.3)',
              transform: 'rotate3d(0.5, 1, 0, 15deg)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'rotate3d(0.5, 1, 0, 18deg)',
              },
              position: 'relative',
              backgroundColor: 'rgba(30, 30, 30, 0.5)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(77, 182, 172, 0.3)'
            }}>
              <Box sx={{
                width: '100%',
                height: 0,
                paddingBottom: '60%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* Mini dashboard de demostración */}
                <Box sx={{
                  position: 'absolute',
                  width: '90%',
                  height: '90%',
                  borderRadius: 3,
                  background: 'linear-gradient(145deg, #1e2a2a 0%, #1a1a1a 100%)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <Box sx={{ 
                    height: 40, 
                    background: 'linear-gradient(90deg, #4DB6AC 0%, #00867D 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                  }}>
                    <Box sx={{ 
                      display: 'flex', 
                      gap: 1,
                      '& > div': {
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                      }
                    }}>
                      <Box sx={{ background: '#ff5f56' }} />
                      <Box sx={{ background: '#ffbd2e' }} />
                      <Box sx={{ background: '#27c93f' }} />
                    </Box>
                  </Box>
                  <Box sx={{ 
                    flex: 1, 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 1,
                    p: 2,
                  }}>
                    {[...Array(9)].map((_, i) => (
                      <Box 
                        key={i} 
                        sx={{ 
                          background: i % 3 === 0 
                            ? 'rgba(77, 182, 172, 0.2)' 
                            : i % 3 === 1 
                              ? 'rgba(129, 199, 132, 0.2)' 
                              : 'rgba(255,255,255,0.05)',
                          borderRadius: 2,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          overflow: 'hidden',
                          position: 'relative',
                        }}
                      >
                        {/* Mini gráficos dentro de cada celda */}
                        <Box sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: `${30 + Math.random() * 70}%`,
                          background: i % 3 === 0 
                            ? 'linear-gradient(to top, rgba(77, 182, 172, 0.6), transparent)' 
                            : i % 3 === 1 
                              ? 'linear-gradient(to top, rgba(129, 199, 132, 0.6), transparent)' 
                              : 'linear-gradient(to top, rgba(255, 138, 101, 0.6), transparent)',
                        }} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
            
            {/* Elementos flotantes adicionales */}
            <Box sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(rgba(77, 182, 172, 0.3), transparent 70%)',
              zIndex: -1,
              animation: 'float 6s ease-in-out infinite'
            }} />
            
            <Box sx={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'radial-gradient(rgba(129, 199, 132, 0.3), transparent 70%)',
              zIndex: -1,
              animation: 'float 7s ease-in-out infinite',
              animationDelay: '1s'
            }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Hero;