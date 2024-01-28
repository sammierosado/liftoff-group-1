import * as Pages from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventDetails from './components/EventDetails';
import VenueDetails from './components/VenueDetails';
import ArtistDetails from './components/ArtistDetails';

function App() {

  
  // Adds ability to path to different pages, just add Route here and info in index.js in src/pages folder.
  return (
   
    <Router>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/login" element={<Pages.UserLogin />} />
        <Route path="/profile" element={<Pages.UserProfile />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/venues" element={<Pages.Venues />} />
        <Route path="/venues/:id" element={<VenueDetails />} />
        <Route path="/artists" element={<Pages.Artists />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/events" element={<Pages.Events />} />
        <Route path="/spotify" element={<Pages.Spotify />} />
        <Route path="/spotify-login" element={<Pages.SpotifyLogin />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </Router>
    
    
   
  );
  
}

export default App;
