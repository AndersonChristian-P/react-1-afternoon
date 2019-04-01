import React, { Component } from 'react'

class Palindrome extends Component {
  constructor() {
    super()

    this.state = {
      userInput: "",
      palindrome: ""
    }
  }

  handleInputChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      userInput: event.target.value
    })
  }

  handleClick = () => {
    let forwards = this.state.userInput
    let backwards = this.state.userInput

    backwards = backwards.split("").reverse().join("")

    if (forwards === backwards) {
      this.setState({
        palindrome: 'true'
      })
    } else {
      this.setState({
        palindrome: 'false'
      })
    }
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input onChange={this.handleInputChange} className="inputLine"></input>
        <button onClick={this.handleClick} className="confirmationButton">Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome