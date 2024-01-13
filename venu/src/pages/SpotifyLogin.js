import React from 'react';
import { CLIENT_ID, CLIENT_SECRET, AUTH_ENDPOINT, REDIRECT_URI, SPACE_DELIMITER, RESPONSE_TYPE } from '../auth/SpotifyAuth';
import Navbar from "../components/Navbar";


const SpotifyLogin = () =>  {

    const handleLogin = () => {
        window.location = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    }
{/* can abstract into a component if decide want to use it elsewhere */}
    return (
    <div>
        <Navbar/>
        <div className="Spotify"/>

        <h1>Login with Spotify</h1>
        <button onClick={() => handleLogin()}>Login</button>
        <div className="tba">
            <ul>
            <li>Words!</li>
            <li>Things!</li>
            </ul>
        </div>

    </div>
    );

};

export default SpotifyLogin;