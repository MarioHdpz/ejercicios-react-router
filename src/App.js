import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import ByeByeWorld from './components/ByeByeWorld';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/hello-world" component={HelloWorld} />
        <Route exact path="/bye-bye-world" component={ByeByeWorld} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
