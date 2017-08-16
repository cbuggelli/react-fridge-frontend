import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import '../index.css'

export default function Drawers(props){
  return (

    <div className="container-fluid">
      <div className="foodlist">
        <div className="btn-group">
          <div className="row">
            <h1 className="shadow">Drawers:</h1>
            {props.cats.map((category) => (
              <div key={category.id} className="button">
                <Link className="btn btn-lg btn-warning" to={`/drawers/${category.id}`}>{ category.name }</Link>
              </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
