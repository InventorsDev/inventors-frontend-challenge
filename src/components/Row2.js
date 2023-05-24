import { requests } from '@/Request';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaArrowDown, FaCheck, FaChevronLeft, FaChevronRight, FaPlay, FaPlus, FaPlusCircle, FaStar } from 'react-icons/fa'
import { BsArrowDown, BsStar } from 'react-icons/bs'
import Checks from'../assets/check.png'
import Image from 'next/image';
// importing aos 
import AOS from 'aos';
import 'aos/dist/aos.css'

const Row2 = ({Movies,title,RowId,fetchUrl}) => {

  useEffect(()=>{
    AOS.init();
  },[])

  const [data,setData]=useState([])
  const [view,setView]=useState(false)
  const [check,setCheck]=useState(false)
   const [movies,setMovies]=useState([])
  const slideLeft = () => {
    var slider = document.getElementById('slider'+RowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  
  const slideRight = () => {
    var slider = document.getElementById('slider'+RowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };



const name=title
useEffect(()=>{
  axios.get(fetchUrl).then(res=>{
    setMovies([...res.data.results,])
  })
},[fetchUrl])

console.log(
[...movies]
)

const handleCheck = (id)=>{

  // movies.map(movie=>(
  //   {...movie,checked:id}
  //  ))
   
  const listItems = movies.map((movie)=>(
    movie.id===id ? {...movie,checked:!movie.checked}:movie
    
  ));
  setMovies(listItems)
}


    // console.log(movie);
    const truncateString=(string,num)=>{
        if(string?.length>num){
           return string.slice(0,num) +'...'
        }
        else{
            return string
        }
    }


    const viewAll=()=>{
        setView(!view)
    }

  return (
    <div  className='z-40 relative w-full   '>  
     <div  data-aos="zoom-out-up"  data-aos-duration='2000' transition-duration="1000" className=' flex justify-between items-center w-full  my-0 md:my-[40px]'>
                 <h1 className='  text-white text-[16px] font-[700]'>{title}</h1>
               <div className=' flex  gap-4 px-6 justify-center  items-center my-[24px] md:my-0 ' > 
                   <button onClick={()=>viewAll(RowId)} className='  no-underline bg-[#FFFFFF1A] md:bg-[#fff0] py-[4px] px-[10px] rounded-[48px] md:p-0 md:underline  text-[#FFA900] border-none  text-[10px] md:text-[20px] font-[400]'> {view===false? 'View all': " View less" }</button>
                   <p className='hidden md:block text-white text-[3.5em] font-thin'>|</p>

               <FaChevronLeft onClick={slideLeft} className='hidden md:block  p-2  cursor-pointer  text-white/70 hover:scale-[1.5] transition ease-in delay-100 hover:text-white border border-white rounded-full     ' size={30}/>
                <FaChevronRight onClick={slideRight}className=' hidden md:block  p-2 cursor-pointer text-white/70 hover:scale-[1.5] transition ease-in delay-100 hover:text-white border border-white rounded-full     ' size={30}/>
               </div> 
     </div>
              <div  className=' z-40 flex    justify-center items-center gap-[32px] w-full h-full  md:h-full  overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide '>

           
              
              
               <div id={"slider"+RowId} className={` w-full md:h-full ${view? 'grid grid-cols-1 md:grid-col-1':'flex' } h-full place-content-center   overflow-x-scroll  overflow-hidden place-items-center  grid-cols-1  gap-3 -nowrap scroll-smooth scrollbar-hide relative`}>
                
              
                {movies?.map((movie,id)=>(
        <>
        {/* {setMovies({...movie,check:false])} */}


        <div   className=' flex w-[358px] md:w-[544px] justify-center items-center   relative  mx-0 md:mx-[30px] h-full rounded-[44px] bg-[#FFFFFF1A] p-2 mb-4'>
           <div className='  flex  justify-between items-center w-[358px] md:w-[454px]  md:h-[304px] h-full md:px-0 px-3   my-8 '>
            
           <div data-aos="fade-in" key={id} className="  h-full  flex gap-4 w-[358px] md:w-full cursor-pointer   ">
           <div className='w-full h-full  grid place-content-center  place-items-center   '>
             <img className="w-[82.58px] md:w-[256px]  h-[70%] md:h-[304px]  rounded-[12px] md:rounded-[44px]  absolute top-[20px] opacity-40    block object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} />
      <img className=" w-[98.58px] md:w-[256px]  h-[70%] md:h-[304px]  rounded-[12px] md:rounded-[44px]  absolute top-[32px] opacity-40    block object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} />
      <img className=" w-[134.58px] md:w-[256px] h-[70%] md:h-[304px]  rounded-[12px] md:rounded-[44px]  absolute top-[42px]   block object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} />

           </div>
     
      
       <div className=' w-full md:w-[208px] '>
       <div className=' flex justify-center  items-center gap-2'>
            <p className="whitespace-normal text-white text-xs md:text-sm font-bold flex justify-center items-center text-center">{movie?.title}</p>
    <p className="whitespace-normal text-white/70 text-xs md:text-sm font-semibold flex justify-center items-center w-full   text-center">{movie?.release_date}</p>
  
       </div>

       <div >
        <p className="whitespace-normal  hidden text-white/50 my-4 md:my-[44px] font-thin text-xs md:text-sm  md:flex justify-center items-center  ">
        {truncateString(movie?.overview,140)}
            </p>
        <p className="whitespace-normal text-white/50 my-4 md:my-[44px] font-thin text-xs md:text-sm  flex md:hidden  ">
        2 S . 26 Ep | 3.86 Gb
        {movie.vote_average}
        {movie.vote_average}

            </p>
        <p className="whitespace-normal text-white/50 my-4 md:my-[44px] font-thin text-xs md:text-sm  text-yellow-500 gap-[9.2px] flex md:hidden   ">
        <FaStar/> <FaStar/> <FaStar/>  <FaStar/><BsStar/>
            </p>
           
       </div>
         
   <div className=' md:flex justify-center flex  items-center gap-[14px]'>
    <button className='bg-white rounded-full w-[117px] flex justify-center items-center gap-[13px] px-[8px] py-[20px] md:px-5  md:py-[12px]'><FaPlay /> play</button>
    

   <button id={movie.id} onClick={()=>handleCheck(movie.id)} className='hover:bg-[#00b5676c] rounded-full   flex justify-center  '> { movie.checked===true ? <>
   <div className='    rounded-full  object-cover scale-95  relative'>
    <Image src={Checks} width={50} height={50} alt='n' />
   </div>

   </>  :<BsArrowDown size={40}  className=' p-3  bg-[#00B59833] rounded-full   text-white  '/>  }
   </button>
   </div>
       
    </div>
    </div>
   


        </div>
        </div>
       
        </>
      ))}
            </div>
           

           
             
       
            
             

    
            

    </div> 
   
     
    </div>
  )
}

export default Row2



export const getStaticProps=async()=>{
  const res= await fetch(requests.requestTrending);
  console.log(res);
  const data =await res.json()
 
return{
  props:{
    Movies:data
  } 

}


}