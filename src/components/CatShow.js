import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class CatShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.drawer.name,
      foods: props.foods.filter(function(food){
        return food.category_id === props.id

      })
    }
  }


  render() {
    return (
      <div className="container-fluid">
      <div className="foodlist">
        <div className="btn-group">
        <div className="row">
        <h1> {`Food in the ${this.state.name} drawer:`} </h1>
          {this.state.foods.map((food) => (
            <div key={food.id} className="button">
              <Link className="btn btn-lg btn-warning" to={`/foods/${food.id}`}>{food.name}</Link>
            </div>
            )
          )}
          </div>
        </div>
      </div>
      </div>
    )
  }
}
