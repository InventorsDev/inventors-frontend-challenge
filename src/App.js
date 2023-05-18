import './App.css';
import './Components/Navigation bar/Nav.css';
import Nav from './Components/Navigation bar/Nav';
import { useEffect, useState } from 'react';


function App () {
    const [data, setData] = useState(null);
    const api_key = '1ee185c3dac0558dc216d87405e84a0f';
    let [page, setPage] = useState(1);
    useEffect(
       ()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=${page}`)
        .then(response => response.json())
        .then (data => {
          setData(data)
        }
       )
        .catch(
          error => console.error('Error:', error)
        )
       }, []
    )
    console.log(data);
    // const specific = data ? data.page : null
    
    return (
       <div className="landingPage">
         <Nav />
       </div>
    )
    }
export default App;
