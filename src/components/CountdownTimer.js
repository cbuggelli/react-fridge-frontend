import React, { Component } from 'react'

export default class CountdownTimer extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeRemaining: "",
      expiration_date: this.props.expiration_date
    }
    this.tick = this.tick.bind(this)
    this.days = this.days.bind(this)
    this.hours = this.hours.bind(this)
    this.minutes = this.minutes.bind(this)
    this.seconds = this.seconds.bind(this)
  }

  calculateTimeRemaining(date) {
    var dateArray = date.split("-")
    dateArray.map(el => parseInt(el))
    var startDate = new Date()
    var expDate = new Date(dateArray)
    return Math.round(Math.abs((expDate.getTime() - startDate.getTime()) / 1000))
  }

  tick() {
    this.setState((previousState) => {
        return {
          timeRemaining: previousState.timeRemaining - 1
        }
      })
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.interval)
      this.setState({ timeRemaining: `Your ${this.state.name.toLowerCase()} is expired. Throw it out, it's gross.`})
    }
  }

  days() {
    return Math.floor(this.state.timeRemaining / (3600*24))
  }

  hours() {
    return Math.floor(this.state.timeRemaining / 3600)
  }

  minutes() {
    return Math.floor((this.state.timeRemaining - (this.hours() * 3600)) / 60)
  }

  seconds() {
    return this.state.timeRemaining - (this.hours() * 3600) - (this.minutes() * 60)
  }

  componentDidMount() {
    this.setState({ timeRemaining: this.calculateTimeRemaining(this.state.expiration_date) })
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        Time until expiration:
        <div>{this.days()} days, {this.hours() % 24} hours, {this.minutes()} minutes, {this.seconds()} seconds</div>
      </div>
    )
  }
}
