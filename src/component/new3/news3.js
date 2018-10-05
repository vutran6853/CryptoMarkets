import React, { Component } from 'react'
import NavbarHeader from '../navBar/navbarHeader';
import axios from 'axios';


class News3 extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      wallstreetNews: [],
     }
  }
  componentDidMount() {
    let newsKey = process.env.REACT_APP_NEWS_KEY
    axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${newsKey}`)
    .then((response) => {
      console.log(response.data)
      this.setState({ wallstreetNews: response.data.articles })
    })
  }

 
  render() { 

    return ( 
      <div>
        <NavbarHeader/>

        <p>wallstreetNews Component</p>
     
      </div>
     );
  }
}
 
export default News3;