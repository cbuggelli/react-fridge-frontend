import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'

export default function Drawers(props){
  return (
    <div>
      <h1>Drawers:</h1>
      <ul>
        {props.cats.map((category) => (
          <li key={category.id} className="cats"><Link to={`/drawers/${category.id}`}>{ category.name }</Link></li>
          )
        )}
      </ul>
    </div>
  )
}
