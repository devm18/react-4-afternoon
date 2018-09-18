import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

// imported/used by App.js
export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} /> 
    <Route path='/classlist/:class' component={ClassList} />
    <Route path='/student/:id' component={Student} />
    <Route path='*' render={() => <div>404 Not Found!</div>} /> 
  </Switch>
)