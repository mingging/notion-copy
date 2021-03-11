import React from 'react';
import Atoms from "./Pages/Atoms";
import './App.css';
import { Route } from 'react-router-dom';
import AppRoute from "./routes";
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'emotion-theming'
import theme from "./style/theme";


function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
              <AppRoute />
          </ThemeProvider>
      </MuiThemeProvider>
  );
}

export default App;
