import React, { Component } from 'react'

class Sum extends Component {
  constructor() {
    super()

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleOnChange1(val) {
    this.setState({
      number1: parseInt(val, 10)
    })
  }

  handleOnChange2 = (event) => {
    this.setState({
      number2: parseInt((event.target.value), 10)
    })
  }

  handleOnClick = () => {
    let num1 = this.state.number1
    let num2 = this.state.number2

    this.setState({
      sum: num1 + num2
    })
  }

  render() {
    return (
      <div className="puzzleBox sumPB" >
        <h4>Sum</h4>
        <input className="inputLine" type="number" onChange={(event) => this.handleOnChange1(event.target.value)}></input>
        <input className="inputLine" type="number" onChange={this.handleOnChange2}></input>
        <button className="confirmationButton" onClick={this.handleOnClick}>Add</button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum