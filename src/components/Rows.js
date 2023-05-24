import { requests } from '@/Request';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCheck, FaChevronLeft, FaChevronRight, FaPlus, FaPlusCircle } from 'react-icons/fa'

const Rows = ({Movies,title,RowId,fetchUrl}) => {
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

const viewAll=()=>{
  setView(!view)
}



  return (
    <div  className='z-40 relative w-full  '>  
     <div data-aos="fade-down"  data-aos-duration='1000' transition-duration="1000" className=' flex justify-between items-center w-full  my-0 md:my-[40px]'>
                 <h1 className='  text-white text-[16px] font-[700]'>{title}</h1>
               <div className=' flex  gap-4 px-6 justify-center  items-center my-[24px] md:my-0 ' > 
               <button onClick={()=>viewAll(RowId)} className='  no-underline bg-[#FFFFFF1A] md:bg-[#fff0] py-[4px] px-[10px] rounded-[48px] md:p-0 md:underline  text-[#FFA900] border-none  text-[10px] md:text-[20px] font-[400]'> {view===false? 'View all': " View less" }</button>
                   <p className='hidden md:block text-white text-[3.5em] font-thin'>|</p>

               <FaChevronLeft onClick={slideLeft} className='hidden md:block  p-2  cursor-pointer  text-white/70 hover:scale-[1.5] transition ease-in delay-100 hover:text-white border border-white rounded-full     ' size={30}/>
                <FaChevronRight onClick={slideRight}className=' hidden md:block  p-2 cursor-pointer text-white/70 hover:scale-[1.5] transition ease-in delay-100 hover:text-white border border-white rounded-full     ' size={30}/>
               </div> 
     </div>
              <div  className=' z-40 flex   justify-center items-center gap-[32px] w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide '>

           
              
              
               <div  id={"slider"+RowId} className={` w-full h-full ${view? 'grid grid-cols-3':'flex' }  grid-cols-3  gap-[17px] overflow-x-scroll  overflow-hidden whitespace-nowrap scroll-smooth  my-[24px] md:my-[40px]  scroll scrollbar-hide relative`}>
                
              
                {movies?.map((movie,id)=>(
        <>
        {/* {setMovies({...movie,check:false])} */}


        <div   className=' flex  flex-col  h-[190.82px] '>
           <div className={`  w-[110.7px] md:h-[256px]   ${view? 'md:w-full':' md:w-[256px]' } md:w-[256px] lg:w-[256px] my-0 md:my-8 `}>
           {/* {/* <div className='  h-full md:h-[256px] w-full  my-1 md:my-8  >  */}
           <div data-aos="fade-down"  data-aos-duration='1000' transition-duration="1000" key={id} className=" h-fit  cursor-pointer relative ">
           
      <img className="md:w-full h-[98px]  lg:h-[256px] rounded-t-[6px] md:rounded-[14px] block object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} />

      <button id={movie.id} onClick={()=>handleCheck(movie.id)} className='bg-[#00B59833] hover:bg-[#00b5676c] rounded-full  z-20 right-2 md:right-4 top-2 absolute p-2 md:p-3'> { movie.checked===true ? <FaCheck  className='    text-[#00B598]  '/>   :<FaPlus  className='     text-white  '/>  }</button>
      
   

      <div className=" hidden md:block absolute top-0 w-full h-full bg-none md:hover:bg-black/50 opacity-0 hover:opacity-100 text-white"> 
        <p className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center p-1">{movie?.title}</p>
       
      </div>
      
    </div>
    
        </div>
         <div className=' justify-center items-center md:hidden h-[42px] bg-[#FFFFFF1A] flex flex-col gap-3 rounded-b-[6px] p-2'>
          <p className="whitespace-normal text-white  text-[10px]  md:text-sm font-bold flex justify-center items-center  text-center ">{movie?.title} </p>
          {/* <p className="whitespace-normal text-white  text-[8px]  md:text-sm font-thin flex   ">{movie?.popularity} M </p> */}
        </div>
       
        
        </div>
       
        </>
      ))}
            </div>
           

           
             
       
            
             

    
            

    </div> 
   
     
    </div>
  )
}

export default Rows



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