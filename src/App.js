import './App.css';
import Nav from './Components/Navigation/Nav';
import Body from './Components/Body/Body';
import {useEffect, useState } from 'react';

function App () {
  const api_key = '1ee185c3dac0558dc216d87405e84a0f';
  let [page, setPage] = useState(2);
  let [data, setData] = useState(null);
  let [poster, setPoster] = useState('')
  let [imageUrl, setImageURL]  = useState('');
  let [release, setRelease]= useState('');
  let [title, setTitle]= useState('');
  let [overview, setOverview]= useState('');
  let [i, setI]= useState(17)
  useEffect(
    () =>{
     fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`)
    .then(response => response.json())
    .then (data => {
               setData(data);
               setPoster(`https://image.tmdb.org/t/p/original${data.results[i].poster_path}`);
               setImageURL(`https://image.tmdb.org/t/p/original${data.results[i].backdrop_path}`);
               setRelease(data.results[i].release_date);
               setTitle(data.results[i].title);
               setOverview(data.results[i].overview);
              }
        )
    .catch(
      error => console.error('Error:', error)
    ) 
   }, []
)
    return (
       <div className="landingPage"
         style={
          {
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minWidth: '100vw',
            minHeight: '100vh'
          }
         }
       >
         <Nav />
         <Body 
           data={data}
           page={page}
           year={release}
           poster={poster}
           title={title}
           overview={overview}
         />
       </div>
    )
    }
export default App;
