import React, { Component } from  'react'
import { Route, Link } from 'react-router-dom'

export default class From extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      days_until_expiration: "",
      quantity: "",
      category_id: ""
    }

    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    debugger
    this.setState(function(previousState) {
      return {
        [event.target.name]: event.target.value
      }
    })
  }

  // handleSubmit(event) {
  //   event.preventDefault()
  //
  //
  // }

  render() {
    return(
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Days until expiration" />
        <input type="text" placeholder="Quantity" />
        <input type="text" placeholder="Category" />
      </form>
    )
  }

}
