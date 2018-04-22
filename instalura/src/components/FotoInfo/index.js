import React, { Component } from 'react';
import { array, string, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import PubSub from 'pubsub-js';



export default class FotoInfo extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      likers: this.props.likers, 
      comentarios: this.props.comentarios
    } 
  }
  componentWillMount  = async () => {
    PubSub.subscribe('atualiza-like', (_, obj) =>{
      const liker = this.state.likers.find(x=> x.login === obj.liker.login);
      const isThePhoto = this.props.id === obj.id;
      if(!liker && isThePhoto)
        this.setState({likers: this.state.likers.concat(obj.liker)});
      else{
        if(liker)
          this.setState({likers: this.state.likers.filter(x=>liker.login !== x.login )});
      }
    });

    PubSub.subscribe('atualiza-comentarios', (_, obj) =>{
      const isThePhoto = this.props.id === obj.id;
      if(isThePhoto)
        this.setState({comentarios: this.state.comentarios.concat(obj.comentario)});
    });
  }
  render(){
    const { comentario, loginUsuario } =  this.props;
    return(
      <div className="foto-info">
      <div className="foto-info-likes">
      {
        this.state.likers.map(x=><Link to={`/timeline/${x.login}`} key={`${x.login}`}> {x.login}</Link>,)
      } curtiram
      </div>
      <p className="foto-info-legenda">
        <Link to={`/timeline/${loginUsuario}`} className="foto-info-autor">{loginUsuario} </Link>
        {comentario}
      </p>

      <ul className="foto-info-comentarios">
      {
        this.state.comentarios.map(x => (
        <li key={x.id} className="comentario">
          <Link to={`/timeline/${x.login}`} className="foto-info-autor">{x.login} </Link>
          {x.texto}
        </li>))
      }
      </ul>
    </div>

    );
  }
}

FotoInfo.propsTypes ={
  comentarios: array.isRequired,
  comentario: string.isRequired,
  likeada: bool.isRequired,
  likers: array.isRequired,
  loginUsuario: string.isRequired
}