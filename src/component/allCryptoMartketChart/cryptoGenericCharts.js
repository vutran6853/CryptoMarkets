import React, { Component } from 'react'
import NavbarHeader from '../navBar/navbarHeader';
import axios from 'axios';
const moment = require('moment');


let ReactHighcharts = require('react-highcharts');

class CryproBTC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historyBTCData: [],
      config: {
        xAxis: {
          categories: []
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          }
        },
        title: {
          text: 'Europe time zones'
        },
        name: {
          text: 'My title'
        },
        series: [{
          name: this.props.match.params.value,
          type: "line",
          data: []
        }]
      },
      config: {
        xAxis: {
          categories: []
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          }
        },
        title: {
          text: 'Europe time zones'
        },
        name: {
          text: 'My title'
        },
        series: [{
          name: this.props.match.params.value,
          type: "line",
          data: []
        }]
      }
    }
  }  

  componentDidMount() {
    axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.match.params.value}&tsym=USD&limit=30`)
    .then((response) => {
      // console.log(response.data)
      console.log(`Sent req to ${this.props.match.params.value}`)
      this.setState({ historyBTCData: response.data.Data })
    })

    axios.get(`https://chasing-coins.com/api/v1/std/logo/BTC`)
    .then((response) => {
      console.log(response)
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
 
export default CryproBTC;