import React, { Component } from 'react';
import PubSub from 'pubsub-js';
import InputCustomizado from '../input-customizado';
import BotaoSubmitCustomizado from '../botao-submit';

export default class FormularioAutor extends Component {
  constructor() {
    super();
    this.state = {
      titulo: '',
      preco: '',
      autorId: 0,
      autores: []
    };
  }
  componentDidMount = async () => {
    const list = await fetch('http://cdc-react.herokuapp.com/api/autores')
      .then((res) => res.json())
      .catch(err => {
        throw err;
      });
    this.setState({ autores: list });
  }

  enviaForm = async (e) => {
    e.preventDefault();
    const { titulo, preco, autorId } = this.state;
    const myInit = {
      method: 'POST',
      body: JSON.stringify({ titulo, preco, autorId }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    };
    const result = await fetch('http://cdc-react.herokuapp.com/api/livros', myInit)
      .then((res) => res.json());

    if (result.error) {
      result.errors.map(x => PubSub.publish('erroPublicarLivro', x));
    } else {
      PubSub.publish('clearFieldsLivro', {});
      PubSub.publish('atualizaListaLivro', result || []);
    }
  }

  render() {
    return (
      <div className="pure-form pure-form-aligned">
        <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm}>
          <InputCustomizado id="titulo" type="text" name="titulo" label="Titulo" value={this.state.titulo} onChange={async (e) => this.setState({ titulo: e.target.value })} />
          <InputCustomizado id="email" type="text" name="preco" label="Preço" value={this.state.preco} onChange={async (e) => this.setState({ preco: e.target.value })} />
          <div className="pure-control-group">
            <label htmlFor="autor">Autor</label>
            <select id="autor" name="autor" style={{ width: '215px' }} value={this.state.autorId} onChange={async (e) => this.setState({ autorId: e.target.value })}>
              {
                this.state.autores.sort((a, b) => {
                  if (a.nome > b.nome) return 1;
                  if (a.nome < b.nome) return -1;
                    return 0;
                  }).map(({ id, nome }) => (<option key={`${id}`} value={id}>{nome}</option>))
              }
            </select>
          </div>

          <BotaoSubmitCustomizado label="Gravar" />
        </form>
      </div>
    );
  }
}
