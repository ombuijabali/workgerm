import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png';
import './Header.css';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Work in Germ" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <div className="header-left">
            <img src={logo} alt="Germ Waves" className="logo" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Germ Waves
            </Typography>
          </div>
          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Work in Germ</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default Header;
