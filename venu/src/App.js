import * as Pages from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
  // Adds ability to path to different pages, just add Route here and info in index.js in src/pages folder.
  return (
    <Router>          
     <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/events" element={<Pages.Events />} />
      </Routes>    
    </Router>
  );
 
}

export default App;
