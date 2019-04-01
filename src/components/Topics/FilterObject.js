import React, { Component } from 'react'

class FilterObject extends Component {
  constructor() {
    super()

    this.state = {
      employees: [
        {
          name: "Christian",
          title: "Web Developer",
          age: 44
        },
        {
          name: "Eric",
          age: 50,
          hairColor: "brown"
        },
        {
          name: "Jason",
          title: "Freelance Photog"
        }
      ],
      userInput: "",
      filteredEmployees: []
    }

  }

  handleInputChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleClick = () => {
    let employees = this.state.employees
    let filteredEmployees = []

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].hasOwnProperty(this.state.userInput)) {
        filteredEmployees.push(employees[i])
      }
    }

    this.setState({
      filteredEmployees: filteredEmployees
    })
  }



  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.employees, null, 10)}</span>
        <input onChange={this.handleInputChange} className="inputLine"></input>
        <button onClick={this.handleClick} className="confirmationButton">Filter</button>
        <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredEmployees, null, 10)}</span>
      </div>
    )
  }
}

export default FilterObject