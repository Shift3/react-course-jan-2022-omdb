import {useEffect} from "react";
import "./modal.css";

const Modal = ({show, onClose, children}) => {
  useEffect(() => {
    show ? (document.body.style.overflow = "hidden"): ((document.body.style.overflow = ""))
  }, [show]);
  return(
  <>
    {show && (
      <div className="overlay">
        <div className="onShow">
        {children}
        <button 
          onClick={onClose} 
          style={{
                    cursor:'pointer', 
                    margin:".5rem auto", 
                    display:"block", 
                    padding:".4rem .9rem", 
                    fontSize:"18px"
                  }
                }
        >Close</button>
        </div>
        </div>
    )
    }
  </>
)
}

export default Modal;

