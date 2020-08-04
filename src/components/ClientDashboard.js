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
              <div>
                <>
                  <h1 className="workoutTitle"><span className="workoutTitleSpan">Workout Name: </span>{classes.name}</h1>
                  <br></br>
                 
                  <h2 className="workoutDetails"><span className="workoutDetailsSpan">Class Type: </span>{classes.type}</h2>
                
                  <h2 className="workoutDetails"><span className="workoutDetailsSpan">Start Time: </span>{classes.startTime}</h2>
                 
                  <h2 className="workoutDetails"><span className="workoutDetailsSpan">Duration: </span>{classes.duration}</h2>
               
                  <h2 className="workoutDetails"><span className="workoutDetailsSpan">Intensity: </span>{classes.intensity}</h2>
          
                  <h2 className="workoutDetails"><span className="workoutDetailsSpan">Location: </span>{classes.location}</h2>

                  <h2 className="workoutDetails"><span className="workoutDetailsSpan">Currently Enrolled: </span>{classes.numberOfRegisteredAttendees}</h2>
                
                  <h2 className="workoutDetails"><span className="workoutDetailsSpan">Max Class Size: </span>{classes.maxClassSize}</h2>

                  <button className="delete-button" onClick={() => {this.deleteClassList(classes)}}>Delete</button>
                  <button className="add-button" onClick={() => {this.addClassList(classes)}}>Add</button>
                </>
              </div>
              
            </div>
          ))}
        </div>
        <br/>
      </div>
    );
  }
}

export default ClientDashboard;
