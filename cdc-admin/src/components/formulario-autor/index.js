import React, { Component } from 'react';
import PubSub from 'pubsub-js';
// import { func } from 'prop-types';
import ImputCustomizado from '../input-customizado';
import BotaoSubmitCustomizado from '../botao-submit';

export default class FormularioAutor extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      senha: ''
    };
  }
  enviaForm = async (e) => {
    e.preventDefault();
    const { nome, email, senha } = this.state;
    const myInit = {
      method: 'POST',
      body: JSON.stringify({ nome, email, senha }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    };
    const result = await fetch('http://cdc-react.herokuapp.com/api/autores', myInit)
      .then((res) => res.json());

    if (result.error) {
      result.errors.map(x => PubSub.publish('erroPublicarAutor', x));
    } else {
      PubSub.publish('clearFieldsAutor', {});
      PubSub.publish('atualizaListaAutor', result || []);
    }
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm}>
          <ImputCustomizado id="nome" type="text" name="nome" label="Nome" value={this.state.nome} onChange={async (e) => this.setState({ nome: e.target.value })} />
          <ImputCustomizado id="email" type="email" name="email" label="Email" value={this.state.email} onChange={async (e) => this.setState({ email: e.target.value })} />
          <ImputCustomizado id="senha" type="password" name="senha" label="Senha" value={this.state.senha} onChange={async (e) => this.setState({ senha: e.target.value })} />
          <BotaoSubmitCustomizado label="Gravar" />
        </form>
      </div>
    );
  }
}
