import React, { Component } from  'react'
import '../index.css'

export default class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      name: "",
      expiration_date: "",
      quantity: "",
      category_id: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createFood(event.target.children)
    this.setState({
      name: "",
      expiration_date: "",
      quantity: "",
      category_id: ""
    })
  }

  render(){
    const listCats = this.props.categories.map((category, index) => {
        return <option value={`${(index + 1)}`} key={index}>{category.name}</option>
      })

    return(
      <div className="formstyle">
        <h3>Add a food</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} /><br/>
          <input type="date" name="expiration_date" placeholder="Expiration date" value={this.state.expiration_date} onChange={this.handleChange} /><br/>
          <input type="number" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange}  /><br/>

          <select name="category_id" value={this.state.category} onChange={this.handleChange}>
            {listCats}
          </select>

          <input className="btn btn-sm inverse" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
