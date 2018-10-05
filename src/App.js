import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import NavbarHeader from './component/navBar/navbarHeader';
import DashBoard from './component/dashboard/dashboard';

class App extends Component {
  constructor(props) {
    super(props) 

      this.state = {
   
      }

  }
  render() {
    return (
      <HashRouter>
        <div className="App">
            { routes }
        </div>
      </HashRouter>
      
    );
  }
}

export default App;