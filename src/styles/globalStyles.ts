//
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

* {
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

  body {
  overscroll-behavior : contain;
margin: 0 auto;
}

a {
cursor: pointer;
text-decoration: none;
color:inherit;
}

button {
border: none;
background: none;
cursor: pointer;
font: inherit;

}
`;

export default GlobalStyle;
