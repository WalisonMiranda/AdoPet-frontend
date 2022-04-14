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
`;

export const PetInfo = styled.div`
  width: 90%;
  display: flex;
  gap: 2rem;
  margin: 60px auto 0;

  img {
    height: auto;
    min-width: 120px;
    width: auto;
    max-width: 200px;
    border-radius: 8px;
  }

  .info {
    width: 100%;
    max-width: 620px;
    padding: 1rem;
    border: 1px solid var(--light-blue);
    border-radius: 8px;

    div {
      display: flex;
      justify-content: flex-end;
      gap: 16px;

      svg {
        font-size: 1.75rem;
        cursor: pointer;
      }
    }

    p {      
      :not(:first-child) {
        margin: 1rem 0;
      }
    }
  }
`;

export const PhotosGrid = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  width: 90%;
  margin: 40px auto;

  border: 1px solid var(--light-blue);
  border-radius: 8px;

  .photos-title {
    position: absolute;
    top: -13px;
    left: 50%;
    transform: translateX(-25%);
    padding: 0 4px;
    font-family: "Ubuntu", sans-serif;
    font-size: 22px;
    background: var(--background);
  }

`;
