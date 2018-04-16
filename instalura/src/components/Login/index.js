import React, { Component } from 'react';
import { array, string, bool } from 'prop-types';

export default class Login extends Component {
  render(){
    return(
      <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span></span>
                <form >
                    <input type="text" />
                    <input type="password"/>
                    <input type="submit" value="login"/>
                </form>
            </div>
    );
  }
}