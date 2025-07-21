import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Button, Typography, IconButton, Menu, MenuItem, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed" 
      color="inherit" 
      elevation={trigger ? 4 : 0}
      sx={{ 
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        backgroundColor: trigger ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography 
          variant="h4" 
          component={Link} 
          to="/"
          sx={{ 
            fontWeight: 800, 
            textDecoration: 'none', 
            color: 'primary.main',
            letterSpacing: '-1px',
          }}
        >
          StonkStonky
        </Typography>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} to="/" color="inherit">Inicio</Button>
          <Button component={Link} to="/#features" color="inherit">Características</Button>
          <Button component={Link} to="/#testimonials" color="inherit">Testimonios</Button>
          <Button component={Link} to="/login" color="inherit">Iniciar Sesión</Button>
          <Button 
            component={Link} 
            to="/register" 
            variant="contained" 
            color="primary"
            sx={{ borderRadius: 10, px: 3 }}
          >
            Registrarse
          </Button>
        </Box>
        
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>Inicio</MenuItem>
            <MenuItem component={Link} to="/#features" onClick={handleClose}>Características</MenuItem>
            <MenuItem component={Link} to="/#testimonials" onClick={handleClose}>Testimonios</MenuItem>
            <MenuItem component={Link} to="/login" onClick={handleClose}>Iniciar Sesión</MenuItem>
            <MenuItem component={Link} to="/register" onClick={handleClose}>Registrarse</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;