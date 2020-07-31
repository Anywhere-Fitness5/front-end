import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";

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
        let value = e.target.value;

        // if (e.target.name === 'duration' || e.target.name === 'numberOfRegisteredAttendees' || e.target.name === 'maxClassSize' ) {
        //     value = parseInt(value, 10);
        // }

        setFormState({
            ...formState,
            [e.target.name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth.post(`https://anywhere-fitnesssite.herokuapp.com/classes/:id`, formState)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <form id="edit-form" onSubmit={handleSubmit}>
            <h3>Add Class</h3>

            <label htmlFor='name'>Name: </label>
            <input 
                type='text'
                name='name'
                onChange={changeHandler}
                placeholder={formState.name}
                value={formState.name}    
            />
            <br/>

            <label htmlFor='type'>Type: </label>
            <input 
                type='text'
                name='type'
                onChange={changeHandler}
                placeholder={formState.type}
                value={formState.type}    
            />
            <br/>

            <label htmlFor='startTime'>Start Time: </label>
            <input 
                type='text'
                name='startTime'
                onChange={changeHandler}
                placeholder={formState.startTime}
                value={formState.startTime}    
            />
            <br/>

            <label htmlFor='duration'>Duration (minutes): </label>
            <input 
                type='number'
                name='duration'
                onChange={changeHandler}
                placeholder={formState.duration} 
                value={formState.duration}    
            />
            <br/>

            <label htmlFor='intensity'>Intensity: </label>
            <input 
                type='text'
                name='intensity'
                onChange={changeHandler}
                placeholder={formState.intensity} 
                value={formState.intensity}    
            />
            <br/>

            <label htmlFor='location'>Location: </label>
            <input 
                type='text'
                name='location'
                onChange={changeHandler}
                placeholder={formState.duration} 
                value={formState.duration}    
            />
            <br/>

            <label htmlFor='numberOfRegisteredAttendees'>Number of Restistered Attendees: </label>
            <input 
                type='number'
                name='numberOfRegisteredAttendees'
                onChange={changeHandler}
                placeholder={formState.numberOfRegisteredAttendees}
                value={formState.numberOfRegisteredAttendees}    
            />
            <br/>

            <label htmlFor='maxClassSize'>Max Class Size: </label>
            <input 
                type='number'
                name='maxClassSize'
                onChange={changeHandler}
                placeholder={formState.maxClassSize} 
                value={formState.maxClassSize}    
            />
            <br/>


            <button type='submit'>Submit</button>

        </form>
    );
};

export default AddClass;