import { useRef } from 'react';
import './Body.css';
import play from '../../Assets/Images/Play.svg';
import unwatched from '../../Assets/Images/Unwatched.svg';
import watched from '../../Assets/Images/Watched.svg';

function Body (props) {
  const movieRef = useRef();

  const handleClick = ()=> {
    movieRef.current.src = `${watched}` ;
  }
    return (
        <div className="body">

         <div className='allprops'>

           <div className='props'>
             <h1 className='h1'>{props.title}</h1>
             <p className='year'>{props.year}</p>
            <div>
               <button className='button'><img src={play} alt='' className='play'/>Play</button><img src={unwatched} ref={movieRef} onClick={handleClick} className='tick'/>
            </div>
             <p className='overview'>{props.overview}</p>
           </div>

         </div>  

        </div>
    );
}
 export default Body;