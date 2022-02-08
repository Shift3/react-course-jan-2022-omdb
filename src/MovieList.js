import styled from "styled-components";
import MovieCard from "./MovieCard.js";

const MovieList = ({movies}) => {
  return (
    <ContainerMovieList>
      {movies.map((movie) => (<MovieCard movie={movie} key={movie.imdbID} />))}    
    </ContainerMovieList>
  )
}

const ContainerMovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, 1fr));
  grid-template-rows: auto;
  grid-gap: 2rem;
`;
export default MovieList;