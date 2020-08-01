import React from "react";
import { Route, Redirect } from "react-router-dom";
import { EditClass } from "./EditClass";
import {AddClass} from "./AddClass";

const InstructorDashboard = () => {
  return (
    <div className="instructor">
      <h2>Instructors</h2>

      <AddClass />
      
    </div>
  );
};

export default InstructorDashboard;
