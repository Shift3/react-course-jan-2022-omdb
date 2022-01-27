import MovieCard from "./MovieCard.js";

const MovieList = ({movies}) => {
  return (
    <>
      {movies.map((movie) => (<MovieCard movie={movie} key={movie.imdbID} />))}    
    </>
  )
}

export default MovieList;