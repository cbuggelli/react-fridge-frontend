import React, { Component } from 'react'
import FoodList from './FoodList'
import Form from './Form'

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

  // postFood(){
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'content-type' : 'application/json',
  //       'accept' : 'application/json'
  //     },
  //     body: JSON.stringify({
  //       foods: {
  //         name: name,
  //         days_until_expiration: days_until_expiration,
  //         quantity: quantity,
  //         category_id: category_id
  //       }
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(food => this.setState((pState) => {
  //       return {
  //         foods: [...pState.foods, food]
  //       }
  //     })
  //   )
  // }

  render() {

    return (
      <div className="row">
        <div className="col-lg-4">
          <FoodList foods={this.state.foods} />
          <Form />

        </div>
      </div>
    )
  }
}
