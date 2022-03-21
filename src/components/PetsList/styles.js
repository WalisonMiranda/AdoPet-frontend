import styled from "styled-components";

export const ResultList = styled.main`
  position: relative;
  min-height: 827px;
  height: auto;
  width: 100%;
  max-width: calc(100% - 320px);
  margin: 40px 80px 40px 360px;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  border: 1px solid var(--blue);
  border-radius: 8px;

  .list-title {
    position: absolute;
    top: -13px;
    left: 24px;
    padding: 0 4px;
    font-family: "Ubuntu", sans-serif;
    font-size: 22px;
    background: var(--background);
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.4rem;
  }

  @media (max-width: 860px) {
    margin-right: 20px;
  }

  @media (min-width: 641px) {
    margin-left: 340px;
  }

  @media (max-width: 640px) {
    min-height: 360px;
    max-width: 90%;
    width: 90%;
    margin: 120px auto;

    .list-title {
      top: -11px;
      font-size: 18px;
    }
  }
`;