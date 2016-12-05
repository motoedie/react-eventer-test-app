import './App.css';
import Header from './Header';
import React, { Component } from 'react';
import { EventBridge } from 'react-eventer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBridge>
          <Header />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </EventBridge>
      </div>
    );
  }
}

export default App;
