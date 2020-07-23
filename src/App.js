import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import SignUp from './components/SignUp'
import Homepage from './components/Homepage'
import Login from './components/Login'

function App() {
  return (
    <div className = "App">
      <h1>Anywhere Fitness</h1>
      <Route exact path="/" component= {Homepage}/>
      <Route path= "/signup" component= {SignUp}/>
      <Route path= "/login" component= {Login}/>
    </div>
  );
}

export default App;
