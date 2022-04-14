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
    --success: #80ed99;
    --warning: #F2AF29;
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
    position: relative;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: var(--success);
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: var(--warning);
  }
`;
