import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Flag from './components/Flag';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/:id" render={Flag} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
