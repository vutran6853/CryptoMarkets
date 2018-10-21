import React, { Component } from 'react'
import NavbarHeader from '../navBar/navbarHeader';
import axios from 'axios';
import css from './dashboard.css'
// import Cryptogeneric from '../allCryptoMartketChart/cryptoGenericCharts';
import CryptoTableHeader from './cryptoTableheader';
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap';
let _ = require('lodash');
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
    let { name } = this.state
    axios.get(`https://api.coinmarketcap.com/v2/ticker/`)
    .then((response) => {
      // console.log(response.data.data)
      this.setState({ allCryptoData: response.data.data })
    });
    
    axios.get('/api/getcryptoImage/image')
    .then((response) => {
      // console.log(response.data)
      this.setState({ imageData: response.data})
    })

  }

  componentDidUpdate(prevprop, prevState) {
    let oldList = this.state.imageData
    
    for(let i = 0; i < oldList.length; i++) {
      // console.log(oldList[i].bitcoinimage_url)
      imageList.push(oldList[i].bitcoinimage_url)
    }
    // console.log(imageList);
  }


  render() { 
    let { allCryptoData } = this.state
    let multlayerCrypto = _.map(allCryptoData)
    // console.log(this.state.imageData)
   
    



    let displayCrypto = multlayerCrypto.map((value, index) => {
      // console.log('VALUE:', value, 'INDEX: ', index)
      let imageList1 = imageList
      console.log(imageList1)
      coinName.push(value.symbol)
      return(
      
          <tbody>
            <tr>
              <td>{ index + 1 }</td>
              <td>
                <img src={ imageList1[index] }></img>
                <Link to={`/api/Crypto/${ value.symbol }`}> 
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