import React, { Component } from 'react'
import NavbarHeader from '../navBar/navbarHeader';
import axios from 'axios';

class News2 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      bitcoinNews: [],
     }
  }

  componentDidMount() {
    let newsKey = process.env.REACT_APP_NEWS_KEY
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-03&sortBy=publishedAt&apiKey=${newsKey}`)
    .then((response) => {
      // console.log(response.data.articles)
      this.setState({ bitcoinNews: response.data.articles })
    })
  }
  
  render() { 
   
    return ( 
      <div>
        <NavbarHeader/>

       
      </div>
     );
  }
}
 
export default News2;