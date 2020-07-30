//same form for client and instructor, but redirects to different dashboards

import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth.js";

class Login extends React.Component {
  state = {
    credentials: {
      username: "jose123",
      password: "secret",
      instructorCode: "1234"
    },
  };

  // handle the changes of credential
  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.username]: e.target.value,
        [e.target.password]: e.target.value,
        [e.target.instructorCode]: e.target.value

      },
    });
  };

  // login axios, axios with auth built in, need to resolve post with group
  login = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("https://anywhere-fitnesssite.herokuapp.com/users/login", this.state.credentials)
      .then((res) => {
        // localStorage.setItem("token", res.data.token);
        // localStorage.setItem("id", res.data.id);
        if(this.state.credentials.instructorCode === "123"){
          this.props.history.push("/instructor")
        } else { 
          this.props.history.push("/client");
        }
        console.log(res);
        
      })
      .catch((err) => console.log(err.message));
  };

  // render the login form, username and password
  render() {
    return (
      <div>
        <h1 className="login-title">Log In</h1>
        <form onSubmit={this.login} className="credential-form">
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            placeholder="Username"
            className="credential-input"
          />

          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            placeholder="Password"
            className="credential-input"
          />
          <label>
                    If you are an instructor please input your authorization code
          <input
             type="password"
             name="instructorCode"
             value={this.state.credentials.instructorCode}
             onChange={this.handleChange}
             placeholder="InstructorCode"
             className="credential-input"
           />
            </label>

          <button className="submitButton">Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;
