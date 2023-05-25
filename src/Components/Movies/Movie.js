import './Movie.css'
import left_arrow from '../../Assets/Images/LeftArrow.svg'
import right_arrow from '../../Assets/Images/RightArrow.svg'
import plus from '../../Assets/Images/Plus.svg'
import mark from '../../Assets/Images/Mark.svg'

function Movies (props) {
  let {data, onMovieClick} = props;
  
  return (
    <>
    <div className="moviesc">
        <div className="allMovies">
          <div className="movies">
             <div className='topman'>
              <p className='trend'>Trending</p>
              <span className='right'>
                <span className='view'>View all</span><span className='nbsp'>&nbsp;&nbsp; |&nbsp;&nbsp;</span>
                <button className='scrollButtons'><img src={left_arrow} alt='scrollers'/></button>&nbsp;&nbsp;&nbsp;
                <button className='scrollButtons'><img src={right_arrow} alt='scrollers'/></button>
              </span>
            </div>
          <div className='movie'>  
          <div className='movie-container'>
           {data.results.map(
             (movies, index) =>(
             <span key={index} style=
             {
               {
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.poster_path})`
              }
             }  className='post' onClick={ () => onMovieClick(index)}alt='posters' >
             <button className='buttn' >
               <img src={plus} alt='' />
             </button>
             </span>
             )
            )
          }

          </div>
          </div>
          </div>
        </div>
    </div>


<div className="moviesc">
        <div className="allMovies">
          <div className="movies">
             <div className='topman'>
              <p className='trend'>Binge-worthy series</p>
              <span className='right'>
                <span className='view'>View all</span><span className='nbsp'>&nbsp;&nbsp; |&nbsp;&nbsp;</span>
                <button className='scrollButtons'><img src={left_arrow} alt='scrollers'/></button>&nbsp;&nbsp;&nbsp;
                <button className='scrollButtons'><img src={right_arrow} alt='scrollers'/></button>
              </span>
            </div>
          <div className='movie'>  
          <div className='movie-container'>
           {data.results.map(
             (movies, index) =>(
             <span key={index} style=
             {
               {
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.poster_path})`
              }
             }  className='post' onClick={ () => onMovieClick(index)}alt='posters' >
             <button className='buttn' >
               <img src={plus} alt='' />
             </button>
             </span>
             )
            )
          }

          </div>
          </div>
          </div>
        </div>
    </div>
    </>
  )
  
}

export default Movies ;