// Name, type, start time, duration, intensity
// Location, num registered, max class size
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

export const AddClass = () => {
  const [formState, setFormState] = useState({
    name: "", //string
    type: "", //string
    startTime: "", //string
    duration: 0, //num
    intensity: "", ///string
    location: "", ///string
    numberOfRegisteredAttendees: 0, //num
    maxClassSize: 0 //num
});

 const changeHandler = e => {
  e.persist();
  setFormState({
      ...formState,
      [e.target.name]: e.target.value
  });
};

  // handle submit to add
  const handleSubmit = (e) => {
    axiosWithAuth()
      .post("https://anywhere-fitnesssite.herokuapp.com/classes", formState)
      .then(console.log("good"), setFormState({
        name: "", //string
        type: "", //string
        startTime: "", //string
        duration: 0, //num
        intensity: "", ///string
        location: "", ///string
        numberOfRegisteredAttendees: 0, //num
        maxClassSize: 0 //num

      }))
      .catch((err) => console.log(err));
  };

  return (
    <div className="add-workout">
      <form onSubmit={handleSubmit} className={`add-container`}>

        <label htmlFor='name'>Name: </label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={changeHandler}
          placeholder="Workout Name"
          className={`add-input`}
        />
        <br/>

        <label htmlFor='type'>Type: </label>
        <input
          type="text"
          name="type"
          value={formState.type}
          onChange={changeHandler}
          placeholder="Type"
          className={`add-input`}
        />
        <br/>


        <label htmlFor='startTime'>Start Time: </label>
        <input
          type="text"
          name="startTime"
          value={formState.startTime}
          onChange={changeHandler}
          placeholder="Start Time"
          className={`add-input`}
        />
        <br/>

        <label htmlFor='duration'>Duration (minutes): </label>
        <input
          type="number"
          name="duration"
          value={formState.duration}
          onChange={changeHandler}
          placeholder="Duration"
          className={`add-input`}
        />
        <br/>

        <label htmlFor='intensity'>Intensity: </label>
        <input
          type="text"
          name="intensity"
          value={formState.intensity}
          onChange={changeHandler}
          placeholder="Intensity"
          className={`add-input`}
        />
        <br/>

        <label htmlFor='location'>Location: </label>
        <input
          type="text"
          name="location"
          value={formState.location}
          onChange={changeHandler}
          placeholder="Location"
          className={`add-input`}
        />
        <br/>

        <label htmlFor='numberOfRegisteredAttendees'>Number of Restistered Attendees: </label>
        <input
          type="number"
          name="numberOfRegisteredAttendees"
          value={formState.numberOfRegisteredAttendees}
          onChange={changeHandler}
          placeholder="Registed Attendees"
          className={`add-input`}
        />
        <br/>

        <label htmlFor='maxClassSize'>Max Class Size: </label>
        <input
          type="number"
          name="maxClassSize"
          value={formState.maxClassSize}
          onChange={changeHandler}
          placeholder="Max Class Size"
          className={`add-input`}
        />
        <br/>

        <button className="add-button">Add Class</button>
      </form>
    </div>
  );
};

export default AddClass;
