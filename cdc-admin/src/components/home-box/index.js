import React, { Component, Fragment } from 'react';

export default class HomeBox extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <h1>Bem vindo ao sistema</h1>
        </div>
        <div className="content" id="content">
          Olar
        </div>
      </Fragment>
    );
  }
}
