import React, { Component } from 'react';
import PubSub from 'pubsub-js'

export default class FotoAutalizacoes extends Component {

  constructor(props){
    super(props);
    this.state={
      isLiked: false
    }
    this.id =this.props.foto.id;
  }
  componentDidMount= async () =>{
    this.setState({isLiked: this.props.foto.likeada})
  }
  like = async () =>{
    
    this.setState({isLiked: !this.state.isLiked})
    PubSub.publish('atualiza-like',await this.props.liked(this.id))
  }

  comentar = async (e) => {
    e.preventDefault();
    PubSub.publish('atualiza-comentarios', await this.props.comentar(this.id, this.comentario.value))
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
