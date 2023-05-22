import './App.css';
import left_arrow from './Assets/Images/LeftArrow.svg'
import right_arrow from './Assets/Images/RightArrow.svg'
import Nav from './Components/Navigation/Nav';
import Body from './Components/Body/Body';
import Movies from './Components/Movies/Movie';
import {useEffect, useState } from 'react';

function App () {
const api_key = '1ee185c3dac0558dc216d87405e84a0f';
let [page, setPage] = useState(1);
let [i, setI]= useState(0);
let [data, setData] = useState(null);

useEffect(
  () => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`
          );
          const movies = await response.json();
          setData(movies);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };

      fetchData();
    }, [api_key, page]
);

console.log(data);

if (!data || !data.results || data.results.length === 0) {
  return null; 
}

let imageURL = `https://image.tmdb.org/t/p/original/${data.results[i].backdrop_path}`
let poster = `https://image.tmdb.org/t/p/original/${data.results[i].poster_path}`
const handleBackwardClick = (e) => {
   e.preventDefault();
   setPage(page -= 1)
}

const handleForwardClick = (e) => {
   e.preventDefault();
   setPage(page += 1);
}


const title = `${data.results[i].title}`
const year = `${data.results[i].release_date}`
const overview = `${data.results[i].overview}`
const rating = `${data.results[i].vote_average}`

return (
    <div className="landingPage"
        style={
          {
            backgroundImage: `url(${imageURL})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minWidth: '100vw',
            minHeight: '100vh'
          }
        }
      >

         <Nav />
         <div className='buttonClose'>
          {page > 1 ? <button onClick={handleBackwardClick} className='pageButtons'><img src={left_arrow} alt='' /></button> : <button className='clear'></button> }
            <p className='Page'>Page {`${page}`}</p> 
          <button onClick={handleForwardClick} className='pageButtons'><img src={right_arrow} alt=''/></button>
         </div>
         <Body 
          data={data} 
          title={title}
          year={year}
          overview={overview}
          rating={rating}
          />
          <Movies 
            data={data} 
            title={title}
            year={year}
            overview={overview}
            rating={rating}
            poster={poster}
          />

        <div style={
          {color: 'black'}
        }>{data.page}</div>
    </div>
    )
    }
export default App;
