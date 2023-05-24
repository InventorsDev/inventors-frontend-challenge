import { useRef, useState } from 'react';
import './Body.css';
import pause from '../../Assets/Images/Pause.svg';
import play from '../../Assets/Images/Play.svg'
import plus from '../../Assets/Images/Plus.svg'
import mark from '../../Assets/Images/Mark.svg'
import left_arrow from '../../Assets/Images/LeftArrow.svg'
import right_arrow from '../../Assets/Images/RightArrow.svg'


function Body (props) {
  let {data} = props;
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

          <div className='buttons'>

               {
               props.page > 1
               ? <button onClick={props.backward} className='pageButtons'>
                   <img src={left_arrow} alt='' />
                 </button>
               : <></>
               }
               <span className='page'>Page {props.page}</span> 
               <button onClick={props.forward} className='pageButtons'>
                 <img src={right_arrow} alt=''/>
               </button>

          </div>

          <div className='props'>

              <h1 className='heading'>{data.results[props.i].title}</h1>
              <p className='year'>
                 Rating: {data.results[props.i].vote_average}  <br />
                 Release Date: {data.results[props.i].release_date} 
              </p> 

              <div className='enclose'>

                <button className='button'>
                  <img src={pause} className='pause' alt=''/>Play
                </button>

                <button className='tick' onClick={handleClick} ref={buttonRef}>
                <img src={plus} alt='' ref={movieRef}/>
                </button>

              </div>
          
              <p className='overview'>{data.results[props.i].overview}</p>

          </div>

        </div>

      </div>  
    );
}
 export default Body;