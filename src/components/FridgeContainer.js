import React, { Component } from 'react'
import FoodList from './FoodList'
const url = 'http://localhost:3000/api/v1/foods'

export default class FridgeContainer extends Component {
  constructor(){
    super()
    this.state = {
      foods: []
    }

  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({ foods: data })
    })
  }

  render() {

    return (
      <div className="row">
        <div className="col-lg-4">
          <FoodList foods={this.state.foods} />

        </div>
      </div>
    )
  }
}
