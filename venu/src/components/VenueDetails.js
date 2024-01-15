import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './stylesheets/VenueDetails.css';
import Navbar from './Navbar';

const VenueDetails = () => {
  const [venueDetails, setVenueDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchVenueDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/venues/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setVenueDetails(data);
      } catch (error) {
        console.error('Error fetching venue details:', error);
      }
    };

    fetchVenueDetails();
  }, [id]);



  return (
      <div className="page-background">
        <Navbar />
        <div className="events-container venue-details-container">
          <h2>{venueDetails.venueName}</h2>
          <p><strong>Address:</strong> {venueDetails.venueAddress}</p>
          <p><strong>City:</strong> {venueDetails.venueCity}</p>
          <p><strong>State:</strong> {venueDetails.venueState}</p>
          <p><strong>Accessibility:</strong></p>
          <ul>
            <li>Wheelchair Accessible: {venueDetails.wheelchairAccessible ? 'Yes' : 'No'}</li>
            <li>ADA Bathrooms: {venueDetails.adabathrooms ? 'Yes' : 'No'}</li>
            <li>ADA Seating: {venueDetails.adaseating ? 'Yes' : 'No'}</li>
            <li>Bus Stop Nearby: {venueDetails.busStopClose ? 'Yes' : 'No'}</li>
            <li>Sign Language Interpretation: {venueDetails.signLanguage ? 'Yes' : 'No'}</li>
            <li>Clear Pathways: {venueDetails.clearPathways ? 'Yes' : 'No'}</li>
            <li>Descriptive Audio: {venueDetails.descriptiveAudio ? 'Yes' : 'No'}</li>
            <li>Elevators: {venueDetails.elevators ? 'Yes' : 'No'}</li>
            <li>Multi-level Venue: {venueDetails.multiLevel ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      </div>
    );
  };


export default VenueDetails;