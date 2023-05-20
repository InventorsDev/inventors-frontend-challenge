import './Body.css';

function Body (props) {
    
    return (
        <div className="body">
         <div className='allprops'>
           <div className='props'>
             <h1 className='h1'>{props.title}</h1>
             <span>{props.year}</span>
             <p>{props.overview}</p>
           </div>
         </div>  
        </div>
    );
}
 export default Body;