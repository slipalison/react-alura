import React, { Component } from 'react';
import Header from './components/Header'
import TimeLine from './components/TimeLine'
import {createStore} from 'redux';

class App extends Component {
  render() {
    return (
      <div id="root">
      <div className="main">
      <Header />
      <TimeLine  {...this.props} />
      </div> 
    </div> 
    );
  }
}

export default App;
