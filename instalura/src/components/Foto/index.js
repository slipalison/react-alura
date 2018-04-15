import React, { Component } from 'react';
import FotoHeader from '../FotoHeader'
import FotoInfo from '../FotoInfo'
import FotoAutalizacoes from '../FotoAutalizacoes'
import { object } from 'prop-types';

export default class Foto extends Component {

  render(){
    const {urlPerfil, loginUsuario, horario, urlFoto, id, likeada, likers, comentarios, comentario} = this.props.foto;
    console.log(urlFoto);
    return(
    <div className="foto">
      <FotoHeader urlPerfil={urlPerfil} loginUsuario={loginUsuario} horario={horario}/>
      <img alt="foto" className="foto-src" src={urlFoto} />
      <FotoInfo comentarios={comentarios} loginUsuario={loginUsuario} comentario={comentario} likeada={likeada} likers={likers}/>
      <FotoAutalizacoes />
    </div> 
    );
  }
}

Foto.propTypes={
  foto: object.isRequired
}
