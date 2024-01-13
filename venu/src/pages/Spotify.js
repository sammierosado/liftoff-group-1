import React, { useEffect, useState } from 'react';


const Spotify = () => {

    const [token, setToken] = useState('');

    const getParamsFromHash = (hash) => {
        const hashContent = hash.substring(1);
        const paramsSplit = hashContent.split('&');
        let params = {};
        let values = [];
        paramsSplit.forEach((param) => {
            values = param.split('=');
            params[values[0]] = values[1];
        })
        return params;
    }

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    useEffect(() => {
        if(window.location.hash){
            const hash = window.location.hash;
            const tokens = getParamsFromHash(hash);
            localStorage.setItem('token', tokens.access_token);
            setToken(tokens.access_token);
            window.history.pushState({}, null, '/spotify');
        }
    }, []);

    return (
        <div>
            {
                token &&
                <div>
                    <h1>Welcome to Spotify on VENU!</h1>
                    <p>Here is your token: {token}</p>
                </div>
            }
        </div>
    );

};

export default Spotify;