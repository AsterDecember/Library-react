import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ElementView from './components/ElementView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jaster</h1>
        </header>
        <p className="App-intro">
          Biblioteca
        </p>
          <ElementView>

          </ElementView>
      </div>
    );
  }
}

export default App;
