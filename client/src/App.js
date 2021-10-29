import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import react, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard';
class App extends Component {
  render() {
    return (
      <Router>
        <Route component={Dashboard} />
      </Router>
    );
  }
}

export default App;
