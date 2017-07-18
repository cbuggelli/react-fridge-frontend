import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import FridgeAdapter from '../adapters'
import FoodList from './FoodList'
import Form from './Form'
import FoodDetail from './FoodDetail'
import Drawers from './Drawers'
import CatShow from './CatShow'

export default class FridgeContainer extends Component {
  constructor(){
    super()
    this.state = {
      foods: [],
      categories: []
    }

    this.createFood = this.createFood.bind(this)
    this.deleteFood = this.deleteFood.bind(this)

  }

  componentDidMount(){
    FridgeAdapter.all()
    .then(data => {
      this.setState({ foods: data })
    })
    FridgeAdapter.allCats()
    .then(data => {
      this.setState({ categories: data })
    })
  }

  createFood(food){
    FridgeAdapter.create(food)
    .then(data => this.setState((previousState) => {
      return {
        foods: [...previousState.foods, data]
      }
    }))
  }

  createCat(cat){
    FridgeAdapter.createCat(cat)
    .then(cat => this.setState((previousState) => {
        return {
          categories: [...previousState.categories, cat]
        }
      })
    )
  }

  deleteFood(id,food){
    if (parseInt(food.quantity) === 1){
    FridgeAdapter.destroy(id)
    .then( () => {
      this.setState( previousState => {
        return {
          foods: previousState.foods.filter( food => food.id !== id )
        }
        .then(window.location.href = "http://localhost:3001/foods")

      })

    })
  } else {
    food.quantity = (parseInt(food.quantity) - 1).toString()
    var newFood = this.state.foods.map(function(item) {
      if (item.id === id){
        return food
      } else {
        return item
      }
    })
    this.setState({ foods: newFood })
    }
  }

  render() {
    return (
      <div className="row">
        <div className="form">
          <Form createFood={this.createFood.bind(this)} categories={this.state.categories} type="Add a food" />
        </div>
        <div className='col-md-8'>
          <Switch>
            <Route exact path = '/drawers' render= {() =><Drawers cats={this.state.categories}  />}/>
            <Route exact path='/drawers/:id' render={(routerProps) => {
              const id = parseInt(routerProps.match.params.id)
              const drawer = this.state.categories.find( d =>  d.id === parseInt(id) )
                if (!drawer){
                routerProps.history.push("/drawers")
                return null
              }
              return <CatShow drawer={drawer} foods = {this.state.foods} id={id}/>
            }} />
            <Route exact path='/drawers/new' render={() => <Form newCat={this.createCat.bind(this)} type="Add a Drawer"/>} />


            <Route exact path='/foods/new' render={() => <Form createFood={this.createFood.bind(this)} categories={this.state.categories} type="Add a food"/>} />

            <Route exact path = '/foods' render= {() => <FoodList foods={this.state.foods} />}/>
            <Route exact path='/foods/:id' render={(routerProps) => {
              const id = routerProps.match.params.id
              const food = this.state.foods.find( s =>  s.id === parseInt(id) )
                if (!food){
                routerProps.history.push("/foods")
                return null
              }
              return <FoodDetail food={food} deleteFood={this.deleteFood}/>
            }} />
          </Switch>

        </div>
      </div>
    )
  }
}
