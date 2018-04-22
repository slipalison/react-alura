import React, { Component } from 'react';
import  { Link } from 'react-router-dom';


export default class FotoHeader extends Component {
  render(){
    const {urlPerfil, loginUsuario, horario} = this.props.foto;
    return(
      <header className="foto-header">
      <figure className="foto-usuario">
        <img src={urlPerfil} alt="foto do usuario" />
        <figcaption className="foto-usuario">
          <Link to={`/timeline/${loginUsuario}`}>
            {loginUsuario}
          </Link>  
        </figcaption>
      </figure>
      <time className="foto-data">{horario}</time>
    </header>

    );
  }
}