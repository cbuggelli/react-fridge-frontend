import React, { Component } from 'react'

export default class CountdownTimer extends Component {
  constructor(props){
    super(props)
    this.state = {
      timeRemaining: 0
    }
    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState((previousState) => {
        return {
          timeRemaining: previousState.timeRemaining - 1
        }
      })
    if (this.state.timeRemaining <= 0) {
      clearInterval(this.interval)
      this.setState({ timeRemaining: "expired" })
    }
  }

  componentDidMount() {
    this.setState({ timeRemaining: this.props.timeRemaining })
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        Time until expiration:
        <div>{this.state.timeRemaining}</div>
      </div>
    )
  }
}
