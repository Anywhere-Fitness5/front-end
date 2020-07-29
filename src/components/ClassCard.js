import React from "react";
import {Route, NavLink, useHistory} from "react-router-dom";
import {axiosWithAuth} from "../utils/axiosWithAuth";
// import {AddClass} from "./AddClass";
import {EditClass} from "./EditClass";

function ClassCard(props){
    const {push} = useHistory();

    const fitnessClass = props.classes.find(
        el => `${el.id}` === props.match.params.id
    );

    if (!props.classes.length || !fitnessClass) {
        return <h3>Loading class data...</h3>
    };

    const deleteClass = e => {
        e.preventDefault();

        axiosWithAuth.delete(`https://anywhere-fitnesssite.herokuapp.com/classes/${fitnessClass.id}`)
            .then(res => {
                props.setClasses(res.data);
                push("/class-list");
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="card-wrapper">
            <h3>{fitnessClass.name}</h3>
            <p>Type: {fitnessClass.type}</p>
            <p>Start Time: {fitnessClass.startTime}</p>
            <p>Duration (minutes): {fitnessClass.duration}</p>
            <p>Intensity: {fitnessClass.intensity}</p>
            <p>Location: {fitnessClass.location}</p>
            <p>Number of Attendees: {fitnessClass.numberOfRegisteredAttendees}</p>
            <p>Max Class Size: {fitnessClass.maxClassSize}</p>

            <button className="delete-button" onClick={deleteClass}>Delete</button>
            <button className="edit-button" onClick={() => push(`/edit-class/${fitnessClass.id}`)}>Edit</button>

        </div>
    )





};

export default ClassCard;
