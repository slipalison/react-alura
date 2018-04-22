//import Pubsub from 'pubsub-js';

class TimelineService {
  
  constructor(){
    this.url = 'http://instalura-api.herokuapp.com/api/'; 
  }

  isAuthenticate = () => {
    return localStorage.getItem('token') ? true : false;
  }

  getToken = () => {
    return localStorage.getItem('token');
  }


  carregaFoto = async (login) =>
  {
    const token = localStorage.getItem('token'); 
    const url = token && !login ? 
      `${this.url}fotos?X-AUTH-TOKEN=${this.getToken()}`: 
      `${this.url}public/fotos/${login}`
    return await fetch(url).then(res => res.json())
  }
  like = async (fotoId) =>{
    const url = `http://instalura-api.herokuapp.com/api/fotos/${fotoId}/like?X-AUTH-TOKEN=${localStorage.getItem('token')}`;
    return {id: fotoId, liker: await fetch(url,{method: 'POST'}).then(res=> res.json())};
  }

  comentar = async (fotoId, value) => {

    if(!value)
      return;
    const url = `${this.url}fotos/${fotoId}/comment?X-AUTH-TOKEN=${this.getToken()}`;
    const comentario = await fetch(url,{
      method: 'POST', 
      body:JSON.stringify({texto: value}), 
      headers: new Headers({
        'Content-type':'application/json'
      })
    })
    .then(res=> res.json());

    return {comentario, id: fotoId}
  }
}

export default new TimelineService();