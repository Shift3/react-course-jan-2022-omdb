const apiUrl = `http://www.omdbapi.com`;
const apiKey = process.env.REACT_APP_API_KEY;

export const getMoviesbySearchTerm = async term => {
  const fetchResults = await fetch(`${apiUrl}/?apiKey=${apiKey}&t=${term}`);
  const fetchData = await fetchResults.json();
  return fetchData;
}

export const getMoviedetailsById = async movieId => {
  const fetchResults = await fetch(`${apiUrl}/?apiKey=${apiKey}&i=${movieId}`);
  const fetchData = await fetchResults.json();
  return fetchData;
}

