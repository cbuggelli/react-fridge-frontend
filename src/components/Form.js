import React, { Component } from  'react'
import { Route, Link } from 'react-router-dom'

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      days: "",
      quantity: "",
      category_id: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(this.state.name))
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.onSubmit(event.target.children)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} /><br/>
        <input type="text" name="days" placeholder="Days until expiration" value={this.state.days} onChange={this.handleChange} /><br/>
        <input type="text" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange}  /><br/>
        <input type="text" name="category_id" placeholder="Category" value={this.state.category_id} onChange={this.handleChange} /><br/>
        <input type="submit" value="Submit" />
      </form>
    )
  }

}
