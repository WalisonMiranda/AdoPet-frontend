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
    animation: ${animateImage} .7s ease;
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
        margin: auto auto 16px;
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
      height: 350px;
      width: 314px;
      margin: auto 16px 16px;
      border: 1px solid var(--blue);
      border-radius: inherit;
      animation: ${animateContent} 1s ease;
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
