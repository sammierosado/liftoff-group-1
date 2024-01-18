import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './stylesheets/EventDetails.css';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';


const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/events/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setEventDetails(data);
      } catch (error) {
          console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, [id]);

  return (
    <div className="event-details-page-background">
      <Navbar />
      <div className="events-container event-details-container">
        <h2>{eventDetails.eventName}</h2>
        <p>
          <strong>Artist:</strong>{' '}
          <Link to={`/artists/${eventDetails.artist?.id}`}>
            {eventDetails.artist?.artistName}
            <span className="artist-details-message"></span>
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
        <div className="event-flyer">
              {eventDetails.flyerImage ? (
                   <img
                     src={`http://localhost:8080/api/events/flyer/${eventDetails.id}`}
                     alt="Event Flyer"
                     className="flyer-image"
                   />
                 ) : (
                   <p>No flyer available for this event.</p>
                 )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;