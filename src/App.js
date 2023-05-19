import './App.css';
import Nav from './Components/Navigation/Nav';
import Body from './Components/Body/Body';
import { useEffect, useState } from 'react';



function App () {
    const [data, setData] = useState(null);
    const api_key = '1ee185c3dac0558dc216d87405e84a0f';
    let [page, setPage] = useState(3);
    let [imageUrl, setImageURL] = useState('');
    useEffect(
       ()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`)
        .then(response => response.json())
        .then (data => {
          setData(data)
          setImageURL(`https://image.tmdb.org/t/p/w500${data.results[0].backdrop_path}`)
        }
       )
        .catch(
          error => console.error('Error:', error)
        )
       }, []
    )
    console.log(data);
    
    return (
       <div className="landingPage">
         <Nav />
         <Body 
         imageUrl={imageUrl}
         />
       </div>
    )
    }
export default App;
