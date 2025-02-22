// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      // This color or gradient will be used by <CssBaseline />
      // as the default background.
      default: 'linear-gradient(to bottom, #001f3f, #001f3f)',
      // Or: 'url("https://example.com/your-background.jpg")'
    },
    primary: {
        main: '#001f3f',
    },
    // ... other palette overrides
  },
  // ... typography, shape, etc.
});

export default theme;
