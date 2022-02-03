import { useState, useEffect } from "react";
import { getMoviesbySearchTerm } from "./utils"
import MovieList from "./MovieList";
import Spinner from "./Spinner";

function App() {
  const [searchTerm, setSearchTerm] = useState("marvel");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMoviesbySearchTerm(searchTerm).then(result => {
      const searchedResultrs = [result];
      setMovies(searchedResultrs);
      setIsError(null);
      setIsLoading(false);
    }).catch(err => {
      console.log('err: ', err);
      setIsError(`Error occured: ${err}`);
      setMovies([]);
      setIsLoading(false);
    });
    
  }, [searchTerm]);

  return(
    <>
    
      <header> 
          <h1>Movie App</h1>
      </header>

      {isLoading ? (<Spinner />) : (
            <>
              {movies.length ? (
                <>
                    <MovieList movies={movies} />
                </>
              ) : (
                    <div>
                        <p>
                            We're sorry! We could not find results for your search{" "}
                            <span style={{ fontWeight: "bolder", color: "#d9534f" }}>
                            '{searchTerm}'
                            </span>
                            . Please, try again!
                        </p>
                    </div>
                )}
            </>
        )}
    </>
);
}

export default App;
