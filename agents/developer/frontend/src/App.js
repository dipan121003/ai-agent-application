// src/App.js
import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Box
      sx={{
        // Make the box fill the viewport height
        minHeight: '100vh',
        // Example gradient background
       // background: 'linear-gradient(to bottom, #6a1b9a, #9c27b0)',
        // OR for an image:
        backgroundImage: 'url("https://images.pexels.com/photos/17483906/pexels-photo-17483906/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-concept-of-artificial-general-intelligence-agi-it-was-created-by-domhnall-malone-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header />
      <Home />
    </Box>
  );
}

export default App;
