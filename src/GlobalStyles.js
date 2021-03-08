import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
    width:100%;
  }

  html { font-size: 100%; }

  *, button, input {
    border:0;
    outline:0;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    position:relative;
    font-size: calc(1em + 1vw);
  }

  ul {
      list-style: none;
      padding: 0;
      margin: 0;
  }

  a {
    text-decoration:none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
