import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class TabelaLivro extends Component {
  constructor() {
    super();
    this.state = {
      lista: []
    };
  }
  componentDidMount = async () => {
    const list = await fetch('http://cdc-react.herokuapp.com/api/livros')
      .then((res) => res.json())
      .catch(err => {
        throw err;
      });

    this.setState({ lista: list });
    PubSub.subscribe('atualizaListaLivro', (topic, newList) => this.atualizaLista(topic, newList));
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
              <th>Titulo</th>
              <th>Preco</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.lista.sort((a, b) => {
                if (a.titulo > b.titulo) return 1;
                if (a.titulo < b.titulo) return -1;
                  return 0;
                }).map(({ id, titulo, preco }) => (
                  <tr key={`${id}`}>
                    <td>{titulo}</td>
                    <td>{parseFloat(preco)}</td>
                  </tr>))
                  }
          </tbody>
        </table>
      </div>
    );
  }
}
