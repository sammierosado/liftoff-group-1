import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import EventDetails from '../components/EventDetails';
import React, { useState, useEffect } from 'react';
import StarRating from '../components/StarRating';
import './stylesheets/StarRating.css';
import SearchBar from '../components/SearchBar';
import './stylesheets/Events.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FaMusic, FaArrowRight } from 'react-icons/fa';
// does FaArrowRight need to be imported from two sources?



const Events = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);

      }

      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.log('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const parseDate = (dateString) => {
    const parsedDate = new Date(dateString);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate.toISOString().split('T')[0];
    }
    return null;
  };

  const handleSearch = (searchTerm) => {
    const normalizedSearchTerm = searchTerm.replace('/', '-');

    const filtered = events.filter((event) => {
      const { eventName, artist, genre, venue, date } = event;
      const normalizedDate = parseDate(date)?.replace('/', '-');
      const searchTermLower = normalizedSearchTerm.toLowerCase();

      return (
        eventName.toLowerCase().includes(searchTermLower) ||
        artist.artistName.toLowerCase().includes(searchTermLower) ||
        artist.genre.toLowerCase().includes(searchTermLower) ||
        venue.venueName.toLowerCase().includes(searchTermLower) ||
        (normalizedDate && normalizedDate.includes(searchTermLower))
      );
    });

    console.log('Filtered Events:', filtered);
    setFilteredEvents(filtered);
  };

  return (
    <div>
      <Navbar />
      <div className="page-background">
        <div className="events-container">
          <SearchBar handleSearch={handleSearch} />

          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <Link to={`/events/${event.id}`}>
                  <strong className="event-name">{event.eventName}
                    <FontAwesomeIcon icon={faArrowRight} className="clickable-icon" />
                    <FaMusic className="music-note" />
                  </strong>
                </Link>
                <div><strong>Artist:</strong> {event.artist.artistName}</div>
                <div><strong>Genre:</strong> {event.artist.genre}</div>
                <div><strong>Venue:</strong> {event.venue.venueName}</div>
                <div><strong>Date:</strong> {event.date}</div>
              </div>
            ))
          ) : (
            events.map((event) => (
              <div key={event.id} className="event-card">
                <Link to={`/events/${event.id}`}>
                  <strong className="event-name">{event.eventName}
                    <FontAwesomeIcon icon={faArrowRight} className="clickable-icon" />
                    <FaMusic className="music-note" />
                  </strong>
                </Link>
                <div><strong>Artist:</strong> {event.artist.artistName}</div>
                <div><strong>Genre:</strong> {event.artist.genre}</div>
                <div><strong>Venue:</strong> {event.venue.venueName}</div>
                <div><strong>Date:</strong> {event.date}</div>
                <StarRating />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;