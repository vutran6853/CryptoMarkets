import React, { Component } from 'react'
import NavbarHeader from '../navBar/navbarHeader';
import axios from 'axios';

const moment = require('moment');
const ReactHighcharts = require('react-highcharts');

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
            text: 'Price $'
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
            text: 'USD $'
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
    .then((response) => this.setState({ historyBTCData: response.data.Data }))
    .catch((error) => console.log(`Danger Front End ${ error }`))
  }

  render() {
    let { historyBTCData } = this.state;
    let { categories } = this.state.config.xAxis
    let { data } = this.state.config.series[0]

    let displayBTCData = historyBTCData.map((value, index) => {
      categories.push(moment.unix(value.time).format("MMM Do"))
      data.push(value.high)
    });

    return ( 
      <div>
        <NavbarHeader/>
          <ReactHighcharts config={this.state.config} />
      </div>
     );
  }
}
 
export default CryproBTC;