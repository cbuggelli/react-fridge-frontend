import React, { Component } from 'react'
import FoodList from './FoodList'
const url = "http://localhost3000:api/v1/foods"

export default class FridgeContainer extends Component {
  constructor(){
    super()
    this.state = {
      foods: []
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-4">
          <h1>Hi</h1>
          <FoodList foods={this.state.foods} />

        </div>
      </div>
    )
  }
}
