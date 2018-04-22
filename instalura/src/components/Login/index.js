import React, { Component } from 'react';
// import { array, string, bool } from 'prop-types';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      erroMsg:''
    }
    localStorage.removeItem('token');
  }

  logar = async (e) => {
    e.preventDefault();
    const options ={
      method: 'POST',
      body: JSON.stringify({login: this.Login.value, senha: this.Password.value}),
      headers: new Headers({ 'Content-type': 'application/json' })
    }
    const login = await fetch('http://instalura-api.herokuapp.com/api/public/login',options)
      .then(res => {
        if(res.ok)
          return res.text();
        else
          throw new Error('Não foi possivel fazer o login.')
      })
      .catch((error)=> this.setState({erroMsg: error.message}));

      if(login){
        localStorage.setItem('token', login)
        this.props.history.push('/timeline')
      }
  }
  render(){
    return(
      <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span className="error">{this.state.erroMsg}</span>
                <form onSubmit={this.logar}>
                    <input type="text" ref={(input) => this.Login = input} />
                    <input type="password" ref={(input) => this.Password = input}/>
                    <input type="submit" value="login"/>
                </form>
            </div>
    );
  }
}