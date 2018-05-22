import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from './api/firebase';

import Loader from './components/loader/Loader';
import Navigation from './components/navigation/Navigation';

import HomePage from './pages/HomePage';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import PageWIP from './pages/PageWIP';

class App extends Component {

  state = {
    isLoading: true,
    isWebsiteOpen: false
  }

  componentDidMount() {
    this.firebaseRefOpen= firebase.database().ref('/website_open');
    this.firebaseCallbackOpen = this.firebaseRefOpen.on('value', (snap) => {
        this.setState({ isWebsiteOpen: snap.val() });
    });

    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1000)
  }

  componentWillUnmount() {
    this.firebaseRefOpen.off('value', this.firebaseCallbackOpen);
  }

  render() {
    return (
      <Router>
          {!this.state.isWebsiteOpen ? (
            <PageWIP />
          ) : (
            <div>
              <Navigation />
              { this.state.isLoading ? (
                <Loader />
              ) : (
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={About} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                  <Route component={PageNotFound} />
                </Switch>
              )}
            </div>
          )}
        </Router>
    );
  }
}

export default App;