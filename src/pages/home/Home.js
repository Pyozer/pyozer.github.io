import React, { Component } from 'react';

import Navbar from '../../components/navbar/Navbar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Card from '../../components/card/Card';

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Card>
            <h4>YO TOUT LE MONDE C'EST SQUEEZIE !</h4>

            <button className="btn btn-primary">Join us</button>
        </Card>
      </div>
    );
  }
}

export default Home;
