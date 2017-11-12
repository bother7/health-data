import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HealthVisual from './component/HealthVisual'
import {pub} from './data/hospitalizations.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>{pub}</p>
        <HealthVisual />
      </div>
    );
  }
}

export default App;
