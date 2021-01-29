import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/layout/Header';

// sections - paths

import HelpersContainer from './helpers/HelpersContainer';

import Home from './components/sections/Home';

import Routes from './components/routing/Routes';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        
        <div id="app">
          
          <Fragment>
          <Switch>
            
          <Route exact path='/' component={Home} />
          <Route component={Routes} />
          </Switch>
          </Fragment>
          <HelpersContainer />
        </div>
      </Router>
    );
  }
}

export default App;
