import './App.css';
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

let imageURL = `https://image.tmdb.org/t/p/original/${data.results[i].backdrop_path}`;

const handleBackwardClick = () => {
  setPage(page -= 1)
}

const handleForwardClick = () => {
  setPage(page += 1)
}

return (
    <div className="landingPage"
        style={
          {
            backgroundImage: `url(${imageURL})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            maxWidth: '100vw',
            maxHeight: '100vh',
            overflow: 'auto'
          }
        }
      >

         <Nav />
         <Body 
          data={data} 
          i={i}
          page={page}
          forward={handleForwardClick}
          backward={handleBackwardClick}
          />
          <Movies 
            data={data} 
            i={i}
          />
    </div>
 )
}
export default App;
