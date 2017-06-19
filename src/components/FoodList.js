import React from 'react'
import { Link } from 'react-router-dom'

export default function FoodList(props){
  return (
    <div className="foodlist">
      <h1>Foods:</h1>
      <ul>
        {props.foods.map((food) => (
          <li key={food.id}><Link to={`/foods/${food.id}`}>{ food.name }</Link></li>
          )
        )}
      </ul>
    </div>
  )
}
