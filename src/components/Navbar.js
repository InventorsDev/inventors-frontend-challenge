import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

import {FaBars, FaSearch, FaTimes} from 'react-icons/fa';
const Navbar = () => {
  const[toggle,setToggle]=useState(true)
  const[search,setSearch]=useState(false)
  const handleToggle=()=>{
   setToggle(!toggle)
  }

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrollY(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shouldChangeColor = scrollY > 10;

  return (
    <div className='relative   transition delay-300 ease-in ' >
      <nav className=' flex px-[19px]  md:px-[50px]  lg:px-[160px]  justify-between items-center   md:flex-row gap-4 p-5'>
        {/* logo  */}
        <div className='hidden md:flex z-20 justify-center gap-4 text-white  items-center'>
           <Image src={Logo} className=' h-[36px] w-[36px]'  alt='logo'/>
        <h1>Inventors</h1>
        </div>
      

        <ul className=' z-20   gap-5 hidden  md:flex'>
            <li className=' text-white  font-semibold hover:font-bold'><Link href={'/'}>Home</Link></li>
            <li className='text-gray-400 font-semibold hover:font-bold hover:text-white'><Link  href={'/discover'}>Discover</Link></li>
            <li className='text-gray-300 font-semibold hover:font-bold hover:text-white'><Link  href={'/watchlist'}>Watchlist</Link></li>
            <li className='text-gray-300 font-semibold hover:font-bold hover:text-white'><Link  href={'/live'}>Live TV</Link></li>
        </ul>
        <div className={`cursor-pointer  z-40 fixed w-full top-0 left-0  transition delay-300 ease-in  backdrop-blur-sm  ${toggle? '':' h-screen  bg-[#0C1516]/50 '}    text-white md:hidden`}>
 
        <div className={`flex gap-3 ${shouldChangeColor ?'bg-[#0C1516]':'' }   p-3 justify-end fixed top-0  right-0 z-30 w-full md:hidden  items-center`}>
          {/* search */}
          <div className=' absolute p-4  left-0  z-70'>
            {toggle ?
             <FaBars size={30} onClick={handleToggle} className='z-70  text-white'/>
             :
             <FaTimes size={30} onClick={handleToggle} className='z-80  text-white'/>
          }
          </div>
          <div className='  transition delay-300 ease-in  z-20 flex justify-center items-center bg-none md:bg-white/20  px-4 py-2 rounded-full '>
              <FaSearch onClick={()=>setSearch(!search)} className='transition delay-200 ease-out text-white'/>
             <input type="text" className={` ${search ? 'block mx-3 p-2  bg-[#2a2929b3] rounded-lg ' : 'hidden'} transition delay-200 ease-out md:block bg-transparent  border-none border-spacing-0 h-9`} placeholder=' search ...'  name="" id="" />
          </div>
          <Image src={Logo} className=' z-20 h-[36px] w-[36px]'  alt='logo'/>
          
         
        </div>
            

          <div className={`w-full h-[100vh]  justify-center items-center  absolute top-[4em]  ${toggle? '   transition delay-300 ease-in left-[-100vw] ':'left-0  hover:scale-[1.23]  transition delay-800 ease-in-out '}` }>
          <ul  style={ toggle?{top:"-300vw",transition:".3s ease"}:{top:"38px",transition:".3s ease"}} className='  p-5  gap-5 flex text-[1.3em] flex-col justify-center  absolute  h-[80vh] w-full z-[909] items-center   w-'>
            <li className=' text-white  font-semibold  hover:scale-[1.23]  transition hover:delay-100 ease-in  hover:font-bold'>
              <Link onClick={()=>setToggle(!toggle)} href={'/'}>
                Home
                </Link>
              
              </li>
            <li className='text-gray-400 font-semibold   hover:scale-[1.23]  transition hover:delay-100 ease-in   hover:font-bold hover:text-white'>
             <Link onClick={()=>setToggle(!toggle)} href={'/'}>
             
                Discover
                </Link>
                </li>
            <li className='text-gray-400 font-semibold  hover:scale-[1.23]  transition hover:delay-100 ease-in  hover:font-bold hover:text-white'>
            <Link onClick={()=>setToggle(!toggle)} href={'/'}>                Watchlist
                </Link>
                </li>
            <li className='text-gray-400 font-semibold  hover:scale-[1.23]  transition hover:delay-100 ease-in hover:font-bold hover:text-white'>
              {/* <Link  href={'/live'}> */}
              <Link onClick={()=>setToggle(!toggle)} href={'/'}>
                Live TV
                </Link>
              </li>
            <div className='  backdrop-blur-3xl p-4  from-[#01140b]  bg-gradient-radial flex gap-[2em]'>
  <button className='  from-slate-200 bg-gradient-to-r  w-12/12 text-gray-100 font-bold  hover:scale-[1.1]  transition hover:delay-100 ease-in   rounded-md p-2'>Sign Up</button>
            <button className='  from-slate-200 bg-gradient-to-l  w-12/12 text-[#fff] font-bold  hover:scale-[1.1]  transition hover:delay-100 ease-in   rounded-md p-2'>Sign In</button>
   
            </div>
               </ul>
            
          </div>
           

            
        </div>

      </nav>
      
    </div>
  )
}

export default Navbar
