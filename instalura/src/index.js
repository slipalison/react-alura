import React from 'react';
import ReactDOM from 'react-dom';
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

import App from './App';
import Login from './components/Login';
import Logout from './components/Logout';



const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticate = localStorage.getItem('token') ? true : false;
  return (<Route {...rest} render={(props) => (
    isAuthenticate === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />)
}

ReactDOM.render((
  <Router>
    <Switch>
        <PrivateRoute exact path="/Timeline" component={App} />
        <PrivateRoute exact path="/" component={App} />
        <Route path="/Timeline/:login" component={App}/>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Logout" component={Logout} />
    </Switch>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
