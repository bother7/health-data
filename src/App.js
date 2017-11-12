import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HealthVisual from './component/HealthVisual'
// import {pub} from './data/hospitalizations.js'
import pub from './data/hospitalizations.json';

class App extends Component {
  render() {
    console.log(JSON.parse(pub))
    return (
      <div className="App">

        <HealthVisual />
      </div>
    );
  }
}

export default App;
