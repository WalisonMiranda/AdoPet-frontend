import styled, { keyframes } from "styled-components";

const animateImage = keyframes`
  0% {
    top: -300px;
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    top: 0;
    opacity: 1;
  }
`;

const animateContent = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: var(--light-blue);
  padding-right: 5%;

  .login-image {
    position: absolute;
    top: 0;
    left: -2%;
    min-width: 600px;
    max-width: 50%;
    margin-left: 10%;
    animation: ${animateImage} 0.7s ease;
  }

  .line-border {
    display: flex;
    height: 80%;
    width: 90%;
    margin: auto;
    padding-top: 24px;
    border: 1px solid var(--blue);
    border-radius: 8px;

    main {
      display: flex;
      flex-direction: column;
      align-self: flex-end;
      margin: 0 auto;
      flex: 1;
      animation: ${animateContent} 1s ease;

      .text-area {
        height: auto;
        max-width: 700px;
        padding: 24px;
        margin: auto auto 100px;
        display: flex;
        flex-direction: inherit;
        gap: 16px;

        .login-title {
          font-size: 40px;
          font-family: "Ubuntu", sans-serif;
        }

        .login-text {
          font-size: 24px;
          font-family: "Roboto", sans-serif;
        }
      }
    }

    aside {
      min-height: 350px;
      height: 100%;
      max-height: 420px;
      width: 340px;
      margin: auto 16px 16px;
      border: 1px solid var(--blue);
      border-radius: inherit;
      animation: ${animateContent} 1s ease;

      form {
        width: 100%;
        padding: 8px 16px;
        display: flex;
        flex-direction: column;
        font-family: "Roboto", sans-serif;

        p {
          font-size: 2rem;
          font-weight: 500;
          margin-bottom: 20px;
        }

        label {
          margin-top: 16px;
          font-size: 1.3rem;
        }

        input {
          margin-top: 8px;
          height: 40px;
          border: 1px solid var(--blue);
          border-radius: 4px;
          font-size: 1.3rem;
          text-indent: 14px;
        }

        button {
          width: 100px;
          height: 40px;
          margin: 8px auto 0;
          border: 1px solid var(--blue);
          border-radius: 8px;
          background: var(--white);
          color: var(--text);
          cursor: pointer;
          font-size: 1.1rem;

          :hover {
            filter: brightness(0.9);
          }
        }
      }

      p:last-child {
        text-align: center;
        margin: 18px auto;
        font-size: 18px;
        font-family: "Roboto", sans-serif;

        .signup {
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
    }
  }

  @media (max-width: 767px) {
    padding: 0;
    flex-direction: column;

    .login-image {
      height: auto;
      width: auto;
      margin: 0 8%;
      left: auto;
      right: auto;
      min-width: 340px;
      max-width: 75%;
    }

    .line-border {
      height: 80vh;
      margin-top: 160px;
      flex-direction: column;

      main {
        .text-area {
          margin: 180px auto 0;

          .login-title {
            text-align: center;
            font-size: 32px;
          }

          .login-text {
            font-size: 20px;
          }
        }
      }

      aside {
        margin: 20px auto;
      }
    }
  }

  @media (max-width: 480px) {
    .login-image {
      min-width: 242px;
      margin: 0 7%;
    }

    .line-border {
      height: auto;
      margin-top: 120px;

      main {
        .text-area {
          margin: 100px 0 0;
        }
      }

      aside {
        width: 95%;
        margin: 60px auto 40px;
      }
    }
  }
`;

export { Container };
