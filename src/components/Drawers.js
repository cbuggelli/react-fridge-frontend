import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

export default function Drawers(props){
  return (

    <div className="container-fluid">
    <div className="foodlist">
      <div className="btn-group">
      <div className="row">
      <h1>Drawers:</h1>

        {props.cats.map((category) => (
          <div key={category.id} className="col-lg-2"><button className="btn btn-lg btn-warning">
          <Link to={`/drawers/${category.id}`}>{ category.name }</Link></button></div>
          )
        )}
      </div>
      </div>
      </div>
    </div>
  )
}
