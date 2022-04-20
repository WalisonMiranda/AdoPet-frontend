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
    max-height: 280px;
    min-width: 120px;
    width: auto;
    max-width: 360px;
    border-radius: 8px;
  }

  .info {
    width: 100%;
    max-width: 720px;
    padding: 1rem;
    border: 1px solid var(--light-blue);
    border-radius: 8px;

    div {
      display: flex;
      justify-content: flex-end;
      gap: 24px;

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

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const PhotosGrid = styled.div`
  position: relative;
  min-height: 620px;
  height: 100%;
  width: 90%;
  margin: 40px auto;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
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

export const PhotoCard = styled.div`
  height: auto;
  width: auto;
  max-width: 280px;
  cursor: pointer;
  transition: ease .1s;

  :hover{
    opacity: .8;
    padding: .1rem;
  }

  img {
    height: auto;
    width: 100%;
  }
`;
