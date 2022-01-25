import "./movieCard.css";

const MovieDetails = (props)=>{
  const { posterUrl, title, rated, runtime, genre, plot, actors, rating } =props;

  return(
    <div className="movie">
      <img src={posterUrl} alt={title} />
      
      <div className="movieDetail">
        <h1>{title}</h1>
        <h2>{rating}</h2>
        <div>
          <span>{rated}</span>
          <span>{runtime}</span>
          <span>{genre}</span>
        </div>

        <div>
          <h3>Plot</h3>
          <p>{plot}</p>
        </div>

        <div>
          <h3>Actors</h3>
          <p>{actors}</p>
        </div>
      </div>
  
    </div>
  )
}

export default MovieDetails;