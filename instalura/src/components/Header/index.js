import React, { Component } from 'react';
import PubSub from 'pubsub-js';


export default class Header extends Component {

  buscar = async (e) =>{
    e.preventDefault();
    const value = this.busca.value;
    if(!value)
      return;

    const url = `http://instalura-api.herokuapp.com/api/public/fotos/${value}`;
    const fotos = await fetch(url).then(res=> res.json());
    PubSub.publish('resultado-fotos', {fotos})
    this.busca.value = "";
  }

  render(){
    const isLoged =  localStorage.getItem('token') ? true : false;
    return(
      <header className="header container">
      <h1 className="header-logo">
        Instalura
      </h1>
      <form onSubmit={ async (e) => await this.buscar(e) } className="header-busca">
        <input type="text" ref={ input => this.busca = input } name="search" placeholder="Pesquisa" className="header-busca-campo"/>
        <input type="submit" value="Buscar" className="header-busca-submit" />
      </form>
      <nav>
        <ul className="header-nav">
          <li className="header-nav-item">
            <a href="/logout" > 
            {isLoged ? "Logout":"" }
            </a>
          </li>
        </ul>
      </nav>
    </header>
    );
  }
}