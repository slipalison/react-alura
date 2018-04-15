import React, { Component, Fragment } from 'react';
import FormularioAutor from '../formulario-autor';
import TabelaAutor from '../tabela-autor';

export default class AutorBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <h1>Cadastro de Autores</h1>
        </div>
        <div className="content" id="content">
          <FormularioAutor />
          <TabelaAutor />
        </div>
      </Fragment>
    );
  }
}
