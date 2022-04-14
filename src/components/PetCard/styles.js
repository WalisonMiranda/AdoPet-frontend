import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  height: 220px;
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 8px 0 var(--gray);
  cursor: pointer;
  
  img {
    width: 100%;
  }

  div {
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-weight: bold;
    }

    @media (max-width: 640px) {
      height: 30px;
    }
  }

  @media (max-width: 640px) {
    height: 180px;
    width: 100%;
    max-width: 160px;
  }
`;
