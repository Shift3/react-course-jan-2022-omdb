import {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import { getMoviesbySearchTerm } from "./utils";
import MovieList from "./MovieList";
import Spinner from "./Spinner";


function App() {
    const [pageNum, setPageNum] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("marvel");
    const [searchType, setSearchType] = useState("movie");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
      getMoviesbySearchTerm(searchTerm, searchType, pageNum).then(response => {
        if(response.Error){
          setMovies([]);
          setTotalPages(null);
          setIsError(`Error occured: ${response.Error}`);
        }
        setMovies(response.Search);
        setTotalPages(Math.ceil(response.totalResults / 10));
      }).catch(err => {
          setMovies([]);
          setTotalPages(null);
          setIsError(`Error occured: ${err}`);
          console.log(isError);
      }).finally(() => setIsLoading(false));


    }, [searchTerm, searchType, pageNum]);

    const previousPage = () => {
      console.log("pageNum previous: ", pageNum);
      if(movies && pageNum !== 1){
        setPageNum(pageNum-1);
      }
    }

    const nextPage = () => {
      console.log("pageNum next: ", pageNum);
      if(movies && pageNum < totalPages){
        setPageNum(pageNum+1);
      }
    }

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

                <div style={{margin: "0 auto"}}>
                    <button style={{marginRight: "1rem", cursor: pageNum === 1 ? "" : "pointer" , fontSize:"3rem", padding: "1rem 2rem"}} 
                      onClick={previousPage}
                      disabled={pageNum === 1}
                      >&lt;</button>
                    <button style={{cursor: pageNum === totalPages ? "" : "pointer",  fontSize:"3rem", padding: "1rem 2rem"}} 
                    onClick={nextPage}
                    disabled={pageNum === totalPages}
                    >&gt;</button>

                    <p style={{marginTop: "2rem", textAlign:"Center", fontWeight: "bold"}}>Page {pageNum} of {totalPages}</p>
                  </div>


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
