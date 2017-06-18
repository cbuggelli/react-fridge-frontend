import React, { Component } from 'react'
import CountdownTimer from './CountdownTimer'

export default class FoodDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      food: this.props.food
    }
  }



  render() {
    return (
      <div>
        <div className="row">
        Food: </div>
        <div><strong>{this.state.food.name}</strong></div>
        <CountdownTimer foodName={this.state.food.name} timeRemaining={this.state.food.days_until_expiration} />
      </div>
    )
  }
}
