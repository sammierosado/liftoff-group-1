import React, { useState, useEffect } from 'react';

const VenueAddresses = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/venues');

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        setVenues(data);
      } catch (error) {
        console.error('Error fetching venues:', error);
        if (error.response) {
          console.error('Response status:', error.response.status);
        }
      }
    };

    fetchVenues();
  }, []);

  return (
    <div className="venue-list">
      {Array.isArray(venues) && venues.length > 0 ? (
        venues.map((venue) => (
          <div key={venue.id}>
            <p><strong>Venue:</strong> {venue.venueName}</p>
            <p><strong>Address:</strong> {venue.venueAddress}, {venue.venueCity}, {venue.venueState}</p>
          </div>
        ))
      ) : (
        <p>No venues found</p>
      )}
    </div>
  );
};

export default VenueAddresses;