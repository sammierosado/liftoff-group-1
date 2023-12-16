import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        
        {/* topmenu is basic nav bar at top of screen
            rest of header is default react populated. left in for now in case anyone has a use for the template. */}
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
          <div class="overlay">
            {/* TODO map overlay */}
          </div>
        </box>
      </div>

    </div>
  );
}

export default App;
