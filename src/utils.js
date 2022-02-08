const apiUrl = `http://www.omdbapi.com`;
const apiKey = process.env.REACT_APP_API_KEY;

export const getMoviesbySearchTerm = async (term, type="movie") => {
  const fetchResults = await fetch(`${apiUrl}/?apiKey=${apiKey}&s=${term}&type=${type}`);
  const fetchData = await fetchResults.json();
  return fetchData;
}

export const getMoviedetailsById = async movieId => {
  const fetchResults = await fetch(`${apiUrl}/?apiKey=${apiKey}&i=${movieId}`);
  const fetchData = await fetchResults.json();
  return fetchData;
}

