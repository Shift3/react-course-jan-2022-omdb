import "./movieCard.css";

const MovieDetails = (props)=>{
  const { posterUrl, title, rated, runtime, genre, plot, actors, rating } =props;

  return(
    <div className="movie">
      <img src={posterUrl} alt={title} />
      
      <div className="movieDetail">
        <h2>{title}</h2>
        <h1 style={{color: 'blue'}}>{rating}</h1>
        <div>
          <span>{rated}</span>
          <span>{runtime}</span>
        </div>

        <div>
          <span>{genre}</span>
        </div>

        <div>
          <h4>Plot</h4>
          <p>{plot}</p>
        </div>

        <div>
          <h4>Actors</h4>
          <p>{actors}</p>
        </div>
      </div>
  
    </div>
  )
}

export default MovieDetails;