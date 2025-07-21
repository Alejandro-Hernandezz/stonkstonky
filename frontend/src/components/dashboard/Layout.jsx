import React, { useState } from 'react';
import { Box } from '@mui/material';
import AppBar from './AppBar';
import Drawer from './Drawer';

const Layout = ({ children, title }) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar open={open} toggleDrawer={toggleDrawer} title={title} />
      <Drawer open={open} toggleDrawer={toggleDrawer} />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          transition: (theme) => theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: open ? 0 : `-${drawerWidth}px`,
          width: `calc(100% - ${open ? drawerWidth : 0}px)`,
        }}
      >
        <Box sx={{ mt: 8 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

const drawerWidth = 240;

export default Layout;