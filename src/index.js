import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pokeDetails from './pages/pokeDetails';
import Home from './components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Switch>
        <Route path= '/pokedetails' component={ pokeDetails } exact />
        <Route path= '/pokedetails/:id' component={ pokeDetails } exact />
        <Route path= '/' component={ Home } exact />
        <App />
      </Switch>
    </BrowserRouter>
);


