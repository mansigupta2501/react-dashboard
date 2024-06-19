import React from 'react';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function DashboardLayout({ children }) {
    const drawerWidth = 180;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <Sidebar drawerWidth={drawerWidth}/>
      <Box component="main" sx={{ flexGrow: 1, 
      p: 3,
        width: { sm: `calc(100% - ${drawerWidth}px)` }
      }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
