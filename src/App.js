import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HealthVisual from './component/HealthVisual'
import {pub} from './data/hospitalizations.js'

class App extends Component {
  render() {
    var x = JSON.parse(pub)
    console.log(x)
    return (
      <div className="App">

        <HealthVisual />
      </div>
    );
  }
}

export default App;
