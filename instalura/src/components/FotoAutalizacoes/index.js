import React, { Component } from 'react';
import PubSub from 'pubsub-js'

export default class FotoAutalizacoes extends Component {

  constructor(props){
    super(props);
    this.state={
      isLiked: false
    }
  }
  componentDidMount= async () =>{
    this.setState({isLiked: this.props.foto.likeada})
  }
  like = async () =>{
    const url = `http://instalura-api.herokuapp.com/api/fotos/${this.props.foto.id}/like?X-AUTH-TOKEN=${localStorage.getItem('token')}`;
    const liked = await fetch(url,{method: 'POST'})
      .then(res=> res.json());
    this.setState({isLiked: !this.state.isLiked})
    PubSub.publish('atualiza-like',{liker: liked, id: this.props.foto.id})
  }
  comentar = async (e) => {
    e.preventDefault();
    
    if(!this.comentario.value)
      return;
    const url = `http://instalura-api.herokuapp.com/api/fotos/${this.props.foto.id}/comment?X-AUTH-TOKEN=${localStorage.getItem('token')}`;
    const comentario = await fetch(url,{
      method: 'POST', 
      body:JSON.stringify({texto: this.comentario.value}), 
      headers: new Headers({
        'Content-type':'application/json'
      })
    })
    .then(res=> res.json());
    PubSub.publish('atualiza-comentarios',{comentario, id: this.props.foto.id})
    this.comentario.value = "";
  }
  render(){
    return(
    <section className="fotoAtualizacoes">
      <a onClick={async () => await this.like()} className={this.state.isLiked ? 'fotoAtualizacoes-like-ativo' : 'fotoAtualizacoes-like' }>Likar</a>
      <form onSubmit={async (e) => await this.comentar(e) } className="fotoAtualizacoes-form">
        <input type="text" ref={input => this.comentario = input }placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
        <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
      </form>
    </section>
    );
  }
}
