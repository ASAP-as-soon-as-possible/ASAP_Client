import { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';
import ToastContainerBox from 'utils/toast/ToastContainer';

import Router from './Router';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

import './App.css';
/**카카오톡 인앱브라우저 종료후 크롬 및 사파리로 오픈하는 utils file */
import './utils/changeBrowser';
import 'react-toastify/dist/ReactToastify.css';

const MobileWrapper = styled.div`
  display: flex;

  position: relative;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.grey10};
  padding-right: 2rem;
  padding-left: 2rem;

  max-width: var(--app-max-width, 37.5rem);
  min-height: calc(var(--vh, 1vh) * 100);
`;

function App() {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const maxWidth = Math.min(37.5, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}rem`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MobileWrapper>
          <Router />
          <ToastContainerBox />
        </MobileWrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
