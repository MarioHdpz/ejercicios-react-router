import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import NotFound from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hello-world" component={HelloWorld} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
