import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from './api/firebase';

import Loader from './components/loader/Loader';
import Navigation from './components/navigation/Navigation';

import { About, HomePage, Skills, Projects, Contact, PageNotFound, PageWIP } from './pages';


class App extends Component {

  state = {
    isLoading: true,
    isWebsiteOpen: true
  }

  componentDidMount() {
    this.firebaseRefOpen= firebase.database().ref('/website_open');
    this.firebaseCallbackOpen = this.firebaseRefOpen.on('value', (snap) => {
        this.setState({ isWebsiteOpen: snap.val(), isLoading: false });
    });
  }

  componentWillUnmount() {
    this.firebaseRefOpen.off('value', this.firebaseCallbackOpen);
  }

  render() {
    return (
      <Router>
          { this.state.isLoading ? (
            <Loader />
          ) : (
            !this.state.isWebsiteOpen ? (
              <Switch>
                <Route exact path="/" component={PageWIP} />
                <Route component={PageNotFound} />
              </Switch>
            ) : (
              <div>
                <Navigation />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about" component={About} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/contact" component={Contact} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            )
          )}
        </Router>
    );
  }
}

export default App;