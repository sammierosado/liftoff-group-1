import React from 'react';
import { CLIENT_ID, CLIENT_SECRET, AUTH_ENDPOINT, REDIRECT_URI, SPACE_DELIMITER, RESPONSE_TYPE, SCOPES, SCOPES_URL_PARAM } from '../auth/SpotifyAuth';
import Navbar from "../components/Navbar";

//TODO: add section on events page that link directs to spotify login page
//TODO: SpotifyLogin css
const SpotifyLogin = () =>  {

    const handleLogin = () => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES_URL_PARAM}`;
    }
{/* can abstract into a component if decide want to use it elsewhere */}
    return (
    <div>
        <Navbar/>
        <div className="spotify-background">
            <div className="login-title">
                <h1>Login with Spotify</h1>
            </div>
            <div>
                <button className="login-button" onClick={() => handleLogin()}>Login</button>
            </div>
        </div>
    </div>
    );

};

export default SpotifyLogin;