import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CountdownTimer from './CountdownTimer'
import moment from 'moment'

export default class FoodDetail extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context){
    super(props, context)
    this.state = {
      name: this.props.food.name,
      expiration_date: this.props.food.expiration_date,
      quantity: this.props.food.quantity,
      category_id: this.props.food.category_id,
      created_at: this.props.food.created_at,
      foodObj: this.props.food
    }
    this.buttons = this.buttons.bind(this)
    this.feelingLucky = this.feelingLucky.bind(this)
    this.throwAway = this.throwAway.bind(this)
    this.createdAtDate = this.createdAtDate.bind(this)
  }

  feelingLucky(id, food){
    this.props.deleteFood(id, food)
    this.setState({
      quantity: this.state.quantity - 1
    })
    return alert("You died of dysentery.")
  }

  throwAway(id, food){
    this.props.deleteFood(id, food)
    this.setState({
      quantity: this.state.quantity - 1
    })
  }

  buttons(){
    if (CountdownTimer.isExpired() !== true){
      return (
        <button onClick={() => this.throwAway(this.props.food.id,this.state.foodObj) } className="btn btn-danger">Eat food</button>
      )
    } else {
      return (
        <div>
          <button onClick={() => this.feelingLucky(this.props.food.id, this.props.food) } className="btn btn-danger">I'm feeling lucky</button>
          <button onClick={() => this.throwAway(this.props.food.id, this.props.food) } className="btn btn-danger">Throw away</button>
        </div>
      )
    }
  }

  createdAtDate(){
    return moment(this.state.created_at).format('MMMM Do YYYY')
  }

  render(){
    return (
      <div className="container-fluid">
        <div className="foodlist">
          <div className="row">
            <h1>Food: </h1>
            <div><h1>{this.state.name}</h1></div>
            <div><h3>Quantity: {this.state.quantity}</h3></div>
            <div><h3>Added to The Fridge on {this.createdAtDate()}</h3></div>
            <div>
              <CountdownTimer expiration_date={this.state.expiration_date} foodName={this.state.name} />
            </div>
            {this.buttons()}
          </div>
        </div>
      </div>
    )
  }
}
