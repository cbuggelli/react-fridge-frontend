import React, { Component } from 'react'

export default function FoodList(props) {
  return (
    <div>
      <h1>hi</h1>
      <ul>
        {props.foods.map((food) => (
          <li key={food.id}>{food.name}</li>
          )
        )}
      </ul>
    </div>

  )
}
