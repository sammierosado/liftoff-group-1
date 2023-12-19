import './stylesheets/Home.css';
import {useJsApiLoader, GoogleMap} from '@react-google-maps/api';
import Navbar from '../components/Navbar';

// geographical location on which the Google map is centered. feel free to change it!
// TODO add a comment with lat/lng of 3 cities for ease of access
const mapCenter = {lat: 38.627003, lng: -90.199402}

function Home() {

    // checking if the API key is loading properly. y'all will need your own in your .env.local file but I will walk you through it!!
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      })
      if (!isLoaded) return <div>Loading...</div>;

    return (
        <div>
          <Navbar/> 
          <div className="Home" >

          {/* google map information */}
          <div className="VENU-map">
              {/* may end up separating out parameters, this was just to make sure it worked correctly */}
              <GoogleMap center={mapCenter} zoom={10} mapContainerStyle={{width: '100%', height: '100%'}} />
          </div>
        
        </div>
      </div>
    );
}

export default Home;
