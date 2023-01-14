import React from 'react';
import './style.css';
import home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

export default function App() {
  return;
  <BrowserRouter>
    <Switch>
      <Route path="/" component={home} />
    </Switch>
  </BrowserRouter>;
}
