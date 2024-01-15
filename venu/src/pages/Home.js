import './stylesheets/Home.css';
import Navbar from '../components/Navbar';
import UpcomingEvents from '../components/UpcomingEvents';
import VenuGoogleMap from '../components/VenuGoogleMap';

function Home() {

    return (
        <div>
          <Navbar/> 
          <div className="Home" >
            <div className="upcoming-events-container">
                <UpcomingEvents />
            </div>
            <div className="VENU-map" />
                <VenuGoogleMap />
          </div>
        </div>
    );
}

export default Home;
