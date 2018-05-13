import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from './components/loader/Loader';
import Navigation from './components/navigation/Navigation';

import HomePage from './pages/HomePage';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';

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
          <div className="d-flex flex-column h-100">
            <Navigation />
            { this.state.isLoading ? (
              <Loader />
            ) : (
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={About} />
                <Route component={PageNotFound} />
              </Switch>
            )}
          </div>
        </Router>
    );
  }
}

export default App;