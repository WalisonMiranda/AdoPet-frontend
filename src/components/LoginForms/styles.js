import styled from "styled-components";

const Content = styled.div`
  height: 100%;
  width: auto;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;

  .form-login {
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;


    p {
      font-size: 1.5rem;
      font-weight: 500;
    }

    label {
      margin-top: 16px;
    }

    input {
      margin-top: 4px;
      height: 30px;
      border: 1px solid var(--blue);
      border-radius: 4px;
      text-indent: 8px;
      font-size: 1rem;
    }

    button {
      width: 100px;
      height: 30px;
      margin: 8px auto 0;
      border: 1px solid var(--blue);
      border-radius: 8px;
      background: var(--white);
      color: var(--text);
      cursor: pointer;

      :hover {
        filter: brightness(0.9);
      }
    }
  }

  > p {
    margin: 18px auto;
    font-size: 14px;
    font-family: "Roboto", sans-serif;

    span {
      color: blue;
      cursor: pointer;

      :hover {
        color: #4666d0;
      }
    }
  }

  .social-login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    .social-buttons {
      width: inherit;
      display: flex;
      justify-content: center;
      gap: 16px;

      > button {
        background: none;
        border: none;
        cursor: pointer;
        transition: transform 0.1s ease;

        :hover {
          transform: scale(1.15);
        }
      }
    }
  }
`;

export { Content };
