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
      <div>
        <div className="row">
        <h1> {`Food in the ${this.state.name} drawer:`} </h1>
        </div>
        <div>
          <ul>
          {this.state.foods.map((food) => (
            <li key={food.id} className="food"><Link to={`/foods/${food.id}`}>{ food.name }</Link></li>
            )
          )}
          </ul>
        </div>
      </div>
    )
  }
}
