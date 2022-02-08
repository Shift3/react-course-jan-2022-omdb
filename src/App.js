import {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import { getMoviesbySearchTerm } from "./utils";
import MovieList from "./MovieList";
import Spinner from "./Spinner";


function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("marvel");
    const [searchType, setSearchType] = useState("movie");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
      getMoviesbySearchTerm(searchTerm, searchType).then(response => {
        if(response.Error){
          setMovies([]);
          setIsError(`Error occured: ${response.Error}`);
        }
        setMovies(response.Search);
      }).catch(err => {
          setMovies([]);
          setIsError(`Error occured: ${err}`);
          console.log(isError);
      }).finally(() => setIsLoading(false));


    }, [searchTerm, searchType]);

    return(
    <>
    
      <header> 
          <h1>Movie App</h1>
      </header>

      { isLoading 
          ? (<Spinner/>)
          : (
            <>
              { movies.length ? (
                <>
                  <SearchBar onSubmit={(e) => {
                    e.preventDefault();
                    setSearchTerm(e.target.searchInput.value)
                    setSearchType(e.target.searchType.value)
                    
                  }}
                  />

                  <MovieList movies={movies}/>
                </>
              ): (
                <>
                  <p>Sorry! We could not find results for your Search {" "}
                    <span style={{ fontWeigth: "bolder", color: "#d9534f"}}>
                      '{searchTerm}'
                    </span>
                    . Please, try again!
                  </p>
                </>
              )}
            </>
          ) 
      }
    </>
);
}

export default App;
