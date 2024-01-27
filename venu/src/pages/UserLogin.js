import React from 'react';
import Navbar from "../components/Navbar";
import './stylesheets/UserLogin.css';


const UserLogin = () =>  {

// Just have this here so something renders on screen, will be changed to whatever is needed for account creation/authentication
// Cheesing the admin portal redirection with direct pathing
    return (
    <div className="user-login-background">
        <Navbar/>
        <div className="user-login-container">

            <div className="user-login-title">
                <h1>VENU Login</h1>
            </div>

            <div>
                <button className="user-login-button">Login</button>
            </div>

            <div>
              <a className="admin-link" href="http://localhost:8080">
                Want to Add Events? Join Our Admin Portal
              </a>
            </div>

        </div>
    </div>
    );

};

export default UserLogin;