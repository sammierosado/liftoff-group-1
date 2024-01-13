import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from "../components/Navbar";

//TODO: Spotify css
const Spotify = () => {

    const [token, setToken] = useState('');

    const [playlists, setPlaylists] = useState({});
    const [artists, setArtists] = useState({});
    const [tracks, setTracks] = useState({});
    const [profile, setProfile] = useState({});

    const PLAYLISTS_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
    const TRACKS_ENDPOINT = "https://api.spotify.com/v1/me/top/tracks?time_range=long_term";
    const ARTISTS_ENDPOINT = "https://api.spotify.com/v1/me/top/artists?time_range=long_term";
    const PROFILE_ENDPOINT = "https://api.spotify.com/v1/me";

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

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    useEffect(() => {
        if(window.location.hash){
            const hash = window.location.hash;
            let token = getParamsFromHash(hash);
            localStorage.setItem('token', token.access_token);
            setToken(token.access_token);
            window.history.pushState({}, null, '/spotify');
        }
        getData(PLAYLISTS_ENDPOINT, setPlaylists);
        getData(TRACKS_ENDPOINT, setTracks);
        getData(ARTISTS_ENDPOINT, setArtists);
        getData(PROFILE_ENDPOINT, setProfile);
    }, []);

    return (
        <div>
        <Navbar />
        <div className='spotify-page'>
            {
                profile.display_name && profile.images &&
                <div className='profile-name'>
                    <img src={profile.images[0].url} alt='profile img'/>
                    <h1>Howdy, {profile.display_name}!</h1>
                </div>
            }

            {
                tracks.items &&
                <div className='tracks'>
                    <h2>Top Tracks</h2>
                    <div>
                        {
                            tracks.items.map((track, index) => {
                                return (
                                    <div key={index}>
                                        <img src={track.album.images[0].url} alt='album img'/>
                                        <h2>{track.name}</h2>
                                        <h3>{track.artists[0].name}</h3>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </div>
        </div>
    );

};

export default Spotify;