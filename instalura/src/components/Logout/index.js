import { Component } from 'react';


export default class Logout  extends Component {

  componentDidMount(){
    localStorage.removeItem('token');
    this.props.history.push('/login')
  }

  render(){
    return '';
  }
}