//
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}


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
