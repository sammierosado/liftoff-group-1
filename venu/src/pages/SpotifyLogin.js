import React from 'react';
import { CLIENT_ID, CLIENT_SECRET, AUTH_ENDPOINT, REDIRECT_URI, SPACE_DELIMITER, RESPONSE_TYPE, SCOPES, SCOPES_URL_PARAM } from '../auth/SpotifyAuth';
import Navbar from "../components/Navbar";
import './stylesheets/AllSpotify.css';

// TODO: rename spotify login classNames to specify spotify vs generic login (SpotifyLogin.js, Spotify.js, AllSpotify.css, ArtistDetails.js, ArtistDetails.css)
const SpotifyLogin = () =>  {

    // redirects user to spotify api authentication url including necessary client/scope/redirect return info
    const handleLogin = () => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES_URL_PARAM}`;
    }

    return (
    <div className="spotify-login-background">
        <Navbar/>
        <div className="spotify-login-container">
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