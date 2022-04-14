import styled from 'styled-components';

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-blue);

  img {
    min-width: 300px;
    width: 100%;
    max-width: 807px;
  }

  div {
    margin-top: 40px;

    h2 {
      text-align: center;
      font-size: 64px;
      font-family: 'Ubuntu', sans-serif;
    }
    
    h4 {
      padding-top: 12px;
      font-size: 24px;
      border-top: 2px solid var(--blue);
      font-family: 'Roboto', sans-serif;
    }
  }

  @media (max-width: 480px) {
    div {
      h2 {
        font-size: 48px;
      }

      h4 {
        font-size: 18px;
      }
    }
  }
`;
