import React, { Component } from 'react'
// import FridgeAdapter from '../adapters/index'
import FoodList from './FoodList'
import Form from './Form'

const url = 'http://localhost:3000/api/v1/foods'

export default class FridgeContainer extends Component {
  constructor(){
    super()
    this.state = {
      foods: []
    }

    this.createFood = this.createFood.bind(this)
    // this.deleteStudent = this.deleteStudent.bind(this)
    // this.updateStudent = this.updateStudent.bind(this)

  }

  componentDidMount(){
    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({ foods: data })
    })
  }

  createFood(food){
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'accept' : 'application/json',
      },
      body: JSON.stringify({
        food: {
          name: food.name.value,
          days: food.days.value,
          quantity: food.quantity.value,
          category_id: food.category_id.value
        }
      })
    })
    .then(res => res.json())
  }

  render() {

    return (
      <div className="row">
        <div className="col-lg-4">
          <FoodList foods={this.state.foods} />
          <Form onSubmit={this.createFood.bind(this)} />

        </div>
      </div>
    )
  }
}
