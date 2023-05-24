import './Movie.css'
import left_arrow from '../../Assets/Images/LeftArrow.svg'
import right_arrow from '../../Assets/Images/RightArrow.svg'

function Movies (props) {
  let {data} = props;
 
  return (
    <div className="moviesc">
        <div className="allMovies">
          <div className="movies">
             <div className='topman'>
              <p className='trend'>Trending</p>
              <span className='right'>
                <span className='view'>View all</span><span className='nbsp'>&nbsp;&nbsp; |&nbsp;&nbsp;</span>
                <button className='scrollButtons'><img src={left_arrow}/></button>&nbsp;&nbsp;&nbsp;
                <button className='scrollButtons'><img src={right_arrow}/></button>
              </span>
            </div>
           {data.results.map(
             (movies, index) =>(
             <div 
              key={index}
              className={`movie movie-${index}`}
             ><img src= {`https://image.tmdb.org/t/p/original/${movies.poster_path}`} className='post'/></div>
             )
            )
          }
          </div>
        </div>
    </div>
  )
  
}

export default Movies ;