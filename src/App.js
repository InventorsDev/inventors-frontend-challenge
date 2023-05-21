import './App.css';
import Nav from './Components/Navigation/Nav';
import Body from './Components/Body/Body';
import Movies from './Components/Movies/Movie';
import {useEffect, useState } from 'react';

function App () {
  const api_key = '1ee185c3dac0558dc216d87405e84a0f';
  let [data, setData] = useState([]);
  let [poster, setPoster] = useState('')
  let [imageUrl, setImageURL]  = useState('');
  let [release, setRelease]= useState('');
  let [title, setTitle]= useState('');
  let [overview, setOverview]= useState('');
  let [page, setPage] = useState(1);
  let [i, setI]= useState(0);
  // let [bdrop, setBdrop] = useState([]);
  
  const fetchData = ()=> {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`)
   .then(response => response.json())
   .then (data => {

            setData(data);
            setPoster(`https://image.tmdb.org/t/p/original${data.results[i].poster_path}`);
            setImageURL(`https://image.tmdb.org/t/p/original${data.results[i].backdrop_path}`);
            setRelease(data.results[i].release_date);
            setTitle(data.results[i].title);
            setOverview(data.results[i].overview);
            setBdrop(data.results.backdrop_path)

           }
     )
   .catch(
     error => console.error('Error:', error)
   ) 
   }

  console.log(data);
  
  useEffect(
    ()=>{
      window.addEventListener('load', fetchData())
    }, []
  )



  const handleBackwardClick = (e) => {
      e.preventDefault();
      setPage(page -= 1)
      fetchData()
  }

  const handleForwardClick = (e) => {
      e.preventDefault();
      setPage(page += 1);
      fetchData();
  }
    
  
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
         <button onClick={handleBackwardClick}></button> <p>Page {`${page}`}</p><button onClick={handleForwardClick}></button>
         <Body 
           data={data}
           page={page}
           year={release}
           poster={poster}
           title={title}
           overview={overview}
         />
         
         <Movies 
          
         />
        
    </div>
    )
    }
export default App;
