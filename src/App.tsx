import styled from 'styled-components/macro';

import GlobalStyle from './styles/globalStyles';
import Test from 'pages/Test';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <Test />
        </MainContainer>
      </ThemeProvider>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: calc(50vh - 100px) 0px;
  width: 100vw;
  height: 200px;
`;
export default App;
