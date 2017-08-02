import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function FoodList(props){
  return (
    <div className="container-fluid">
      <div className="foodlist">
        <div className="btn-group">
          <div className="row">
          <h1>Foods:</h1>
            {props.foods.map((food) => (
              <div key={food.id} className="button">
                <Link className="btn btn-lg btn-warning inverse" to={`/foods/${food.id}`}>{ food.name }</Link>
              </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
