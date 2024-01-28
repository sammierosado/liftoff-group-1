import React, {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import './stylesheets/Navbar.css';

// TODO: modify-- hide login button when user logged in OR make login/profile button toggle depending on login status OR make submenu dropdown
// TODO: add user logout submenu dropdown in user profile section

function Navbar() {
    const [activeButton, setActiveButton] = useState('');
    const location = useLocation();

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    return (
        // Navbar buttons and code to set buttons to active on click
        <ul className="topmenu">

            <li>
                <Link to='/'
                    onClick={() => handleButtonClick('Home')}
                    className={activeButton === 'Home' || location.pathname === '/' ? 'active' : ''}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link to='/events'
                    onClick={() => handleButtonClick('Events')}
                    className={activeButton === 'Events' || location.pathname === '/events' ? 'active' : ''}
                >
                    Events
                </Link>
            </li>

            <li>
                <Link to='/venues'
                    onClick={() => handleButtonClick('Venues')}
                    className={activeButton === 'Venues' || location.pathname === '/venues' ? 'active' : ''}
                >
                    Venues
                </Link>
            </li>

            <li>
                <Link to='/artists'
                    onClick={() => handleButtonClick('Artists')}
                    className={activeButton === 'Artists' || location.pathname === '/artists' ? 'active' : ''}
                >
                    Artists
                </Link>
            </li>

            <li>
                <Link to='/about'
                    onClick={() => handleButtonClick('About')}
                    className={activeButton === 'About' || location.pathname === '/about' ? 'active' : ''}
                >
                    About Us
                </Link>
            </li>

            <li className='user-profile'>
                <Link to='/profile'
                    onClick={() => handleButtonClick('User')}
                    className={activeButton === 'User' || location.pathname === '/profile' ? 'active' : ''}
                >
                    User
                </Link>
            </li>

            <li className='user-login'>
                <Link to='/login'
                    onClick={() => handleButtonClick('Login')}
                    className={activeButton === 'Login' || location.pathname === '/login' ? 'active' : ''}
                >
                    Login
                </Link>
            </li>

        </ul>
    );
}

export default Navbar;
