import React, { Component } from 'react';
import { string, func } from 'prop-types';
import PubSub from 'pubsub-js';

export default class InputCustomizado extends Component {
  constructor() {
    super();
    this.state = {
      msgErro: ''
    };
  }
  componentDidMount = async () => {
    PubSub.subscribe('erroPublicarAutor', (_, error) => {
      if (error.field === this.props.name) {
        this.setState({ msgErro: error.defaultMessage });
      }
    });
    PubSub.subscribe('clearFieldsAutor', () => this.setState({ msgErro: '' }));
  }

  render() {
    const { id, type, name, label, value, onChange } = this.props;
    return (
      <div className="pure-control-group">
        <label htmlFor={id}>{label}</label>
        <input id={id} type={type} name={name} value={value} onChange={onChange} />
        <span className="error">{this.state.msgErro}</span>
      </div>);
  }
}
InputCustomizado.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  label: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired
};
