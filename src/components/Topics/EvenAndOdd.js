import React, { Component } from 'react'

class EvenAndOdd extends Component {
  constructor() {
    super()

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleClick = () => {
    let arr = this.state.userInput.split(',')
    let evenNums = []
    let oddNums = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNums.push(parseInt(arr[i], 10))
      } else {
        oddNums.push(parseInt(arr[i], 10))
      }
    }
    this.setState({ evenArray: evenNums, oddArray: oddNums })
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input onChange={this.handleInputChange} className="inputLine"></input>
        <button onClick={this.handleClick} className="confirmationButton">Split</button>
        <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
        <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
      </div>
    )
  }
}

export default EvenAndOdd