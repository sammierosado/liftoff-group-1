import React, { useMemo } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import MapMarkers from './MapMarkers.js';

export default function Map() {

    // geographical location on which the Google map is centered. feel free to change it!
    const mapCenter = useMemo(() => ({lat: 38.627003, lng: -90.199402}), []);
    // disableDefaultUI removes the grid/satellite map toggle and street view options for a cleaner, more basic map.
    // mapId is the key for applying map styling created on Google Maps Platform in Google Cloud.
    const mapOptions = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        mapId: "16ffd592e4dd8d36",
    }), []);

    // checking if the API key is loading properly. y'all will need your own in your .env.local file but I will walk you through it!!
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      })
      if (!isLoaded) return <div>Loading...</div>;

    return (
        <div>
            {/* google map screen position from Home.css */}
            <div className="VENU-map">
                {/* basic parameters required to render map on Home page */}
                <GoogleMap center={mapCenter} zoom={10} mapContainerClassName="map-container" options={mapOptions}>
                    {MapMarkers.map((venue, index) => (
                        <Marker key={index} position={{ lat: venue.lat, lng: venue.lng }} />
                    ))}
                </GoogleMap>
            </div>
        </div>
    )
}
