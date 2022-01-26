 
const MovieCard = ({title, type, posterUrl}) => {
  return (
    <div>
      <img src={posterUrl} alt={title} />
      <p>{title}</p> 
      <button>{type}</button> 
    </div>
  );
}

export default MovieCard;