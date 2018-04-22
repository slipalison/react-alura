import React, { Component } from 'react';
import Foto from '../Foto';
import PubSub from 'pubsub-js';
import {TransitionGroup,  CSSTransition} from 'react-transition-group'
export default class TimeLine extends Component {
  constructor(props){
    super(props)
    this.state={
      fotos: []
    }
  }

  componentDidMount= async () => {
    await this.carregaFoto(this.props);
    PubSub.subscribe('resultado-fotos', (_, obj)=>{
      this.setState({fotos: obj.fotos})
    });
  }
  

  componentWillReceiveProps= async (nextProps) =>
  {
    if(nextProps.match.params.login)
      this.carregaFoto(nextProps);
  }

  carregaFoto = async (props) =>
  {
    const token = localStorage.getItem('token'); 
    const url = token ? 
      `http://instalura-api.herokuapp.com/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('token')}`: 
      `http://instalura-api.herokuapp.com/api/public/fotos/${props.match.params.login}`
    const list = await fetch(url)
      .then(res => res.json())
    this.setState({fotos: list})
  }

  render(){
    return(
    <div className="fotos container">
      <TransitionGroup>

        {
          this.state.fotos.map(x => (
            <CSSTransition key={`${x.id}`} timeout={500} classNames="fade">
              <Foto key={`${x.id}`} foto={x}/>
            </CSSTransition>))
        }
        
      </TransitionGroup>
    </div>

    );
  }
}
