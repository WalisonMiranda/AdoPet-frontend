import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #f4f4f4;
    --blue: #31C3E3;
    --light-blue: #58E1FF;
    --text: #3C3C3C;
    --white: #fff;
    --black: #000;
    --gray: #C4C4C4;
  }

  @media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
  }

  @media(max-width: 720px) {
    html {
        font-size: 87.5%;
    }
  }

  body {
    height: 100%;
    width: 100%;
    background: var(--background);
    color: var(--text);
  }

  a {
    text-decoration: none;
  }
`;
