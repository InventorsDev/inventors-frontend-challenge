import { useRef, useState } from 'react';
import './Body.css';
import pause from '../../Assets/Images/Pause.svg';
import play from '../../Assets/Images/Play.svg'
import plus from '../../Assets/Images/Plus.svg'
import mark from '../../Assets/Images/Mark.svg'


function Body (props) {
  const movieRef = useRef();
  const buttonRef = useRef();
  let [click, setClick] = useState(true)
  const handleClick= () => {
    if(click){
      movieRef.current.src = `${mark}`;
      buttonRef.current.style.backgroundColor = '#00B59833';
      setClick(click = !click)
    } else {
      movieRef.current.src = `${plus}`;
      buttonRef.current.style.backgroundColor = '#00000025';
      setClick(click = !click)
    }
  }
 
    return (
        <div className="body">

         <div className='allprops'>

           <div className='props'>
             <h1 className='h1'>{props.title}</h1>
             <p className='year'>Rating: {props.rating}  Release Date: {props.year} </p>
            <div className='enclose'>
                <button className='button'>
                  <img src={pause} className='pause' alt=''/>Play
                </button>
                <button className='tick' onClick={handleClick} ref={buttonRef}>
                  <img src={plus} alt='' ref={movieRef}/>
                </button>
            </div>
             <p className='overview'>{props.overview}</p>
           </div>

         </div>  

        </div>
    );
}
 export default Body;