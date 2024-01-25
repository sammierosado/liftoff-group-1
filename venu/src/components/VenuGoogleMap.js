import React, { useEffect, useState, useMemo } from 'react';
import { useJsApiLoader, GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const VenuGoogleMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  // TODO: query user for IP address, set mapCenter
  // geographical location on which the Google map is centered. feel free to change it!
  // STL coordinates: {lat: 38.627003, lng: -90.199402}
  // KC coordinates: {lat: 	39.099724, lng: -94.578331}
  // PHILLY coordinates: {lat: 39.952583, lng: -75.165222}
  const mapCenter = useMemo(() => ({lat: 38.627003, lng: -90.199402}), []);

  const mapOptions = useMemo(() => ({
    disableDefaultUI: true,
    clickableIcons: false,
    mapId: "16ffd592e4dd8d36",
  }), []);

  const [geocodedData, setGeocodedData] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);

  // useEffect hook to fetch venue data from backend and uses google geocoding api to convert to coordinates for map markers
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
        console.log("venuesData: ", venuesData);

        // Geocoding for each venue
        const venueAddresses = venuesData.map((venue) => {
          return `${venue.venueName}, ${venue.venueAddress}, ${venue.venueCity}, ${venue.venueState}`;
        });
        const coordinatesPromises = venueAddresses.map(async (address) => {
          try {
            const googleMapsApiKey = process.env.REACT_APP_GEOCODING_API_KEY;
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleMapsApiKey}`);

            if (!response.ok) {
              throw new Error(`Geocoding error: ${response.status}`);
            }

            const data = await response.json();
            console.log("const data: ", data);

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
        console.log("venueAddresses (33): ", venueAddresses);

        // Wait for all geocoding promises to resolve
        const coordinates = await Promise.all(coordinatesPromises);

        // Set the geocoded data in the state
        setGeocodedData(coordinates);
      } catch (error) {
        console.error('Error fetching and geocoding venues:', error);
      }
    };

    fetchAndGeocodeVenues();
  }, []);

  // onClick event for displaying venue name/address on map markers
  const handleMarkerClick = (venue) => {
    setSelectedVenue(venue);
  };

  console.log("selectedVenue: ", selectedVenue);

  const handleInfoWindowClose = () => {
    setSelectedVenue(null);
  };


  return isLoaded ? (
    <div>
      <div className="VENU-map">
        <GoogleMap center={mapCenter} zoom={10} mapContainerStyle={{ height: '100%', width: '100%' }} options={mapOptions}>
          {/* render Markers using the geocoded data */}
          {geocodedData.map((venue) => (
            <Marker
              key={venue.address}
              position={{ lat: venue.location.lat, lng: venue.location.lng }}
              onClick={() => handleMarkerClick(venue)}
            />
          ))}
          {/* render InfoWindow for the selected venue onClick */}
          {selectedVenue && (
            <InfoWindow
              position={{ lat: selectedVenue.location.lat, lng: selectedVenue.location.lng }}
              onCloseClick={handleInfoWindowClose}
            >
              <div>
                {selectedVenue.address}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <div>{loadError ? 'Error loading Maps API' : 'Loading...'}</div>
  );
};

export default VenuGoogleMap;