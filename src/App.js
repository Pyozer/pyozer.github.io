import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from './components/loader/Loader';
import Navigation from './components/navigation/Navigation';

import HomePage from './pages/HomePage';
import About from './pages/About';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }  

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000)
  }

  render() {
    return (
      <Router>
          <div>
            <Navigation />
            { this.state.isLoading ? (
              <Loader />
            ) : (
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/home" component={HomePage} />
                <Route path="/about" component={About} />
                <Route component={NoMatch} />
              </Switch>
            )}
          </div>
        </Router>
    );
  }
}

const NoMatch = ({ location }) => (
  <h3 className="text-white">
    No match for <code>{location.pathname}</code>
  </h3>
);

export default App;