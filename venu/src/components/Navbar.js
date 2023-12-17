import './stylesheets/Navbar.css';

function Navbar() {
    return (
        // Navbar buttons
        // TODO Home page is currently hard coded to be "active", add code to change to actual current page.
        <ul className="topmenu">
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/createevent">Events</a></li>
            <li><a href="/venues">Venues</a></li>
            <li><a href="/about">About Us</a></li>
        </ul>
    );
}

export default Navbar;
