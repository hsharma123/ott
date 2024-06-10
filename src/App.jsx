import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Router from './routes/Router';
import { baselightTheme, basedarkTheme } from './theme/DefaultColor';
import { useRoutes } from 'react-router-dom';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const theme = isDarkMode ? basedarkTheme : baselightTheme;
  const routing = useRoutes(Router);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {routing}
    </ThemeProvider>
  );
};

export default App;
