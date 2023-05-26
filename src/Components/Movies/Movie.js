import './Movie.css'
import left_arrow from '../../Assets/Images/LeftArrow.svg'
import right_arrow from '../../Assets/Images/RightArrow.svg'
import plus from '../../Assets/Images/Plus.svg'
import pause from '../../Assets/Images/Pause.svg'
import check from '../../Assets/Images/Check.svg'

function Movies (props) {
  let {data, onMovieClick} = props;
  
  return (
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
                            {{
                              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movies.poster_path})`
                            }}  
                            className='post' 
                            onClick={ () => onMovieClick(index)}
                            alt='posters' >

                             <button className='buttn' >
                             <img src={plus} alt='' />
                             </button>
                          </span>
                        )
                      )
                    }   
              </div>

            </div>

            <div className='topman'>
                 <p className='trend'>Binge-worthy series</p>
                 <span className='right'>
                    <span className='view'>View all</span><span className='nbsp'>&nbsp;&nbsp; |&nbsp;&nbsp;</span>

                    <button className='scrollButtons'><img src={left_arrow} alt='scrollers'/></button>&nbsp;&nbsp;&nbsp;

                    <button className='scrollButtons'><img src={right_arrow} alt='scrollers'/></button>
                 </span>
            </div>

                 <div className='binge-container'>
                       {data.results.map(
                           (movies, index) =>(
                            <div key={index}  className='bigger-box' onClick={ () => onMovieClick(index)}>
                            <div 
                               className='image-box' >
                              <img 
                                src= {`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
                                alt='' 
                                className='binge' />

                             </div> 
                             <div className='text-container'> 
                             <div className='text-box'>
                               <p className='mtitle'>{movies.title} || {movies.release_date}</p>
                               <p className='overs'>{movies.overview}</p>
                               <button className='b-button'><img src={pause} alt='' /> Play</button>
                               <button className='check'><img src={check} alt ='' /></button>
                             </div>
                             </div>
                             </div>
                           )
                         )
                       }   
                 </div>

          </div>
        </div>
    </div>
  )
  
}

export default Movies ;