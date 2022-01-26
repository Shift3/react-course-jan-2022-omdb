import { useState, useEffect } from "react";
import { getMoviesbySearchTerm } from "./utils"

function App() {
  const [searchTerm, setSearchTerm] = useState("batman");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMoviesbySearchTerm(searchTerm).then(result => {
      setMovies(result);
      setError(null);
      setIsLoading(false);
    }).catch(err => {
      console.log('err: ', err);
      setError(err);
      setMovies([]);
      setIsLoading(false);
    });
    
  }, [searchTerm]);

  const renderingUI = () => {
    if(isLoading){
      return `Loading...`;
    } else {
      if ( !error ) {
        return `Fetched successflly...`;
      } else {
        return `We have an error!`
      }
    }
  }
  return (
    <div>
      <p>{ renderingUI() }  </p>
    </div>
  );
}

export default App;
