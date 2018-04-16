import React, { Component } from 'react';
import Foto from '../Foto';

export default class TimeLine extends Component {
  constructor(){
    super()
    this.state={
      fotos: []
    }
  }

  componentDidMount= async () => {
    // 'http://instalura-api.herokuapp.com/api/public/fotos/rafael'
    const list = await fetch(`http://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('token')}` )
    .then(res => res.json())
    this.setState({fotos: list})
  }

  render(){
    return(
    <div className="fotos container">
    {this.state.fotos.map(x => <Foto key={`${x.id}`} foto={x}/>)}
    </div>

    );
  }
}
