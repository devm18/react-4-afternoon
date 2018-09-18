import React, { Component } from 'react';
import axios from 'axios';

export default class Student extends Component {
  constructor() {
    super()
    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
    .then(result => {
      console.log('didMount result.data', result.data)
      this.setState( {studentInfo: result.data} )
    })
  }

  render() {
    let { first_name, last_name, grade, email } = this.state.studentInfo;

    return (
      <div className="box">
        <h1>{ first_name } { last_name } </h1>
        <h3>Grade: { grade } </h3>
        <h3>Email: { email } </h3>
      </div>
    )
  }
}

// Underneath the h1 tag, display studentInfo properties off of state:
// first_name and last_name within an h1 tag.
// The text Grade: followed by the grade property within an h3 tag.
// The text Email: followed by the email property within an h3 ta