import styled from 'styled-components';

export const Container = styled.main`
  min-height: calc(100vh - 60px);
  height: 100%;
  width: 100%;
  margin: 60px auto 0;
  padding: 1rem;
  background-color: var(--gray);
  font-family: 'Roboto', sans-serif;

  > p {
    width: max-content;
    padding: 0.25rem .5rem;
    display: flex;
    gap: 0.5rem;
    color: var(--blue);
    cursor: pointer;
    border-radius: 8px;
    background: var(--white);
    margin: 1rem 0 0 1rem;
    transition: all .3s;

    :hover {
      color: var(--white);
      background: var(--light-blue);
    }
  }
`;

export const PetInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin: 60px 0 0 5%;

  

  img {
    height: auto;
    min-width: 120px;
    width: auto;
    max-width: 200px;
  }

  .info {
    width: 100%;
    max-width: 620px;
    padding: 1rem;
    border: 1px solid var(--light-blue);
    border-radius: 8px;

    p {
      
      
      :not(:first-child) {
        margin: 1rem 0;
      }
    }

    
  }

  
`;
