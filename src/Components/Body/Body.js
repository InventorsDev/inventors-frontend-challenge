import './Body.css';
import play from '../../Assets/Images/Play.svg'

function Body (props) {
    return (
        <div className="body">

         <div className='allprops'>

           <div className='props'>
             <h1 className='h1'>{props.title}</h1>
             <p className='year'>{props.year}</p>
             <button className='button'><img src={play} alt='' className='play'/>Play</button>
             <p className='overview'>{props.overview}</p>
           </div>

         </div>  

        </div>
    );
}
 export default Body;