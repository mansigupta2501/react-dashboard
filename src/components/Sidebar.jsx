import React from "react";
import {
  Box,
  ListItemButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useLocation } from "react-router-dom";
import './Sidebar.css'

export default function Sidebar({ drawerWidth }) {
  const pathname = useLocation().pathname;
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar>
          <Typography variant="h6">Dashboard</Typography>
       
      </Toolbar>
      <Divider />
      <List sx={{paddingTop: '0px'}}>
      <Link
          to="/dashboard"
        >
        <ListItem 
        className={`${pathname === "/dashboard" || pathname === "/" ? 'active' : 'inactive'}`}
        >
          <ListItemIcon>
            <DashboardIcon  className={`${pathname === "/dashboard" || pathname === "/" ? 'active' : 'inactive'}`}/>
          </ListItemIcon>
          
          <ListItemText primary="Dashboard" />
        </ListItem>
          </Link>
          <Link
            to="/cgwa"
          >
        <ListItem className={`${
              pathname === "/cgwa" ? 'active' : 'inactive'
            }`}>
          <ListItemIcon>
            <BarChartIcon className={`${
              pathname === "/cgwa" ? 'active' : 'inactive'
            }`}/>
          </ListItemIcon>
          
            <ListItemText primary="CGWA" />
        </ListItem>
          </Link>
      </List>
    </Drawer>
   
  );
}
