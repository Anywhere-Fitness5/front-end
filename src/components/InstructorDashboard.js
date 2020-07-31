import React from "react";
import {Route, Redirect} from "react-router-dom";
import {AddClass} from "./AddClass";
import {EditClass} from "./EditClass";

const InstructorDashboard = () =>{

    return (
        <div className="instructor">
            <h2>Instructors</h2>
            <AddClass />
        </div>
    )
}


export default InstructorDashboard