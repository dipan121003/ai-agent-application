// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(90deg, #001f3f 0%, #001f3f 100%)',}}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AI Agent Application
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
