import React from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Link, 
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { PersonAdd as PersonAddIcon } from '@mui/icons-material';

function Register() {
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
        <Grid item xs={12} sm={8} md={6} lg={5}>
          <Box sx={{ 
            bgcolor: 'background.paper', 
            borderRadius: 4, 
            boxShadow: 3,
            p: 4,
          }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Box sx={{ 
                width: 60, 
                height: 60, 
                borderRadius: '50%', 
                bgcolor: 'primary.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
              }}>
                <PersonAddIcon sx={{ color: 'primary.main' }} />
              </Box>
              <Typography variant="h5">Crea tu cuenta</Typography>
              <Typography variant="body1" color="textSecondary">
                Empieza a gestionar tus finanzas hoy mismo
              </Typography>
            </Box>
            
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Apellido"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Correo electrónico"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirmar contraseña"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="terms" color="primary" required />}
                    label={
                      <Typography variant="body2">
                        Acepto los <Link href="#">Términos y Condiciones</Link> y la <Link href="#">Política de Privacidad</Link>
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ mt: 2, mb: 2, borderRadius: 2, py: 1.5 }}
                  >
                    Crear Cuenta
                  </Button>
                </Grid>
              </Grid>
              
              <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                ¿Ya tienes una cuenta? <Link href="/login" fontWeight={600}>Inicia Sesión</Link>
              </Typography>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Register;