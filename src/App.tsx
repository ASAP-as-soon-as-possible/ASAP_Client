import Router from './Router';
import GlobalStyle from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

//test
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router/>
      </ThemeProvider>
    </>
  );
}

export default App;
