import React, { Component } from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

class NavbarHeader extends Component {
  render() { 
    return ( 
      <div className='navBarheader' >   
        <Link to='/' >
          <Button className='btn-info' >Home</Button>
        </Link>
      </div>
     );
  }
}
 
export default NavbarHeader;