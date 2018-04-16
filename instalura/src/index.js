import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import './css/normalize.min.css'
import './css/timeline.css'
import './css/login.css'


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

ReactDOM.render((
  <Router>
    <Switch>
        <PrivateRoute exact path="/Timeline" component={App} />
        <PrivateRoute exact path="/" component={App} />
        <Route exact path="/Login" component={Login} />
    </Switch>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
