import React, { Component } from 'react'



export default class FoodDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      food: this.props.food
    }
  }
  render() {
    return (
      <div className="row">
      Details!
      {this.state.food.name}
      </div>
    )
  }
}
