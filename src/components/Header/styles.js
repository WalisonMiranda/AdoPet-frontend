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
      
    }
    .active {
      color: var(--blue);

      @media (max-width: 640px) {
        color: var(--white);
      }
    }
    
    .inactive {
      color: var(--text);
    }

  }

  div {
    margin-right: 30px;
    display: flex;
    gap: 16px;

    span {
      height: 30px;
      width: 30px;
      color: red;
      border: 1px solid var(--text);
      border-radius: 50%;
      cursor: pointer;

    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
    
  }

  @media (max-width: 640px) {
    background: var(--light-blue);
  }
`;

export { Nav }
