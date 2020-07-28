// Name, type, start time, duration, intensity
// Location, num registered, max class size
import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

const AddClass = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  // handle name changes
  const handleName = (e) => {
    setName(e.target.value);
  };

  // handle name changes
  const handleType = (e) => {
    setType(e.target.value);
  };

  // handle email changes
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  // handle submit to add
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("https://anywhere-fitnesssite.herokuapp.com/classes/", {
        name: name,
        type: type,
        location: location,
      })
      .then(console.log("good"))
      .catch((err) => console.log(err));

    setName("");
    setType("");
    setLocation("");
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
          name="location"
          value={location}
          onChange={handleLocation}
          placeholder="Location"
          className={`add-input`}
        />
        <button className="add-button">Add Class</button>
      </form>
    </div>
  );
};

export default AddClass;