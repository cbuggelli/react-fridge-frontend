import React, { Component } from  'react'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      expiration_date: "",
      quantity: "",
      category_id: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.listCats = this.listCats.bind(this)

  }

  handleChange(event) {
    // debugger
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    // debugger
    this.props.createFood(event.target.children)
  }



  render() {
    // const listCats = this.props.categories.map((category, index) => {
    //     return <option value={`${(index + 1)}`} key={index}>{category.name}</option>
    //   })

    return(
      <div>
        <h3>Add a food</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} /><br/>
          <input type="date" name="expiration_date" placeholder="Expiration date" value={this.state.expiration_date} onChange={this.handleChange} /><br/>
          <input type="number" name="quantity" placeholder="Quantity" value={this.state.quantity} onChange={this.handleChange}  /><br/>

          <select name="category_id" value={this.state.category} onChange={this.handleChange}>
            <option value="1">Meat</option>
            <option value="2">Produce</option>
            <option value="3">Baked</option>
            <option value="4">Dairy</option>
            <option value="5">Baked</option>
            <option value="6">Freezer</option>
            <option value="7">Beverage</option>
            <option value="8">Other</option>
            {/* {listCats} */}
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}
