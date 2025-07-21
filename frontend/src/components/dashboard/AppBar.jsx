import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Badge, } from '@mui/material';
// src/components/dashboard/Chart.jsx
import { Box } from '@mui/material'; // Add this import
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

const DashboardAppBar = ({ open, toggleDrawer, title }) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        transition: (theme) => theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: (theme) => theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <Avatar alt="Usuario" src="/static/images/avatar/1.jpg" sx={{ width: 36, height: 36 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const drawerWidth = 240;

export default DashboardAppBar;