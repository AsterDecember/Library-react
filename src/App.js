import React, { Component } from 'react';
import ElementView from './components/ElementView/ElementView';
import NavBar from './components/NavBar/NavBar';
import Modal from './components/Modal/Modal';
import {  } from './App.styled';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ElementView/>
        {/* <Modal /> */}
        <div id="modal-root"></div>
      </div>
    );
  }
}

export default App;
