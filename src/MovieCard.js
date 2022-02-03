 import {useState} from "react";
 import Modal from "./Modal";
 import "./movieCard.css"
import MovieDetails from "./MovieDetails";

const MovieCard = ({movie}) => {
  const [showModal, setShowModal] = useState(false);

  const {Title, Type, Poster} = movie;
  
  return (
    <>
    <div className="card" style={{cursor: "pointer"}} onClick={() => setShowModal(!showModal)}>
      <img src={Poster} alt={Title} />
      <p>{Title}</p> 
      <label>{Type}</label> 
    </div>
    <Modal show={showModal} onClose={() => setShowModal(!showModal)}>
      <MovieDetails movieId={movie.imdbID} />
    </Modal>
    </>
  );
}

export default MovieCard;