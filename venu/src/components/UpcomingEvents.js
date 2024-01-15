import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/UpcomingEvents.css';
import { FaMusic, FaArrowRight } from 'react-icons/fa';

const UpcomingEvents = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  const fetchUpcomingEvents = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/events', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const filteredEvents = data.filter(event => new Date(event.date) > new Date());
      const sortedEvents = filteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
      const upcomingEventsSubset = sortedEvents.slice(0, 5);

      setUpcomingEvents(upcomingEventsSubset);
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
    }
  };

  useEffect(() => {
    fetchUpcomingEvents();
  }, []);

   return (
      <div>
        <h2>Upcoming Events</h2>
        <ul className="upcoming-events-list">
          {upcomingEvents.map(event => (
            <li key={event.id} className="event-card">
              <Link to={`/events/${event.id}`}>
                <strong className="event-name">{event.eventName}</strong>
                <FaArrowRight className="clickable-icon" />
                <FaMusic className="music-note" />
              </Link>
              <br />
              <strong>Artist:</strong> {event.artist.artistName} <br />
              <strong>Venue:</strong> {event.venue.venueName} <br />
              <strong>Date:</strong> {event.date} <br />
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default UpcomingEvents;