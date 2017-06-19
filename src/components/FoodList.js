import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'



export default function FoodList(props){
  return (
    <div className="container fluid">
    <div className="foodlist">
      <div className="btn-group">
      <div className="row">
      <h1>Foods:</h1>

        {props.foods.map((food) => (
          <div key={food.id} className="col-md-2"><button className="btn btn-lg btn-primary"><Link to={`/foods/${food.id}`}>{ food.name }</Link></button></div>
          )
        )}
        </div>
        </div>
        </div>
    </div>
  )
}
