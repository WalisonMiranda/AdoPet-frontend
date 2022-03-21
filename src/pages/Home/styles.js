import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: auto;
  display: flex;
  margin-top: 60px;

  @media (max-width: 640px) {
    width: auto;
    flex-direction: column;
    align-items: center;
  }
`;

Container.Aside = styled.aside`
  position: fixed;
  height: 100%;
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  background-color: var(--light-blue);

  > img {
    margin: 1rem auto 0;

    @media (max-width: 640px) {
      height: 100px;
      width: auto;
    }
  }

  @media (max-width: 640px) {
    position: relative;
    height: 300px;
    background-color: var(--background);
  }
`;

Container.Panel = styled.div`
  height: 300px;
  width: 271px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--blue);
  border-radius: 8px;

  .type-field {
    display: flex;
    justify-content: center;
    gap: 20px;

    div {
      height: 106px;
      width: 110px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 16px 0 0;
      background-color: var(--white);
      border-radius: 8px;
      cursor: pointer;

      span {
        padding: 4px 0;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        color: var(--text);
      }

      img {
        margin: auto auto 0;
      }

      @media (max-width: 640px) {
        background-color: var(--light-blue);
      }
    }

    .selected {
      background-color: var(--light-blue);
      
      @media (max-width: 640px) {
        background-color: var(--white);
      }
    }
  }

  .input-field {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

      label {
        font-family: "Roboto", sans-serif;
        font-weight: bold;
      }

      select {
        height: 30px;
        font-size: 1rem;
        padding: 0.25rem;
      }
    }
  }
`;
