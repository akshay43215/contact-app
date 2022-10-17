
import './Nav.css'
import {Link} from 'react-router-dom';
import Favorite from '../../Pages/Favorite';

function Nav() {
  return (
    <header>
      
      <h1 id='nav-right'>Navbar</h1>

      <section id='nav-left'>
 
        <Link to='/'>
        <p id='nav-right'>Home</p>
        </Link>

        <Link to='favorite'>
        <p>Favorites</p>
        </Link>
 
      </section>

    </header>
  )
}

export default Nav;