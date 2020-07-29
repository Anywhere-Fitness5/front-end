
import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="NavBar">
            <div className="title">
                <h1>Anywhere Fitness</h1>
            </div>
            <div className="links">
                <Link path to="/">Home</Link>
                <Link path to="/signup">Sign Up</Link>
                <Link path to="/login">Login</Link>
                <Link path to="/aboutus">About Us</Link>
            </div>

        </div>
    )
}

export default NavBar