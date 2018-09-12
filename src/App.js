import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ElementTable from './components/ElementTable';

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
          <ElementTable>

          </ElementTable>
      </div>
    );
  }
}

export default App;
