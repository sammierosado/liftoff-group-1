import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import './stylesheets/ArtistDetails.css';
import Navbar from './Navbar';

const ArtistDetails = () => {
  const [artistDetails, setArtistDetails] = useState({});
  const [buttonClicked, setButtonClicked] = useState(false);
  const { id } = useParams();

  // TODO if time permits, -> if not yet found and next has value, advance
  // TODO if time permits, query user for token and if true hide login link
  const artistName = artistDetails.artistName;
  console.log('line 14 return artistName: ', artistName);

  const searchArtist = async (artistName, offset) => {
    await getData(artistName, offset).then(response => {
      if (offset > 200) {
        console.log('Unable to find artist.');
      } else if (!response) {
        searchArtist(artistName, offset + 50);
      } else {
        getArtistTracks(response.id);
        setButtonClicked(true);
      }
    })
  }

  const getData = async (artistName, offset) => {
    let artistSearchReturn;
    let searchName = artistDetails.artistName.replace("'", '');
    await axios.get(`https://api.spotify.com/v1/search?q=artist:${searchName}&type=artist&limit=50&offset=${offset}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      artistSearchReturn = response.data.artists.items.find(item => item.name === artistDetails.artistName);
    }).catch(error => {
      console.log(error);
    })
    console.log('line 41 return searchName: ', searchName);
    return artistSearchReturn;
  }

  const getArtistTracks = async (artistId) => {
    await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      const tracks = response.data.tracks;
      setArtistDetails(prevState => ({
        ...prevState,
        tracks: tracks
      }));
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/artists/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched artist details:', data);
        setArtistDetails(data);
      } catch (error) {
        console.error('Error fetching artist details:', error);
      }
    };

    fetchArtistDetails();
  }, [id]);

  return (
    <div className="artist-details-page-background">
      <Navbar />
      <div className="events-container artist-details-container">
        <h2>{artistDetails.artistName}</h2>
        <p><strong>Genre:</strong> {artistDetails.genre}</p>

        {!buttonClicked && (
            <div className="search-tracks-button">
              <button onClick={() => searchArtist(artistDetails.artist?.artistName, 0)}>
                View Top Tracks on Spotify
              </button>
            </div>
        )}

        <div class="flex-container">
            <div className='left-column'>
                {artistDetails.tracks && artistDetails.tracks.slice(0, 5).map((track, index) => (
                    <div key={index} className='track-container'>
                        <img className='album-image' src={track.album.images[0].url} alt='album img'/>
                        <div className='track-info'>
                            <h3>{track.name}</h3>
                            <p>{track.album.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='right-column'>
                {artistDetails.tracks && artistDetails.tracks.slice(5).map((track, index) => (
                    <div key={index} className='track-container'>
                        <img className='album-image' src={track.album.images[0].url} alt='album img'/>
                        <div className='track-info'>
                            <h3>{track.name}</h3>
                            <p>{track.album.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div>
          <a className="login-link" href="http://localhost:3000/spotify-login">
            Login to Spotify to See Top Artist Tracks
          </a>
        </div>

      </div>
    </div>
  );
};

export default ArtistDetails;