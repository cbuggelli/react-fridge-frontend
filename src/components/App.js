import React, { Component } from 'react';
import NavBar from './NavBar'
import FridgeContainer from './FridgeContainer'


import '../App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar />
        <FridgeContainer />
      </div>
    );
  }
}

export default App;
