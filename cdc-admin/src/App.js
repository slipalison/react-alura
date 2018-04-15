import 'purecss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { any } from 'prop-types';

import './App.css';
import './css/side-menu.css';

class App extends Component {
  render() {
    return (
      <div id="layout">
        <Link to="#menu" href="#menu" id="menuLink" className="menu-link">
          <span />
        </Link>

        <div id="menu">
          <div className="pure-menu">
            <Link className="pure-menu-heading" href="/" to="/">Cadastro</Link>
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <Link to="/" href="/" className="pure-menu-link">Home</Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/autor" href="/autor" className="pure-menu-link">Autores</Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/livro" href="/livro" className="pure-menu-link">Livros</Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="main">
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propsTypes = {
  children: any.isRequired
};

export default App;
