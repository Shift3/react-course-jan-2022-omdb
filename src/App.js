import {useState, useEffect} from "react";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";
import {getMoviesbySearchTerm, getMoviedetailsById} from "./utils"

function App() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMoviedetailsById('tt0078346').then(result => {
      console.log(result);
      setMovie(result);
    } );
    
  }, []);
  return (
    <MovieDetails 
    posterUrl = {movie.Poster}
    title = {movie.Title}
    rated = {movie.Rated}
    runtime = {movie.Runtime}
    genre = {movie.Genre}
    plot = {movie.Plot}
    actors = {movie.Actors}
    rating = {movie.imdbRating}
      
      />
  );
}

export default App;
