import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            The Fridge
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
