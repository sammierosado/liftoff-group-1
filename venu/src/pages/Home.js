import './stylesheets/Home.css';
import Navbar from '../components/Navbar';
import UpcomingEvents from '../components/UpcomingEvents';
import Map from '../components/Map';

function Home() {

    return (
        <div>
          <Navbar/> 
          <div className="Home" >
              <div className="VENU-map">
                  <Map />
              </div>
              <div className="upcoming-events-container">
                <UpcomingEvents />
              </div>
        </div>
    </div>
    );
}

export default Home;
