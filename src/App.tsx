import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Router from './Router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // background: {
    //   default: '#1A1B1B',
    // },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

