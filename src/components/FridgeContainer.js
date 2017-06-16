import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FoodList from './FoodList'
import Form from './Form'
import FoodDetail from './FoodDetail'

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
      this.setState({ foods: data })
    })
  }

  createFood(food){
    debugger
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json',
        'accept' : 'application/json'
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
        <div className='col-md-8'>
          <Switch>
            <Route exact path = '/foods' render= {() => <FoodList foods={this.state.foods} />}/>
            }
            <Route exact path='/foods/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const food = this.state.foods.find( s =>  s.id === parseInt(id) )
              return <FoodDetail food={food}/>
            }} />
          </Switch>
        </div>
      </div>
    )
  }
}
