import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  background: transparent;
  z-index: 10;
`;

export const Box = styled.div`
  height: 300px;
  width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
  }

  div {
    display: flex;
    gap: 1.5rem;

    button {
      padding: 1rem;
      font-size: 1.25rem;
      font-weight: bold;
      border-radius: 6px;

      &:first-child {
        border: 1px solid var(--blue);

        :hover {
          background-color: #a6d7ff;
        }
      }

      &:last-child {
        border: 1px solid red;

        :hover {
          background-color: #fea5a5;
        }
      }

    }
  }

  @media (max-width: 480px) {
    height: 300px;
    width: 85%;
  }
`;
