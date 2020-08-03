import React, {useState, useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { EditClass } from "./EditClass";
import {AddClass} from "./AddClass";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class InstructorDashboard extends React.Component {
  state = {
    classList: [
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

  deleteClass (e) {
    e.preventDefault();

    axiosWithAuth()
      .delete(`https://anywhere-fitnesssite.herokuapp.com/classes/${e.id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          classes: res.data.classes,
        })
      })
      .catch(err => console.log(err))
  };
  
  render() {
    return (
      <div className="instructor">
        <h2>Instructors</h2>
  
        <AddClass />
  
        <div className="workouts-list">
          {this.state.classList.map((fitnessClass) => (
            
            <div className="workouts" key={fitnessClass.id}>
              <h3>{fitnessClass.name}</h3>
              <p>Type: {fitnessClass.type}</p>
              <p>Start Time: {fitnessClass.startTime}</p>
              <p>Duration (minutes): {fitnessClass.duration}</p>
              <p>Intensity: {fitnessClass.intensity}</p>
              <p>Location: {fitnessClass.location}</p>
              <p>Number of Attendees: {fitnessClass.numberOfRegisteredAttendees}</p>
              <p>Max Class Size: {fitnessClass.maxClassSize}</p>
  
              <button className="delete-button" onClick={this.deleteClass}>Delete</button>
              {/* <button className="edit-button" onClick={() => push(`/edit-class/${fitnessClass.id}`)}>Edit</button> */}
  
            </div>
            ))}
        </div>
        
      </div>
    );
  }
  
};

export default InstructorDashboard;
