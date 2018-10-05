import React, { Component } from 'react'
import NavbarHeader from '../navBar/navbarHeader';
import axios from 'axios';
const moment = require('moment');


let ReactHighcharts = require('react-highcharts');
// let ReactHighcharts = require('../../../node_modules/highcharts/highcharts')

class News1 extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      historyBTCData: [],
      config: {
        xAxis: {
          categories: []
        },
        series: [ {
          data: []
            } ]
      }
    }
  }

  componentDidMount() {
    axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=BTG*&tsym=USD&limit=30`)
    .then((response) => {
      console.log(response.data)
      this.setState({ historyBTCData: response.data.Data })
    })
  }

 

  render() {
    let { historyBTCData } = this.state;
    let { categories } = this.state.config.xAxis
    let { data } = this.state.config.series[0]
    // console.log(this.state.config.series[0].data);
    // console.log(categories);

    let displayBTCData = historyBTCData.map((value, index) => {
      // console.log('VALUE: ', value.high, 'INDEX: ', index)
      // console.log( moment.unix(value.time).format("MMM Do YY") )
      categories.push(moment.unix(value.time).format("MMM Do"))
      data.push(value.high)
    })

    return ( 
      <div>
        <NavbarHeader/>
          <ReactHighcharts config={this.state.config} />         
      </div>
     );
  }
}
 
export default News1;