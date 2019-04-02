import React, { Component } from 'react'
import NavbarHeader from '../navBar/navbarHeader';
import axios from 'axios';
import './dashboard.css';
import CryptoTableHeader from './cryptoTableheader';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

let lodash = require('lodash');
let coinName = []
let imageList = []

// console.log(coinName)
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      masterCryptoNameList: [], 
      allCryptoData: [],       // ALL CRYPTO DATA
      tempCrytopData: [],
      imageData: []
     }
  }

  componentDidMount() {   
    axios.get(`https://api.coinmarketcap.com/v2/ticker/`)
    .then((response) => this.setState({ allCryptoData: response.data.data }))
    .catch((error) => console.log(`Danger Front End ${ error }`));

    axios.get('/api/getcryptoImage/image')
    .then((response) => this.setState({ imageData: response.data}))
    .catch((error) => console.log(`Danger Front End ${ error }`))
  }

  componentDidUpdate(prevprop, prevState) {
    let oldList = this.state.imageData
    
    for(let i = 0; i < oldList.length; i++) {
      imageList.push(oldList[i].bitcoinimage_url)
    }
  }

  render() { 
    let { allCryptoData } = this.state
    let multlayerCrypto = lodash.map(allCryptoData)

    let displayCrypto = multlayerCrypto.map((value, index) => {
      let imageList1 = imageList
      coinName.push(value.symbol)
      return(
          <tbody>
            <tr>
              <td>{ index + 1 }</td>
              <td>
                <img src={ imageList1[index] } alt={ value.symbol }></img>
                <Link to={ `/api/Crypto/${ value.symbol }` }> 
                    { value.name }
                </Link>
              </td>
              <td>$ { value.quotes.USD.market_cap }</td>
              <td>$ { value.quotes.USD.price }</td>
              <td>{ value.quotes.USD.percent_change_1h } %</td>
              <td>{ value.quotes.USD.percent_change_24h } %</td>
              <td>{ value.quotes.USD.percent_change_7d } %</td>
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