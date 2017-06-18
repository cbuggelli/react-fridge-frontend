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
    this.props.createFood(event.target.children)
  }

//   var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
// var firstDate = new Date(2008,01,12);
// var secondDate = new Date(2008,01,22);
//
// var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} /><br/>
        <input type="date" name="expiration_date" placeholder="Expiration date" value={this.state.days} onChange={this.handleChange} /><br/>
        <input type="number" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange}  /><br/>


        <select name="category" value={this.state.category}>
          <option value="1">Meat</option>
          <option value="2">Produce</option>
          <option value="3">Baked</option>
          <option value="4">Dairy</option>
        </select>



        <input type="submit" value="Submit" />
      </form>
    )
  }

}
