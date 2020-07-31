import React, { Component } from "react";
import {Route, Redirect} from "react-router-dom";
import cookie from "cookie";

  const PrivateRoute = ({ component: Component, ...rest }) => {

    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie);
        if (cookies.id_token) {
          return true;
        }
        return false;
      };

    return (
        <Route
      {...rest}
      render={props =>
        checkAuth() === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
    );

    };
    


  export default PrivateRoute;