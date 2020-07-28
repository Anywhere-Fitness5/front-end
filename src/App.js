import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import './App.css';
import SignUp from './components/SignUp'
import Homepage from './components/Homepage'
import Login from './components/Login'
import PrivateRoute from "./components/PrivateRoute";
import ClientDashboard from "./components/ClientDashboard";
import InstructorDashboard from "./components/InstructorDashboard";

function App(props) {
  const state = props;

  return (
    <div className = "App">
      <h1>Anywhere Fitness</h1>
      <Route exact path="/" component= {Homepage}/>
      <Route path= "/signup" component= {SignUp}/>
      <Route path= "/login" component= {Login}/>

      <Switch>
        <PrivateRoute path="/client" component={ClientDashboard} />
        <PrivateRoute path="/instructor" component={InstructorDashboard}/>
      </Switch>
    </div>
  );
};

export default App;
