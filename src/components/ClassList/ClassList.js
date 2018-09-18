import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
    
  }
// let { pizza } = this.props.match.params;   

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${ this.props.match.params.class }`)
    .then(response => {
      console.log('componentDidMount response.data', response.data)
      this.setState({
        students: response.data 
      })
    })
  }


  render() {
    console.log('render this.state.students ', this.state.students)
    console.log('render props ', this.props)

    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`} key={i}>
        <h3> { student.first_name } { student.last_name }</h3>
      </Link>
    ));

    return (
      <div className="box">
        <h1> { this.props.match.params.class } </h1>
        <h2>ClassList:</h2>
        { students }
      </div>
    )
  }
}

/* 
The json-server API url is http://localhost:3005/students?class=.
Class should equal MATH1010 OR ENG2010 OR BIO2020 depending on the route parameter.
*/