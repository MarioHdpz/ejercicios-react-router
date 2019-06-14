import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import ByeByeWorld from './components/ByeByeWorld';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="*" component={HelloWorld} />
      <Route exact path="*" component={ByeByeWorld} />
    </BrowserRouter>
  );
}

export default App;
