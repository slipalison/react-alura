import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AutorBox from './components/autor-box';
import HomeBox from './components/home-box';
import LivroBox from './components/livro-box';


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={HomeBox} />
      <Route path="/autor" component={AutorBox} />
      <Route path="/livro" component={LivroBox} />
    </App>
  </BrowserRouter>
  , document.getElementById('root')
);
registerServiceWorker();
