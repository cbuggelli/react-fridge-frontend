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
      created_at: this.props.food.created_at,
      foodObj: this.props.food
    }
    this.buttons = this.buttons.bind(this)
  }

  buttons(){
    if (CountdownTimer.isExpired() !== true){
      return (
        <button onClick={() => this.props.deleteFood(this.props.food.id,this.state.foodObj) } className="btn btn-danger">Eat food</button>
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
        <div><h1>{this.state.name}</h1></div>
        <div>
        <h3> Bouught on: {this.state.created_at} </h3>
        <h3>Number left: {this.state.quantity}</h3>
        </div>
        <div>
          <CountdownTimer expiration_date={this.state.expiration_date} foodName={this.state.name} />
        </div>
        {this.buttons()}

      </div>
    )
  }
}
