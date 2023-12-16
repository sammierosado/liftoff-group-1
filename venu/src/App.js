import './App.css';
import {useJsApiLoader, GoogleMap} from '@react-google-maps/api';

const mapCenter = {lat: 38.627003, lng: -90.199402}

function App() {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="App" >
      <header className="App-header">
        
        {/* topmenu is basic nav bar at top of screen
            rest of header is default react populated. left in -for now- in case anyone has a use for the link template. */}
        <ul class="topmenu">
          <li><a href="#home" class="active">Home</a></li>
          <li><a href="#createevent">Create Event</a></li>
          <li><a href="#venues">Venues</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

      {/* google map */}
      <div className="VENU-map">
        <box>
          {/*do i need to set box size/position etc in css/name the box to reference there? brush up x1000000 */}
            <GoogleMap center={mapCenter} zoom={10} mapContainerStyle={{width: '100%', height: '100%'}} />
        </box>
      </div>

    </div>
  );
}

export default App;
