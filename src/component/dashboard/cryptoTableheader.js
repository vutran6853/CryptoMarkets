import React, { Component } from 'react';

class CryptoTableHeader extends Component {
  render() { 
    return ( 
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
            </tr>
          </thead>
     );
  }
}
 
export default CryptoTableHeader;