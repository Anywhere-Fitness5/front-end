import React from "react";
import { EditClass } from "./EditClass";
import {AddClass} from "./AddClass";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class InstructorDashboard extends React.Component {
  state = {
    // isEditing: false,
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
          {Array.from(this.state.classes).map((fitnessClass) => (
            
            <div className="workoutcards" key={fitnessClass.id}>
              <h3>{fitnessClass.name}</h3>
              <p>Type: {fitnessClass.type}</p>
              <p>Start Time: {fitnessClass.startTime}</p>
              <p>Duration (minutes): {fitnessClass.duration}</p>
              <p>Intensity: {fitnessClass.intensity}</p>
              <p>Location: {fitnessClass.location}</p>
              <p>Number of Attendees: {fitnessClass.numberOfRegisteredAttendees}</p>
              <p>Max Class Size: {fitnessClass.maxClassSize}</p>
  
              {/* <button className="delete-button" onClick={this.deleteClass(fitnessClass)}>Delete</button> */}
              {/* <button className="edit-button" onClick={() => ()}>Edit</button> */}
  
            </div>
            ))}
        </div>
        
      </div>
    );
  }
  
};

export default InstructorDashboard;
