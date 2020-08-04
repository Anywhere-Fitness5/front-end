import React from "react";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import AddClass from "./AddClass";
import ClassCard from "./ClassCard";

class ClientDashboard extends React.Component {
  state = {
    classes: [
      {
        id: 1,
        name: "workout",
        type: "yoga",
        startTime: "7-11-2020 7AM",
        duration: 30,
        intensity: "high",
        location: "florida",
        numberOfRegisteredAttendees: 25,
        maxClassSize: 50,
      },
    ],
    classList: [],
  };

  deleteClassList (workout) {
    this.setState({
      classList: (this.state.classList.filter(() => !workout))
    })
    console.log("Deleted!", this.state.classList);
  };

  addClassList(fitnessClass){
    this.setState({
      classList: [...this.state.classList, fitnessClass]
      
    })
    console.log("Added!", this.state.classList);
  };

  componentDidMount() {
    console.log("hello");
    console.log(this.state.classes);
    axiosWithAuth()
      .get(`https://anywhere-fitnesssite.herokuapp.com/classes/`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          classes: res.data.classes,
        });
      })
      .catch((err) => console.log(err));
  }

  // render students with features from above
  render() {
    return (
      <div>
        <h1 className="workout-list">Workout List</h1>
        <br/>
        <div className={`workouts`}>
          {this.state.classes.map((classes) => (
            <div className={'workoutcards'} key={classes.id}>
                  <h2 className="workoutTitle"><span className="workoutTitleSpan">Workout Name: </span>{classes.name}</h2>
                  <br></br>
                 
                  <p className="workoutDetails"><span className="workoutDetailsSpan">Class Type: </span>{classes.type}</p>
                
                  <p className="workoutDetails"><span className="workoutDetailsSpan">Start Time: </span>{classes.startTime}</p>
                 
                  <p className="workoutDetails"><span className="workoutDetailsSpan">Duration: </span>{classes.duration}</p>
               
                  <p className="workoutDetails"><span className="workoutDetailsSpan">Intensity: </span>{classes.intensity}</p>
          
                  <p className="workoutDetails"><span className="workoutDetailsSpan">Location: </span>{classes.location}</p>

                  <p className="workoutDetails"><span className="workoutDetailsSpan">Currently Enrolled: </span>{classes.numberOfRegisteredAttendees}</p>
                
                  <p className="workoutDetails"><span className="workoutDetailsSpan">Max Class Size: </span>{classes.maxClassSize}</p>

                  <button className="add-button" onClick={() => {this.addClassList(classes)}}>Add</button>
              
            </div>
          ))}
        </div>
        <br/>
        <div className="classList">
          <h2>My Workouts</h2>
          {this.state.classList.map((fitnessClass) => (
            <div className='workoutcards'>
              <h3>{fitnessClass.name}</h3>
              <p className="workoutDetails"><span className="workoutDetailsSpan">Class Type: </span>{fitnessClass.type}</p>
            
              <p className="workoutDetails"><span className="workoutDetailsSpan">Start Time: </span>{fitnessClass.startTime}</p>
              
              <p className="workoutDetails"><span className="workoutDetailsSpan">Duration: </span>{fitnessClass.duration}</p>
            
              <p className="workoutDetails"><span className="workoutDetailsSpan">Intensity: </span>{fitnessClass.intensity}</p>
      
              <p className="workoutDetails"><span className="workoutDetailsSpan">Location: </span>{fitnessClass.location}</p>

              <button className="delete-button" onClick={() => {this.deleteClassList(fitnessClass)}}>Delete</button>
            </div> 
          ))}
        </div>

      </div>
    );
  }
}

export default ClientDashboard;
