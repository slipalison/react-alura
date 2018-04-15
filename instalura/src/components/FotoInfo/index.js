import React, { Component } from 'react';
import { array, string, bool } from 'prop-types';

export default class FotoInfo extends Component {
  render(){
    const {comentarios, comentario, likeada, likers, loginUsuario} =  this.props;
    return(
      <div className="foto-info">
      <div className="foto-info-likes">
      {
        likers.map(x=><a href="#"> {x.login}</a>,)
      } curtiram
      </div>
      <p className="foto-info-legenda">
        <a className="foto-info-autor">{loginUsuario} </a>
        {comentario}
      </p>

      <ul className="foto-info-comentarios">
      {
        comentarios.map(x => (
        <li key={x.id} className="comentario">
          <a className="foto-info-autor">{x.login} </a>
          {x.texto}
        </li>))
      }
      </ul>
    </div>

    );
  }
}

FotoInfo.propsTypes ={
  comentarios: array.isRequired,
  comentario: string.isRequired,
  likeada: bool.isRequired,
  likers: array.isRequired,
  loginUsuario: string.isRequired
}