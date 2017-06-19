import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

export default function FoodList(props){
  return (
    <div>
      <h1>Foods:</h1>
      <ul>
        {props.foods.map((food) => (
          <li key={food.id} className="food"><Link to={`/foods/${food.id}`}>{ food.name }</Link></li>
          )
        )}
      </ul>
    </div>
  )
}
