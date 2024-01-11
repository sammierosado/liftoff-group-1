import { React, useMemo } from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';


export default function Map() {

    // geographical location on which the Google map is centered. feel free to change it!
    const mapCenter = useMemo(() => ({lat: 38.627003, lng: -90.199402}), []);
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
            {/* google map information */}
            <div className="VENU-map">
                {/* may end up separating out parameters, this was just to make sure it worked correctly */}
                <GoogleMap center={mapCenter} zoom={10} mapContainerClassName="map-container" options={mapOptions} />
            </div>
        </div>
    )
}