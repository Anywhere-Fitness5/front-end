import React from 'react';
import {Route} from 'react-router-dom';

import './App.scss';
import SignUp from './components/SignUp'
import Homepage from './components/Homepage'
import Login from './components/Login'
import AboutUs from './components/AboutUs'

function App() {
  return (
    <div className = "App">
      <Route exact path="/" component= {Homepage}/>
      <Route path= "/signup" component= {SignUp}/>
      <Route path= "/login" component= {Login}/>
      <Route path= "/aboutus" component= {AboutUs}/>

    </div>
  );
}

export default App;
