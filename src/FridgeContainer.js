import React, { Component } from 'react'

const url = "http://localhost3000:api/v1/food"

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
          <FoodList />

        </div>
      </div>
    )
  }
}
