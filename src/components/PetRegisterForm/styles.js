import styled from "styled-components";

export const Container = styled.aside`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 2;

  div {
    position: absolute;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: -1;
  }

  .closeIcon {
    position: absolute;
    right: 2%;
    top: 1%;
    font-size: 2rem;
    cursor: pointer;

    :hover {
      color: var(--blue);
    }
  }

  h2 {
    text-align: center;
    padding: 1rem 0;
    margin-top: 40px;
  }

  form {
    width: 100%;
    max-width: 500px;
    margin: 20px auto 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    background: var(--background);
    border: 1px solid var(--blue);
    border-radius: 8px;

    fieldset, button {
      width: 100%;
      max-width: 80%;
      margin: 1rem auto;
    }
    
    fieldset {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border: none;

      input, select {
        height: 30px;
        font-size: 1.2rem;
        text-indent: 8px;
        outline: 1px solid var(--light-blue);
        border: none;
        border-radius: 4px;
      }

      .file {
        font-size: 1rem;
        outline: none;
        border-bottom: 1px solid var(--light-blue);
        border-radius: 0;
      }
    }

    button {
      height: 30px;
      font-size: 1.2rem;
      border: 1px solid var(--light-blue);
      border-radius: 4px;
      cursor: pointer;
      transition: ease-in-out .3s;

      :hover {
        background: var(--blue);
      }
    }
  }

  /* @media (max-width: 640px) {
    position: relative;
    height: 300px;
    background-color: var(--background);
  } */
`;
