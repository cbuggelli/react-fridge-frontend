import React, { Component } from 'react'
import CountdownTimer from './CountdownTimer'

export default class FoodDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: this.props.food.name,
      expiration_date: this.props.food.expiration_date,
      quantity: this.props.food.quantity,
      category_id: this.props.food.category_id,
      created_at: this.props.food.created_at
    }
    this.buttons = this.buttons.bind(this)
  }

  buttons(){
    if (CountdownTimer.isExpired() !== true){
      return (
        <button onClick={() => this.props.deleteFood(this.props.food.id) } className="btn btn-danger">Eat food</button>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.props.deleteFood(this.props.food.id) } className="btn btn-danger">I'm feeling lucky</button>
          <button onClick={() => this.props.deleteFood(this.props.food.id) } className="btn btn-danger">Throw away</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="row">
        Food: </div>
        <div><strong>{this.state.name}</strong></div>
        <div>
          <CountdownTimer expiration_date={this.state.expiration_date} foodName={this.state.name} />
        </div>
        {this.buttons()}

      </div>
    )
  }
}
