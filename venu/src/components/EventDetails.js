import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from "axios";
import './stylesheets/EventDetails.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';


const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState({});
  const { id } = useParams();

  // TODO if time permits, -> if unfound and next has value, advance
  const searchArtist = async (artistName, offset) => {
    await getData(artistName, offset).then(response => {
      if (offset > 200) {
        console.log('Unable to find artist.');
      } else if (!response) {
        searchArtist(artistName, offset + 50);
      } else {
        getArtistTracks(response.id);
      }
    })
  }

  const getData = async (artistName, offset) => {
    let artistSearchReturn;
    let searchName = artistName.replace("'", '');
    await axios.get(`https://api.spotify.com/v1/search?q=artist:${searchName}&type=artist&limit=50&offset=${offset}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      artistSearchReturn = response.data.artists.items.find(item => item.name === artistName);
    }).catch(error => {
      console.log(error);
    })
    return artistSearchReturn;
  }

  const getArtistTracks = async (artistId) => {
    await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/events/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        //        console.log('Fetched event details:', data);
        setEventDetails(data);
        //        console.log('Fetched event details:', eventDetails);
      } catch (error) {
        //        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [id]);
  //  console.log('Rendered event details:', eventDetails);

  return (
    <div className="event-details-page-background">
      <Navbar />
      <div className="events-container event-details-container">
        <h2>{eventDetails.eventName}</h2>
        <p>
          <strong>Artist:</strong>{' '}
          <Link to={`/artists/${eventDetails.artist?.id}`}>
            {eventDetails.artist?.artistName}
            <span className="artist-details-message">Click to view artist details</span>
            <FontAwesomeIcon icon={faArrowRight} className="clickable-icon" />
            <FontAwesomeIcon icon={faSpotify} className="spotify-logo" />
          </Link>
        </p>
        <p><strong>Genre:</strong> {eventDetails.artist?.genre}</p>
        <p>
          <strong>Venue:</strong> {eventDetails.venue?.venueName}
          <br />
          {eventDetails.venue?.venueAddress}, {eventDetails.venue?.venueCity}, {eventDetails.venue?.venueState}
        </p>
        <p><strong>Accessibility:</strong></p>
        <ul>
          <li>Wheelchair Accessible: {eventDetails.venue?.wheelchairAccessible ? 'Yes' : 'No'}</li>
          <li>ADA Bathrooms: {eventDetails.venue?.adabathrooms ? 'Yes' : 'No'}</li>
          <li>ADA Seating: {eventDetails.venue?.adaseating ? 'Yes' : 'No'}</li>
          <li>Bus Stop Nearby: {eventDetails.venue?.busStopClose ? 'Yes' : 'No'}</li>
          <li>Sign Language Interpretation: {eventDetails.venue?.signLanguage ? 'Yes' : 'No'}</li>
          <li>Clear Pathways: {eventDetails.venue?.clearPathways ? 'Yes' : 'No'}</li>
          <li>Descriptive Audio: {eventDetails.venue?.descriptiveAudio ? 'Yes' : 'No'}</li>
          <li>Elevators: {eventDetails.venue?.elevators ? 'Yes' : 'No'}</li>
          <li>Multi-level Venue: {eventDetails.venue?.multiLevel ? 'Yes' : 'No'}</li>
        </ul>
        <p><strong>Price:</strong> ${eventDetails.price?.toFixed(2)}</p>
        <p><strong>Date:</strong> {eventDetails.date}</p>
        <div>
          {/*TODO: turn this into a toggle button. if token, search-tracks, else login. OR hide one of the two*/}
        </div>
        <div className="search-tracks-button">
          <button onClick={() => searchArtist(eventDetails.artist?.artistName, 0)}>
            View Top 5 Tracks on Spotify
          </button>
        </div>
        <div>
          <a className="login-link" href="http://localhost:3000/spotify-login">
            Login to Spotify to See Top Artist Tracks
          </a>
        </div>
        <div class="flex-container">
          <div>Track 1</div>
          <div>Track 2</div>
          <div>Track 3</div>
          <div>Track 4</div>
          <div>Track 5</div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;