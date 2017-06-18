import React, { Component } from 'react'

export default class CountdownTimer extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeRemaining: 0
    }
    this.tick = this.tick.bind(this)
    this.days = this.days.bind(this)
    this.hours = this.hours.bind(this)
    this.minutes = this.minutes.bind(this)
    this.seconds = this.seconds.bind(this)
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


  tick() {
    this.setState((previousState) => {
        return {
          timeRemaining: previousState.timeRemaining - 1
        }
      })
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.interval)
      this.setState({ timeRemaining: `Your ${this.props.foodName.toLowerCase()} is expired. Throw it out, it's gross.`})
    }
  }

  componentDidMount() {
    this.setState({ timeRemaining: this.props.timeRemaining * 86400 })
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
