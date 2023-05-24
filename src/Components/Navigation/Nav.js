import './Nav.css';
import logo from '../../Assets/Images/Logo.svg';
import search from '../../Assets/Images/Search.svg';
import user from '../../Assets/Images/User.png';

function Nav () {
    

    return (
         <header className="navSection">
           <section className="header">

            <div className='logoname'>
             <img src={logo} className='logo' alt=''/>
             <span className='inventors'>Inventors</span>
            </div> 

            <div className='link-contain'>
              <span className='links' >Home</span>
              <span className='links' >Discover</span>
              <span className='links' >WatchList</span>
              <span className='links' >LiveTv</span>
            </div>

            <div className='searchuser'>
             <div className='searcher'>
              <button type='submit'  className='search'><img src={search}  alt=''/></button>
              <input type='text' placeholder='search'  className='search'/>
             </div>

             <div className='user-contain'>
              <img src={user} className='user' alt=''/>
             </div>
            </div>
            
           </section>
         </header>
    )
}

export default Nav;