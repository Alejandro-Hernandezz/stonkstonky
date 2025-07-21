import React from 'react';
import { Box, Container, Grid, Typography, Link, Divider, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f7fa' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 800, color: 'primary.main' }}>
              StonkStonky
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3, maxWidth: 300 }}>
              La herramienta financiera todo en uno que necesitas para tomar el control de tu dinero.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="primary">
                <Facebook />
              </IconButton>
              <IconButton color="primary">
                <Twitter />
              </IconButton>
              <IconButton color="primary">
                <Instagram />
              </IconButton>
              <IconButton color="primary">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3 }}>Producto</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="textSecondary" underline="hover">Características</Link>
              <Link href="#" color="textSecondary" underline="hover">Precios</Link>
              <Link href="#" color="textSecondary" underline="hover">Integraciones</Link>
              <Link href="#" color="textSecondary" underline="hover">Actualizaciones</Link>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3 }}>Recursos</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="textSecondary" underline="hover">Blog</Link>
              <Link href="#" color="textSecondary" underline="hover">Tutoriales</Link>
              <Link href="#" color="textSecondary" underline="hover">Soporte</Link>
              <Link href="#" color="textSecondary" underline="hover">Comunidad</Link>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3 }}>Compañía</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="textSecondary" underline="hover">Sobre nosotros</Link>
              <Link href="#" color="textSecondary" underline="hover">Equipo</Link>
              <Link href="#" color="textSecondary" underline="hover">Carreras</Link>
              <Link href="#" color="textSecondary" underline="hover">Contacto</Link>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ mb: 3 }}>Legal</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="textSecondary" underline="hover">Privacidad</Link>
              <Link href="#" color="textSecondary" underline="hover">Términos</Link>
              <Link href="#" color="textSecondary" underline="hover">Seguridad</Link>
              <Link href="#" color="textSecondary" underline="hover">Cookies</Link>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 6 }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between' }}>
          <Typography variant="body2" color="textSecondary">
            © 2023 StonkStonky. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, sm: 0 } }}>
            <Link href="#" color="textSecondary" variant="body2" underline="hover">Términos</Link>
            <Link href="#" color="textSecondary" variant="body2" underline="hover">Privacidad</Link>
            <Link href="#" color="textSecondary" variant="body2" underline="hover">Cookies</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;