import styled from 'styled-components';

export const Container = styled.main`
  height: 100%;
  min-height: calc(100vh - 60px);
  width: 100%;
  margin: 60px auto 0;
  padding: 1rem;
  background-color: var(--background);
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

  form {
    max-width: 520px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    border: 1px solid var(--blue);
    border-radius: 8px;

    h2 {
      margin: 8px auto;
    }

    label {
      width: 100%;
      padding: 0 2rem;
      display: inherit;
      flex-direction: column;
      gap: .25rem;
      
      input, select {
        height: 30px;
        width: 100%;
        border: none;
        border-radius: 4px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        text-indent: 1rem;
        font-size: 1.25rem;
      }
    }
    
    .select-inputs {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 2rem;

      select {
        width: 130px;       
      }
    }

    .buttons {
      width: 100%;
      margin: 0 auto 20px;
      padding: 0 2rem;
      display: flex;
      justify-content: center;
      gap: 4rem;

      button {
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
        font-size: 1rem;

        :first-child {
          background: var(--light-blue);
        }

        :last-child {
          background: var(--white);
        }

        :hover {
          filter: brightness(.9);
        }
      }
    }

    @media (max-width: 640px) {
      input[type="file"] {
        font-size: 1rem;
        text-indent: 0;
      }

      .select-inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        
        select {
          width: 100%;       
        }
      }
    }
  }
`;
