import styled from 'styled-components';

const Container = styled.main`
  position: relative;
  height: 100%;
  margin-top: 60px;
  display: flex;
  font-family: 'Roboto', sans-serif;
  background-color: var(--background);

  @media (max-width: 820px) {
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

  img {
    margin: 1rem auto 0;

    @media (max-width: 640px) {
      height: 100px;
      width: auto;
    }
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

      @media (max-width: 820px) {
        background: var(--blue);

        :hover {
          background: var(--background);
          box-shadow: 0 0 1px 1px var(--blue);
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

  @media (max-width: 820px) {
    position: relative;
    height: auto;
    background-color: var(--background);
  }
`;

export { Container }
