import styled from 'styled-components';

const Nav = styled.header`
  position: fixed;
  width: 100vw;
  height: 60px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 999;
  background-color: var(--white);

  ul {
    margin-left: 5%;
    display: flex;
    flex: 1;
    gap: 24px;
    font-size: 18px;

    span {
        border: 1px solid var(--text);
    }

    .link {
      font-family: 'Ubunto', sans-serif;
      list-style: none;
      cursor: pointer;
      color: var(--text);
    }

    .active {
      color: var(--blue);

      @media (max-width: 820px) {
        color: var(--white);
      }
    }

    @media (max-width: 640px) {
      .link {
        font-size: 1rem;
      }
    }
  }

  div {
    margin-right: 30px;
    display: flex;
    gap: 16px;
    
    p {
      font-size: 1.2rem;
      font-family: 'Ubunto', sans-serif;
      margin-right: 2rem;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      margin-right: 2rem;
      font-size: 1.2rem;
    }

    @media (max-width: 980px) {
      p {
        display: none;
      }

      button {
        margin-right: 1rem;
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 820px) {
    background: var(--light-blue);
  }
`;

export { Nav }
