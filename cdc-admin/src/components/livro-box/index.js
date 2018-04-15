import React, { Component, Fragment } from 'react';
import FormularioLivro from '../formulario-livro';
import TabelaLivro from '../tabela-livro';

export default class LivroBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <h1>Cadastro de Livros</h1>
        </div>
        <div className="content" id="content">
          <FormularioLivro />
          <TabelaLivro />
        </div>
      </Fragment>
    );
  }
}
