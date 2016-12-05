import React from 'react';
import { Eventer } from 'react-eventer';
import logo from './logo.svg';

const Header = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>Welcome to React</h2>
  </div>
);

export default Eventer()(Header);
