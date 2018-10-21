import React, { Component } from 'react'
import css from './header.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class NavbarHeader extends Component {
  render() { 
    return ( 
      <div className='navBarheader' >
        
      <Link to='/' >
        <Button className='btn-info' >Home</Button>
      </Link>

      {/* <Link to='/'>
        <button>CryproBTC</button>
      </Link>

      <Link to='/Crypto/ZEC'>
        <button>CryptoETH</button>
      </Link>

      <Link to='/new3'>
        <button>WallStreet</button>
      </Link> */}

      </div>
     );
  }
}
 
export default NavbarHeader;