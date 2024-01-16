import React, { useEffect, useState, useMemo } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';

const VenuGoogleMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const mapCenter = useMemo(() => ({ lat: 38.627003, lng: -90.199402 }), []);
  const mapOptions = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
    mapId: "16ffd592e4dd8d36",
  }), []);

  const [geocodedData, setGeocodedData] = useState([]);

  useEffect(() => {
    const fetchAndGeocodeVenues = async () => {
      try {
        // Fetch venues
        const response = await fetch('http://localhost:8080/api/venues');
        if (!response.ok) {
          console.error('Error fetching venues:', response);
          return;
        }

        const venuesData = await response.json();

        // Perform geocoding for each venue
        const venueAddresses = venuesData.map((venue) => {
          return `${venue.venueAddress}, ${venue.venueCity}, ${venue.venueState}`;
        });

        const coordinatesPromises = venueAddresses.map(async (address) => {
          try {
            const googleMapsApiKey = process.env.REACT_APP_GEOCODING_API_KEY;
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleMapsApiKey}`);

            if (!response.ok) {
              throw new Error(`Geocoding error: ${response.status}`);
            }

            const data = await response.json();

            if (data.results && data.results.length > 0) {
              const location = data.results[0].geometry.location;
              return { address, location };
            } else {
              console.warn(`Geocoding warning: No location found for address - ${address}`);
              return { address, location: null };
            }
          } catch (error) {
            console.error(error);
            return { address, location: null };
          }
        });

        // Wait for all geocoding promises to resolve
        const coordinates = await Promise.all(coordinatesPromises);

        // Set the geocoded data in the state
        setGeocodedData(coordinates);
      } catch (error) {
        console.error('Error fetching and geocoding venues:', error);
      }
    };

    // Fetch and geocode venues when the component mounts
    fetchAndGeocodeVenues();
  }, []);

  return isLoaded ? (
    <div>
      <div className="VENU-map">
        <GoogleMap center={mapCenter} zoom={10} mapContainerStyle={{ height: '100%', width: '100%' }} options={mapOptions}>
          {/* Render Markers using the geocoded data */}
          {geocodedData.map((venue) => (
            <Marker
              key={venue.address}
              position={venue.location ? { lat: venue.location.lat, lng: venue.location.lng } : null}
            />
          ))}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <div>{loadError ? 'Error loading Maps API' : 'Loading...'}</div>
  );
};

export default VenuGoogleMap;