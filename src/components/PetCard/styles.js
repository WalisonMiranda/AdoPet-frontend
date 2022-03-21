import styled from 'styled-components';

export const Card = styled.div`
  max-height: 140px;
  display: flex;
  align-items: center;
  margin: 1rem auto 0;
  
  img {
    height: 100px;
    width: auto;
    max-width: 100px;
    border-radius: 8px;
    box-shadow: -4px 1px 8px 1px var(--gray);
    z-index: 1;
    cursor: pointer;
  }

  @media (max-width: 480px) {
    width: 260px;

    img {
      height: 84px;
      width: auto;
    }
  }
`;

Card.Description = styled.div`
  position: relative;
  min-height: 80px;
  height: auto;
  min-width: 260px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
  padding: 1rem 0 1rem 16px;
  box-shadow: 2px 1px 8px 2px var(--gray);
  border-radius: 0 8px 8px 0;
  font-family: "Roboto", sans-serif;

  .buttons {
    right: 8px;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    svg {
      cursor: pointer;
      transition: all .3s;
      
      :hover {
        color: var(--blue);
      }
    }
  }



  @media (max-width: 480px) {
    height: 70px;
  }
`;
