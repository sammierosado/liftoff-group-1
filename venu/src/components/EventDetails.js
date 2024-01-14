import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import './stylesheets/EventDetails.css';
import Navbar from './Navbar';

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState({});
  const { id } = useParams();

// TODO if time permits, -> if unfound and next has value, advance
  const searchArtist = async (artistName, offset) => {
    await getData(artistName, offset).then( response => {
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
         }).then( response => {
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
       }).then( response => {
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
      <div className="page-background">
      <Navbar />
      <div className="events-container event-details-container">
        <h2>{eventDetails.eventName}</h2>
        <p><strong>Artist:</strong> {eventDetails.artist?.artistName}</p>
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
        <button className="search-tracks" onClick={() => searchArtist(eventDetails.artist?.artistName, 0)}>View Top 5 Tracks on Spotify</button>
      </div>
      <div className="search-tracks-results">
        {/* return artist tracks gathered in getArtistTracks and display first 5 along with album image */}
      </div>
      </div>
      </div>
    );
  };

  export default EventDetails;