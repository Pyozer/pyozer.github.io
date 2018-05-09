import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Home from './pages/home/Home';

class App extends Component {

  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-12">
            <h1 className="text-white text-center">
              <FontAwesomeIcon icon="exclamation-triangle"/> PAGE EN COURS DE RECONSTRUCTION <FontAwesomeIcon icon="exclamation-triangle"/>
            </h1>
            <h3 className="text-white text-center">Bientôt disponible !</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
