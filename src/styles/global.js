import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }

  body {
    background-color: ${props => props.theme.background};
  }
`;