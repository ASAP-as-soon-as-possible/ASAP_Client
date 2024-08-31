import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
/*모바일 아래 드래그로 새로고침 막는 코드 */
 overscroll-behavior : contain;
  ${reset}

* {
  box-sizing: border-box;
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

}

input {
  margin:0;
}
  html, body {

  margin: 0 auto;
  background-color: #141414;
  font-size: 62.5%;
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

select{
  cursor: pointer;
}
`;

export default GlobalStyle;
