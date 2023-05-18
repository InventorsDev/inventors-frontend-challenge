import logo from '../../Assets/Images/Frame.svg';
import user from '../../Assets/Images/Frame 90.png';

function Nav () {
    

    return (
         <header className="rectangle22">
           <section className="header">

            <div className='logoname'>
             <img src={logo} className='logo'/>
             <span className='inventors'>Inventors</span>
            </div> 

            <span className='link-contain'>
              <a className='links' >Home</a>
              <a className='links' >Discover</a>
              <a className='links' >WatchList</a>
              <a className='links' >LiveTv</a>
            </span>

            <span className='searcher'>
              <button type='submit'  className='search'><i className="fas fa-search"></i></button>
              <input type='text' placeholder='search'  className='search'/>
            </span>
            <img src={user} className='user'/>
      
           </section>
         </header>
    )
}

export default Nav;