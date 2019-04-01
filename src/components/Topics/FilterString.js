import React, { Component } from 'react'

class FilterString extends Component {
  constructor() {
    super()

    this.state = {
      friends: ["Karey", "Eric", "Jason"],
      userInput: "",
      filteredFriends: []
    }
  }

  handleInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      userInput: event.target.value
    })
  }

  handleClick = () => {
    let friends = this.state.friends
    let filteredFriends = [];

    for (let i = 0; i < friends.length; i++) {
      if (friends[i].includes(this.state.userInput)) {
        filteredFriends.push(friends[i])
      }
    }

    this.setState({
      filteredFriends: filteredFriends
    })
  }


  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.friends, null, 10)}</span>
        <input onChange={this.handleInputChange} className="inputLine"></input>
        <button onClick={this.handleClick} className="confirmationButton">Filter</button>
        <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredFriends, null, 10)}</span>
      </div>
    )
  }
}

export default FilterString