import React, { Component } from 'react';
import NavBar from './NavBar'
import FoodDetail from './FoodDetail'
import FoodList from './FoodList'
import FridgeContainer from './FridgeContainer'
import Form from './Form'
import { Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <FridgeContainer />
      </div>
    );
  }
}

export default App;
