import React from "react";
import { Link } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";
import AddClass from "./AddClass";

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
        <AddClass />
        <br></br>
        <div className={`workouts`}>
          {this.state.classes.map((classes) => (
            <div key={classes.id}>
              <div>
                <h2>
                  {classes.name}
                  <br></br>
                  <br></br>
                  {classes.type}
                  <br></br>
                  {classes.startTime}
                  <br></br>
                  {classes.duration}
                  <br></br>
                  {classes.intensity}
                  <br></br>
                  {classes.location}

                  <br></br>
                  {classes.numberOfRegisteredAttendees}
                  <br></br>
                  {classes.maxClassSize}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ClientDashboard;
