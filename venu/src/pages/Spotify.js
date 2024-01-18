import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from "../components/Navbar";
import './stylesheets/AllSpotify.css';


const Spotify = () => {

    const [token, setToken] = useState('');

    const [artists, setArtists] = useState({});
    const [tracks, setTracks] = useState({});
    const [profile, setProfile] = useState({});

    const TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term";
    const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=long_term";
    const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";

    // retrieves user access token (auth)
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

    // requests spotify api for endpoints specified in 11-13 consts
    const getData = async (endpoint, setFunction) => {
        await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then( response => {
            setFunction(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    // sets/updates access token
    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    // extracts token from URL hash and fetches data
    useEffect(() => {
        if(window.location.hash){
            const hash = window.location.hash;
            let token = getParamsFromHash(hash);
            localStorage.setItem('token', token.access_token);
            setToken(token.access_token);
            window.history.pushState({}, null, '/spotify');
        }
        getData(TRACKS_ENDPOINT, setTracks);
        getData(ARTISTS_ENDPOINT, setArtists);
        getData(PROFILE_ENDPOINT, setProfile);
    }, []);

    return (
        <div className='spotify-user-background'>
            <Navbar />
            <div className='spotify-user-container'>
                <div className='user-profile-container'>
                    {profile.display_name && profile.images && (
                        <div>
                            <div className='profile-name' id='title-box' class='flex-container'>
                                <img className='profile-image' src={profile.images[0].url} alt='profile img'/>
                            </div>
                            <div className='welcome-message'>
                                <h2>Welcome, {profile.display_name}! Here are your top tracks: </h2>
                            </div>
                        </div>
                    )}
                </div>

                <div class='flex-container'>
                    <div className='user-tracks'>
                        {tracks.items && (
                            <div className='user-tracks-columns'>

                                <div className='user-tracks-left-column'>
                                    {tracks.items.slice(0, 5).map((track, index) => (
                                        <div key={index} className='track-item'>
                                            <img className='album-image' src={track.album.images[0].url} alt='album img'/>
                                            <div className='user-track-info'>
                                                <h4>{track.name}</h4>
                                                <p>{track.artists[0].name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className='user-tracks-right-column'>
                                    {tracks.items.slice(5, 10).map((track, index) => (
                                        <div key={index} className='track-item'>
                                            <img className='album-image' src={track.album.images[0].url} alt='album img'/>
                                            <div className='user-track-info'>
                                                <h4>{track.name}</h4>
                                                <p>{track.artists[0].name}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Spotify;