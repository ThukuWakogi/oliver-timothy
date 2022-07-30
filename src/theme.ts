import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  typography: { fontFamily: ['"JostVariable"', '"Jost"', '"Roboto"', '"Arial"', 'sans-serif'].join(',') },
  palette: { mode: 'dark' },
});

export default theme;
