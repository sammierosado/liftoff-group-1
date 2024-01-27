import React from 'react';
import Navbar from "../components/Navbar";


const UserLogin = () =>  {

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
        </div>
    </div>
    );

};