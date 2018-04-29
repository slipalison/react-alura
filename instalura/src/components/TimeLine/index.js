import React, { Component } from 'react';
import Foto from '../Foto';
import PubSub from 'pubsub-js';
import {TransitionGroup,  CSSTransition} from 'react-transition-group'
import ServiceTimeline from '../../services/TimelineService'
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
    if(nextProps.match.params.login) this.carregaFoto(nextProps);
  }

  

  carregaFoto = async (props) => 
    this.setState({fotos: await ServiceTimeline.carregaFoto(props.match.params.login)})

  render(){
    return(
    <div className="fotos container">
      <TransitionGroup>

        {
          this.state.fotos.map(x => (
            <CSSTransition key={`${x.id}`} timeout={500} classNames="fade">
              <Foto
              key={`${x.id}`} 
              foto={x} 
              liked={ServiceTimeline.like} 
              comentar={ServiceTimeline.comentar}/>
            </CSSTransition>))
        }

      </TransitionGroup>
    </div>

    );
  }
}
