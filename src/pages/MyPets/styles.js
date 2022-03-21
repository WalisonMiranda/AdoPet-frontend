import styled from 'styled-components';

const Container = styled.main`
  position: relative;
  margin-top: 60px;
  display: flex;

  font-family: 'Roboto', sans-serif;
  background-color: var(--background);
  
  > div {
    height: 500px;
    width: 320px;
    border: 1px solid red;
    margin: auto;
  }

  @media (max-width: 640px) {
    width: auto;
    flex-direction: column;
    align-items: center;
  }
`;

Container.Aside = styled.aside`
  position: fixed;
  height: 100%;
  width: 320px;
  display: flex;
  flex-direction: column;
  background-color: var(--light-blue);

  > img {
    margin: 1rem auto 0;
  }

  div {
    padding: 1rem;
    text-align: center;

    button {
      margin: auto;
      padding: 0.5rem 1rem;
      cursor: pointer;
      font-size: 1rem;
      border: none;
      outline: none;
      background: var(--background);
      border-radius: 4px;
      transition: ease-in-out .3s;

      :hover {
        background: var(--blue);
      }

      @media (max-width: 640px) {
        background: var(--blue);

        :hover {
          background: var(--background);
          border: 1px solid var(--blue);
        }
      }
    }

    @media (max-width: 640px) {
      display: flex;
      flex-direction: column;

      ::after {
        content: '';
        width: 100%;
        margin: 2rem auto 0;
        border-bottom: 1px solid var(--blue);
      }
    }
  }

  @media (max-width: 640px) {
    position: relative;
    height: 300px;
    background-color: var(--background);
  }
`;


export { Container }
