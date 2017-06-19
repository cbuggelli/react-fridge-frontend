import React from 'react'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/foods" className="navbar-brand">The Fridge</Link>
          <Link to="/foods/new" className="navbar-brand">Add a food</Link>
          <Link to="/drawers" className="navbar-brand">My Drawers</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
