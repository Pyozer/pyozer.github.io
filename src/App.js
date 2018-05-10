import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Loader from './components/loader/Loader';
import Navigation from './components/navigation/Navigation';

import HomePage from './pages/HomePage';

import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { isLoading: true }
  }  

  componentDidMount() {
    this.setState({ isLoading: false })
  }

  render() {
    if(this.state.isLoading)
      return <Loader />

    return (
      <Router>
        <Layout>
          <Navigation />
          <Layout>
              <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Accueil</Breadcrumb.Item>
                      <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb>

                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/home" component={HomePage} />
                    <Route component={NoMatch} />
                  </Switch>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                  Ant Design ©2016 Created by Ant UED
              </Footer>
          </Layout>
          </Layout>
        </Router>
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default App;