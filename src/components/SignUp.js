//instructors need additional authorization code
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string().required("Must input a name").min(2, "error: Must be a valid name"),
    email: yup.string().email("Must be a valid email address").required("Must input an email"),
    password: yup.string().required("Must input a password"),
    role: yup.string(),
    instructorCode: yup.string(),
    terms: yup.boolean().oneOf([true], "Read and Agree terms of use")
});

const SignUP = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        instructorCode: "",
        terms: false
    });

    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        instructorCode: "",
        terms: ""
    })

    const validate = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            });
    };

    const inputChange = e => {
        e.persist();
        console.log("input changed", e.target.value, e.target.checked);
        validate(e);
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
    }

    const formSubmit = e => {
        e.preventDefault();

        formSchema.isValid(formState).then(valid => {
            if (valid) {
                console.log("form submitted");
                axios
                    .post("https://reqres.in/api/users", formState)
                    .then(response => console.log(response))
                    .catch(err => console.log(err));
                //props.addUser(formState);
            } else {
                console.log("form not complete");
            }
        })
    }

    return (
        <div>
            <Link path to="/">Back to Home</Link>
            <h2>Sign Up Form</h2>
            <form onSubmit={formSubmit}>
                <label>
                    Name
            <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formState.name}
                        onChange={inputChange}
                    />
                    {errorState.name.length > 0 ? (<p className="error">{errorState.name}</p>) : null}
                    <label>
                        Email
            <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Input Email"
                            value={formState.email}
                            onChange={inputChange}
                        />
                        {errorState.email.length > 0 ? (<p className="error">{errorState.email}</p>) : null}
                    </label>
                    <label>
                        Password
            <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Input Password"
                            value={formState.password}
                            onChange={inputChange}
                        />
                        {errorState.password.length > 0 ? (<p className="error">{errorState.password}</p> ) : null}
                    </label>
                </label>
                <label htmlFor="role">
                    Are you signing up as a student or as an instructor?
        <select
                        name="role"
                        id="role"
                        value={formState.role}
                        onChange={inputChange}
                    >
                        <option value=" ">Please select an option</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                    </select>
                </label>
                <label>
                    If you are an instructor please input your authorization code
            <input
                        type="password"
                        name="instructorCode"
                        id="instructorCode"
                        placeholder="Your Authorization Code"
                        value={formState.instructorCode}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="terms">
                    Terms and Conditions
        <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formState.terms}
                        onChange={inputChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUP