import React, { Component } from 'react'
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import PrivateRoute from './components/common/PrivateRoute'
import CreateProfile from './components/createprofile/CreateProfile'
import Profile from './components/profile/Profile'
import Welcome from './components/profile/Welcome'
import EditProfile from './components/profile/EditProfile'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const About = React.lazy(() => import('./components/about/About'))

class App extends Component {
  render() {
    return (
      <React.Suspense fallback={loading}>
        <Router>
          <Route exact path="/login" component={Login} a="hoho" />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route exact path="/about" name="About" component={About} />
          <Route exact path="/welcome" name="welcome" component={Welcome} />
          <Route exact path="/profileusername:profileusername" name="profile" component={Profile} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={DefaultLayout} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/createprofile" component={CreateProfile} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          </Switch>
          {/*<Route path="/dashboard" name="Home" component={DefaultLayout} />*/}
        </Router>
      </React.Suspense>
    )
  }
}

export default App
