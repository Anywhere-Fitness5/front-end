import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp'
import Homepage from './components/Homepage'

function App() {
  return (
    <div>
      <h1>Anywhere Fitness</h1>
      <Route exact path="/" component= {Homepage}/>
      <Route path= "/signup" component= {SignUp}/>
    </div>
  );
}

export default App;
