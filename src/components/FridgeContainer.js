import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FridgeAdapter from '../adapters'
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

    this.createFood = this.createFood.bind(this)
    // this.deleteStudent = this.deleteStudent.bind(this)
    // this.updateStudent = this.updateStudent.bind(this)

  }

  componentDidMount(){
    FridgeAdapter.all()
    .then(data => {
      this.setState({ foods: data })
    })
  }

  createFood(food){
    FridgeAdapter.create(food)
    .then(food => this.setState((previousState) => {
        return {
          students: [...previousState.foods, food]
        }
      })
    )
  }

  render() {

    return (
      <div className="row">
        <div className='col-md-8'>
          <Switch>
            <Route exact path='/foods/new' render={() => <Form createFood={this.createFood.bind(this)} type="Add a food"/>} />
            <Route exact path = '/foods' render= {() => <FoodList foods={this.state.foods} />}/>
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
