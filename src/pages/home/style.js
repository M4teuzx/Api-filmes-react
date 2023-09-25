import styled from "styled-components";

export const Container = styled.div`
  padding: 1.6vw;
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 14vw;
    border-radius: 0.8vw;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.1);
    filter: brightness(60%);
  }

  span {
    font-weight: bold;
    font-size: 120%;
    text-align: center;
  }

  @media (max-width: 768px) {
    img {
      width: 14vw;
      border-radius: 0.8vw;
    }
  }
`;
