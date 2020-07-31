// Name, type, start time, duration, intensity
// Location, num registered, max class size
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const AddClass = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(0);
  const [intensity, setIntensity] = useState("");
  const [location, setLocation] = useState("");
  const [
    numberOfRegisteredAttendees,
    setNumberOfRegisteredAttendees,
  ] = useState(0);
  const [maxClassSize, setMaxClassSize] = useState(0);

  // handle name changes
  const handleName = (e) => {
    setName(e.target.value);
  };

  // handle name changes
  const handleType = (e) => {
    setType(e.target.value);
  };
  // handle email changes
  const handleTime = (e) => {
    setStartTime(e.target.value);
  };
  // handle email changes
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };
  // handle email changes
  const handleIntensity = (e) => {
    setIntensity(e.target.value);
  };
  // handle email changes
  const handleRegistered = (e) => {
    setNumberOfRegisteredAttendees(e.target.value);
  };
  // handle email changes
  const handleMax = (e) => {
    setMaxClassSize(e.target.value);
  };

  // handle email changes
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  // handle submit to add
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://anywhere-fitnesssite.herokuapp.com/classes", {
        name: name,
        type: type,
        location: location,
        startTime: startTime,
        duration: duration,
        intensity: intensity,
        numberOfRegisteredAttendees: numberOfRegisteredAttendees,
        maxClassSize: maxClassSize,
      })
      .then(console.log("good"))
      .catch((err) => console.log(err));

    setName("");
    setType("");
    setStartTime("");
    setDuration("");
    setIntensity("");
    setLocation("");
    setNumberOfRegisteredAttendees("");
    setMaxClassSize("");
  };

  return (
    <div className="add-workout">
      <form onSubmit={handleSubmit} className={`add-container`}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          placeholder="Workout Name"
          className={`add-input`}
        />

        <input
          type="text"
          name="type"
          value={type}
          onChange={handleType}
          placeholder="Type"
          className={`add-input`}
        />

        <input
          type="text"
          name="startTime"
          value={startTime}
          onChange={handleTime}
          placeholder="Start Time"
          className={`add-input`}
        />
        <input
          type="number"
          name="duration"
          value={duration}
          onChange={handleDuration}
          placeholder="Duration"
          className={`add-input`}
        />
        <input
          type="text"
          name="intensity"
          value={intensity}
          onChange={handleIntensity}
          placeholder="Intensity"
          className={`add-input`}
        />

        <input
          type="text"
          name="location"
          value={location}
          onChange={handleLocation}
          placeholder="Location"
          className={`add-input`}
        />
        <input
          type="number"
          name="numberOfRegisteredAttendees"
          value={numberOfRegisteredAttendees}
          onChange={handleRegistered}
          placeholder="Registed Attendees"
          className={`add-input`}
        />
        <input
          type="number"
          name="maxClassSize"
          value={maxClassSize}
          onChange={handleMax}
          placeholder="Max Class Size"
          className={`add-input`}
        />
        <button className="add-button">Add Class</button>
      </form>
    </div>
  );
};

export default AddClass;
