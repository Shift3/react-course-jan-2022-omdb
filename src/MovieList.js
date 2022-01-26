import MovieCard from "./MovieCard.js";

const MovieList = (props) => {
  return props.movies.map(movie => <MovieCard title = {movie.Title} type = {movie.Type} posterUrl = {movie.PosterUrl} />);
}

export default MovieList;