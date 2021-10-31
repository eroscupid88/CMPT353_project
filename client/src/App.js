import './App.css';
import './Ourteam.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/auth/Login';
import Landing from './components/layout/Landing';
import About from './components/about/About';
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/about' component={About} />
      </Router>
    );
  }
}

export default App;
