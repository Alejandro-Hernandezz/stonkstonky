import React from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Link, 
  Divider,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import { 
  Lock as LockIcon,
  Google as GoogleIcon,
  Facebook as FacebookIcon,
} from '@mui/icons-material';

function Login() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #f5f7fa, #e4e8f0)',
      p: 2,
    }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box sx={{ 
            bgcolor: 'background.paper', 
            borderRadius: 4, 
            boxShadow: 3,
            p: 4,
            textAlign: 'center',
          }}>
            <Box sx={{ 
              width: 60, 
              height: 60, 
              borderRadius: '50%', 
              bgcolor: 'primary.light',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
            }}>
              <LockIcon sx={{ color: 'primary.main' }} />
            </Box>
            
            <Typography variant="h5" sx={{ mb: 1 }}>Bienvenido de vuelta</Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
              Inicia sesión para continuar a tu dashboard
            </Typography>
            
            <form>
              <TextField
                fullWidth
                label="Correo electrónico"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Contraseña"
                type="password"
                variant="outlined"
                margin="normal"
                required
              />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recuérdame"
                />
                <Link href="#" variant="body2">¿Olvidaste tu contraseña?</Link>
              </Box>
              
              <Button
                fullWidth
                variant="contained"
                color="primary"
                size="large"
                sx={{ mt: 2, mb: 3, borderRadius: 2, py: 1.5 }}
              >
                Iniciar Sesión
              </Button>
              
              <Divider sx={{ my: 3 }}>o continúa con</Divider>
              
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon />}
                  sx={{ borderRadius: 2 }}
                >
                  Google
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  startIcon={<FacebookIcon />}
                  sx={{ borderRadius: 2 }}
                >
                  Facebook
                </Button>
              </Box>
              
              <Typography variant="body2">
                ¿No tienes cuenta? <Link href="/register" fontWeight={600}>Regístrate</Link>
              </Typography>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Login;