import React, { useEffect, useState } from 'react';

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

    // Perform geocoding for each venue
    const geocodeVenues = async () => {
      const venueAddresses = venues.map((venue) => {
        return `${venue.venueAddress}, ${venue.venueCity}, ${venue.venueState}`;
      });

      // Use the Google Maps Geocoding API to get coordinates for each address
      const coordinatesPromises = venueAddresses.map(async (address) => {
        let googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=googleMapsApiKey`);
        const data = await response.json();
        const location = data.results[0].geometry.location;
        return { address, location };
      });

      // Wait for all geocoding promises to resolve
      const coordinates = await Promise.all(coordinatesPromises);

      console.log(coordinates);
      // Now 'coordinates' is an array of objects, each containing address and location
    };

    // Trigger geocoding when venues change
    useEffect(() => {
      geocodeVenues();
    }, [venues]);

    return null;
  };

  export default VenueAddresses;