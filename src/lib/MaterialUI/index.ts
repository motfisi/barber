import { createTheme } from '@mui/material/styles';

import '@fontsource/inter';
import buttonConfig from './button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C62828',
    },
    secondary: {
      main: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

theme.components = {
  ...buttonConfig(),
};

export default theme;
