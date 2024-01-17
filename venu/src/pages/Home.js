import './stylesheets/Home.css';
import Navbar from '../components/Navbar';
import UpcomingEvents from '../components/UpcomingEvents';
import VenuGoogleMap from '../components/VenuGoogleMap';


// geographical location on which the Google map is centered. feel free to change it!
  // STL coordinates: {lat: 38.627003, lng: -90.199402}
  // KC coordinates: {lat: 	39.099724, lng: -94.578331}
  // PHILLY coordinates: {lat: 39.952583, lng: -75.165222}
const mapCenter = {lat: 38.627003, lng: -90.199402}

function Home() {

    return (
        <div>
          <Navbar/> 
          <div className="Home" >
              <div className="VENU-map">
                  <VenuGoogleMap />
              </div>
              <div className="upcoming-events-container">
                <UpcomingEvents />
              </div>
          </div>
        </div>
    );
}

export default Home;
