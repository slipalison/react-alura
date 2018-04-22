import React, { Component } from 'react';
import FotoHeader from '../FotoHeader'
import FotoInfo from '../FotoInfo'
import FotoAutalizacoes from '../FotoAutalizacoes'
import { object } from 'prop-types';
import { Link } from 'react-router-dom';

export default class Foto extends Component {

  render(){
    const isLoged = localStorage.getItem('token') ? true : false;
    const { urlFoto } = this.props.foto;
    return(
    <div className="foto">
      <FotoHeader {...this.props}/>
      <img alt="foto" className="foto-src" src={urlFoto} />
      <FotoInfo {...this.props}/>
      { 
        isLoged ? 
        <FotoAutalizacoes {...this.props}/> : 
        <Link to="/login"> Faça o login para comentar! </Link>
      }
    </div> 
    );
  }
}

Foto.propTypes={
  foto: object.isRequired
}
