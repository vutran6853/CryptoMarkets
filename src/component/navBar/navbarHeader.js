import React, { Component } from 'react'
import css from './header.css';
import { Link } from 'react-router-dom';

class NavbarHeader extends Component {
  render() { 
    return ( 
      <div className='navBarheader' >
        
      <Link to='/' >
        <button>Home</button>
      </Link>

      <Link to='/new1'>
        <button>appleNews</button>
      </Link>

      <Link to='/new2'>
        <button>Crypro</button>
      </Link>

      <Link to='/new3'>
        <button>WallStreet</button>
      </Link>

      </div>
     );
  }
}
 
export default NavbarHeader;