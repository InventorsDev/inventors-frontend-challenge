import { requests } from '@/Request';
import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaPlay, FaPlus } from 'react-icons/fa';
import Rows from './Rows';
import Row2 from './Row2';
import { useRef } from 'react';
// importing aos 
import AOS from 'aos';
import 'aos/dist/aos.css'

const Main = ({Movies,title,date,overview}) => {
    useEffect(()=>{
        AOS.init();
      },[])

 
    const [movies,setMovies]=useState([])
    // const [extendedScroll, setExtendedScroll] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollContainerRef = useRef(null);

    const handleButtonClick = () => {
    //   setExtendedScroll(!extendedScroll);
      const scrollHeight = window.innerHeight * 0.5;
    window.scrollBy({
      top: scrollHeight,
      behavior: 'smooth',
    });
    setScrollPosition(scrollPosition + scrollHeight);
    };

 

    useEffect(()=>{
    setMovies(Movies.results)
},[])
    console.log(Movies);  
      const movie=movies[(Math.floor(Math.random()* movies.length))]
        console.log(movie);


   // console.log(movie);
   const truncateString=(string,num)=>{
    if(string?.length>num){
       return string.slice(0,num) +'...'
    }
    else{
        return string
    }
}
  return (
      <div data-aos="zoom-in"  style={{transition:"3s ease"}} ref={scrollContainerRef} className={` z-20 w-[100vw] relative md:mt-[0] mt-[417.11px] h-full px-[19px] md:px-[50px] lg:px-[160px]`}>
        {/* <div style={{transition:"3s ease"}} ref={scrollContainerRef} className={`  transition delay-500  ease-in-out z-20 w-[100vw] relative md:mt-[0]   px-[19px] md:px-[50px] lg:px-[160px`}> */}
   {/* <div className={`h-[150vh] ${extendedScroll ? 'overflow-y-auto' : 'overflow-y-scroll'}`}> */}
        
            {/* <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}alt={movie?.title} /> */}

            <div   className=' w-full  top-[20%] flex flex-col md:justify-start items-center justify-center md:items-start text-center md:text-start  z-20 p-4 md:p-8'>
                <h1  className=' text-3xl   text-white md:text-5xl  font-bold'>{title}</h1>
                <div   className='my-4  flex flex-col items-center md:items-start relative  justify-start md:justify-center '>
            <p className=' text-gray-400 text-sm my-3  tracking-[.5em]'>{date}</p>
            
            <div className='flex gap-4 my-4'>
                <button className=' border bg-gray-300 text-black border-gray-300 px-5 rounded-full h-[48px] flex justify-center items-center gap-3   ml-4 py-2'> <FaPlay/> Play</button>
                <button className=' border bg-white/20  text-white p-4 ml-4  rounded-full  '><FaPlus/></button>
         
            </div>
            <p className='  my-[40px] w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(overview,200)}  </p>
           <p className=' hidden md:block  my-[40px] w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200' >{title}</p>
           <p className=' md:hidden flex  my-[40px] w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200' >Horror, Mystery, Thriller</p>
           <button onClick={handleButtonClick} className='arrow z-40 absolute  md:hidden items-center flex top-[100%] flex-col'>
            <FaChevronDown size={20} className=' mt-4 text-white/50'/>
            <FaChevronDown size={30} className='  absolute top-0 text-white'/>
            </button>
                   </div>
              
            </div>
              

            
             
       
            <Rows  movies={movies} RowId={'1'}  title="UpComing " fetchUrl={requests.Horror}/>
            <div className=' block md:hidden '>
 <Rows movies={movies} RowId={'1'} className="hidden "  title="Popular " fetchUrl={requests.Popular}/>
            </div>
           
            <Row2 movies={movies} RowId={'2'}  title="Binge-worthy series" fetchUrl={requests.TopRated}/>
           
          
       
      
    {/* </div> */}
    <footer className=' my-[5em]  text-center  bg-purple-400 w-full z-40'>
      <p className=' z-[90] p-2 bg-[#000000] text-[#ffffff] '>
      © {new Date().getFullYear()} Inventors Frontend Challenge by Enaikele Omoh Kelvin. All right reserved.
      </p>
    </footer>
    </div>
  )
}

export default Main
