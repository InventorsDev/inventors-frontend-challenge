import './Nav.css';
import logo from '../../Assets/Images/Logo.svg';
import search from '../../Assets/Images/Search.svg';
import user from '../../Assets/Images/User.png';

function Nav () {
    

    return (
         <header className="navSection">
           <section className="header">

            <div className='logoname'>
             <img src={logo} className='logo'/>
             <span className='inventors'>Inventors</span>
            </div> 

            <div className='link-contain'>
              <a className='links' >Home</a>
              <a className='links' >Discover</a>
              <a className='links' >WatchList</a>
              <a className='links' >LiveTv</a>
            </div>

            <div className='searchuser'>
             <div className='searcher'>
              <button type='submit'  className='search'><img src={search} /></button>
              <input type='text' placeholder='search'  className='search'/>
             </div>

             <div className='user-contain'>
              <img src={user} className='user'/>
             </div>
            </div>
           </section>
         </header>
    )
}

export default Nav;