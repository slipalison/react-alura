import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class TabelaAutor extends Component {
  constructor() {
    super();
    this.state = {
      lista: []
    };
  }
  componentDidMount = async () => {
    const list = await fetch('http://cdc-react.herokuapp.com/api/autores')
      .then((res) => res.json())
      .catch(err => {
        throw err;
      });

    this.setState({ lista: list });
    PubSub.subscribe('atualizaListaAutor', (topic, newList) => this.atualizaLista(topic, newList));
  }

  atualizaLista = async (topic, newList) => {
    this.setState({ lista: newList });
  }

  render() {
    return (
      <div>
        <table className="pure-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.lista.sort((a, b) => {
                if (a.nome > b.nome) return 1;
                if (a.nome < b.nome) return -1;
                  return 0;
                }).map(({ id, nome, email }) => (
                  <tr key={`${id}`}>
                    <td>{nome}</td>
                    <td>{email}</td>
                  </tr>))
                  }
          </tbody>
        </table>
      </div>
    );
  }
}
