import React, { Component } from 'react'
import NavbarHeader from '../navBar/navbarHeader';
import axios from 'axios';
import css from './dashboard.css'
import News1 from '../new1/news1';
import CryptoTableHeader from './cryptoTableheader';
import { Table } from 'reactstrap';
let _ = require('lodash');

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      masterCryptoNameList: [], // ALL CRYPTO NAME
      allCryptoData: [],
     }

  }

  componentDidMount() {   
    let { name } = this.state
    axios.get(`https://api.coinmarketcap.com/v2/ticker/`)
    .then((response) => {
      // console.log(response.data.data)
      this.setState({ allCryptoData: response.data.data })
    });

  
  }


  render() { 
    let { allCryptoData } = this.state
    let multlayerCrypto = _.map(allCryptoData)
    // console.log(multlayerCrypto);

    let displayCrypto = multlayerCrypto.map((value, index) => {
      console.log('VALUE:', value, 'INDEX: ', index)
      return(
      
          <tbody>
            <tr>
              <td>{ index + 1 }</td>
              <td>
                <img></img>
                { value.name }
              </td>
              <td>${ value.quotes.USD.market_cap }</td>
              <td>${ value.quotes.USD.price }</td>
              <td>{ value.quotes.USD.percent_change_1h }%</td>
              <td>{ value.quotes.USD.percent_change_24h }%</td>
              <td>{ value.quotes.USD.percent_change_7d }%</td>
            </tr>
          </tbody>
    
      )
    })


    return ( 
      <div>
        <NavbarHeader/>
          <Table size="sm" hover bordered >
            <CryptoTableHeader/>
              { displayCrypto }
       
      

        </Table>
        
      </div>
     );
  }
}
 
export default Dashboard;