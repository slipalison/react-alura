import React, { Component } from 'react';
import { string } from 'prop-types';


export default class BotaoSubmitCustomizado extends Component {
  render() {
    const { label } = this.props;
    return (
      <div className="pure-control-group">
        <input type="submit" className="pure-button pure-button-primary" value={label} />
      </div>);
  }
}

BotaoSubmitCustomizado.propTypes = {
  label: string.isRequired
};
