import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HealthVisual from './component/HealthVisual'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HealthVisual />
      </div>
    );
  }
}

export default App;
