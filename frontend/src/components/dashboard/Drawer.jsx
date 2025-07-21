import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Toolbar, 
  Box 
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  AccountBalance as AccountBalanceIcon,
  Receipt as ReceiptIcon,
  BarChart as BarChartIcon,
  Savings as SavingsIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

const DashboardDrawer = ({ open, toggleDrawer }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Cuentas', icon: <AccountBalanceIcon /> },
    { text: 'Transacciones', icon: <ReceiptIcon /> },
    { text: 'Reportes', icon: <BarChartIcon /> },
    { text: 'Metas', icon: <SavingsIcon /> },
    { text: 'Alertas', icon: <NotificationsIcon /> },
  ];
  
  const settingsItems = [
    { text: 'Configuración', icon: <SettingsIcon /> },
    { text: 'Cerrar Sesión', icon: <LogoutIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {settingsItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

const drawerWidth = 240;

export default DashboardDrawer;