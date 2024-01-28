import React from 'react';
import Navbar from "../components/Navbar";
import './stylesheets/UserProfile.css';


const UserProfile = () =>  {

// TODO: add user profile icon and name
// TODO: add user starred events/artists/icons
// TODO: add user reviews/ratings
// TODO: refactor so user spotify profile appears on profile page as a small addition? (Page->component may not work, in which case dropdown submenu?)

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