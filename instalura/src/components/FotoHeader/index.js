import React, { Component } from 'react';

export default class FotoHeader extends Component {
  render(){
    const {urlPerfil, loginUsuario, horario} = this.props;
    return(
      <header className="foto-header">
      <figure className="foto-usuario">
        <img src={urlPerfil} alt="foto do usuario" />
        <figcaption className="foto-usuario">
          <a href="/#">
            {loginUsuario}
          </a>  
        </figcaption>
      </figure>
      <time className="foto-data">{horario}</time>
    </header>

    );
  }
}