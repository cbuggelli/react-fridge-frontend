import React from 'react'
import { Link } from 'react-router-dom'
import Draggable, { DraggableCore } from 'react-draggable'
import moment from 'moment'
import '../index.css'

export default function FoodList(props){
  let today = moment()
  return (
    <div className="container-fluid">
      <div>
        <div className="btn-group">
          <div className="row">
          <h1 className="shadow">Foods:</h1>
            {props.foods.map((food) => {
              let exp = moment(food.expiration_date)
              let duration = moment.duration(exp.diff(today));
              let days = duration.asDays();
              console.log(days)

              if (days <= 1 && days > 0){
                return (
                  <Draggable>
                    <div key={food.id} className="button">
                      <Link className="btn btn-lg btn-warning" to={`/foods/${food.id}`}>{food.name}</Link>
                    </div>
                  </Draggable>
                )
              } else if (days <= 0){
                return (
                  <Draggable>
                    <div key={food.id} className="button">
                      <Link className="btn btn-lg btn-danger" to={`/foods/${food.id}`}>{food.name}</Link>
                    </div>
                  </Draggable>
                )
              } else {
                return (
                  <Draggable>
                    <div key={food.id} className="button">
                      <Link className="btn btn-lg btn-success" to={`/foods/${food.id}`}>{food.name}</Link>
                    </div>
                  </Draggable>
                )
                }
              }
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
