import Image from 'next/image'
import { Inter } from 'next/font/google'
import Main from '@/components/Main'
import { requests } from '@/Request'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })


export const getStaticProps=async()=>{
  const res= await fetch(requests.Popular);
  console.log(res);
  const data =await res.json()
 
return{
  props:{
    Movies:data
  } 

}


}


export default function Home({Movies}) {

  const [movies,setMovies]=useState([])
  const movie=movies[(Math.floor(Math.random()* movies.length))]
  useEffect(()=>{
  setMovies(Movies.results)
},[])
  console.log(Movies);


  

  return (
    <>
<main className='   h-screen   bg-cover d bg-center relative  md:bg-cover' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})` ,backgroundRepeat:'no-repeat' }}>
<Navbar className="absolute" />
<div className='z-10 absolute top-0 w-full h-full  bg-gradient-to-tr from-[#0C1516]'></div> 
<div className='z-10 absolute top-0 w-full h-full  bg-gradient-to-tl from-[#0C1516]'></div> 
             
       {/*  <img className=' n w-full absolute h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}alt={movie?.title} /> */}
  
    <Main date={movie?.release_date}  title={movie?.title} overview={movie?.overview}  Movies={Movies}/>
   
    </main>
   
   </>
  )
}
