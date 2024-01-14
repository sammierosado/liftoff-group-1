import React, { useMemo, useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import VenueAddresses from './VenueAddresses.js';

const Map = () => {
    const [map, setMap] = useState(null);
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });
    const mapCenter = useMemo(() => ({lat: 38.627003, lng: -90.199402}), []);
    const mapOptions = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
        mapId: "16ffd592e4dd8d36",
    }), []);
    const onLoad = (map) => {
        setMap(map);
    };
    useEffect(() => {
        if (isLoaded) {
            console.log("Maps API loaded successfully.")
        }
    }, [isLoaded]);

    return isLoaded ? (
        <div>
            {/* google map screen position from Home.css */}
            <div className="VENU-map">
                {/* basic parameters required to render map on Home page */}
                <GoogleMap center={mapCenter} zoom={10} mapContainerStyle={{ height: '100%', width: '100%' }} options={mapOptions}>
                </GoogleMap>
            </div>
        </div>
    ) : (
        <div>{loadError ? 'Error loading Maps API' : 'Loading...'}</div>
    );

};

export default Map;