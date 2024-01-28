import React from 'react';
import Navbar from "../components/Navbar";
import './stylesheets/UserProfile.css';


const UserProfile = () =>  {

// TODO: add user profile icon and name
// TODO: add user starred events/artists/icons
// TODO: add user reviews/ratings
// TODO: refactor so user spotify profile appears on profile page as a small addition? (Page->component may not work, in which case dropdown submenu?)
// User logout-- submenu dropdown on navbar profile section makes most sense if I can refactor how login button displays
// Can we fetch user info from backend for admin users while also handling front-end only users?

    return (
    <div className="user-profile-background">
        <Navbar/>
        <div className="user-profile-container">

            <div className="user-profile-title">
                <h1>Hi, Name!</h1>
                <h3>Welcome to VENU</h3>
            </div>

        </div>
    </div>
    );

};

export default UserProfile;