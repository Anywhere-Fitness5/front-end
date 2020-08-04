
import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="NavBar">
            <div className="title">
                <h1>Anywhere Fitness</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login/Logout</Link>
                <Link to="/aboutus">About Us</Link>
            </div>

        </div>
    )
}

export default NavBar