 
const MovieCard = ({movie}) => {
  const {Title, Type, Poster} = movie;
  
  return (
    <div>
      <img src={Poster} alt={Title} />
      <p>{Title}</p> 
      <button>{Type}</button> 
    </div>
  );
}

export default MovieCard;