import React from 'react';
import './App.scss';
import SignUp from './components/SignUp'
import Homepage from './components/Homepage'
import Login from './components/Login'
import AboutUs from './components/AboutUs'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {connect} from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import ClientDashboard from "./components/ClientDashboard";
import InstructorDashboard from "./components/InstructorDashboard";

function App() {

  return (
    <div className = "App">
      <Route exact path="/" component= {Homepage}/>
      <Route path= "/signup" component= {SignUp}/>
      <Route path= "/login" component= {Login}/>
      <Route path= "/aboutus" component= {AboutUs}/>

      <Switch>
        <PrivateRoute path="/client" component={ClientDashboard} />
        <PrivateRoute path="/instructor" component={InstructorDashboard}/>
      </Switch>
    </div>
  );
};

export default App;
