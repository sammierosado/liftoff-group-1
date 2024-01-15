import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import SearchBar from '../components/SearchBar';
import './stylesheets/Venues.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Venues = () => {
  const [venues, setVenues] = useState([]);
  const [filteredVenues, setFilteredVenues] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/venues', {
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
      setVenues(data);
    } catch (error) {
      console.log('Error fetching venues:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const normalizedSearchTerm = searchTerm.replace('/', '-');

    const checkAccessibility = (value) => value === true;

    const filtered = venues.filter((venue) => {
      const {
        venueName,
        venueAddress,
        venueCity,
        venueState,
        venueZip
      } = venue;

      const searchTermLower = normalizedSearchTerm.toLowerCase();

      return (
        venueName?.toLowerCase().includes(searchTermLower) ||
        venueAddress?.toLowerCase().includes(searchTermLower) ||
        venueCity?.toLowerCase().includes(searchTermLower) ||
        venueState?.toLowerCase().includes(searchTermLower) ||
        venueZip?.toLowerCase().includes(searchTermLower)
      );
    });

    console.log('Filtered Venues:', filtered);
    setFilteredVenues(filtered);
  };



    return (
        <div>
          <Navbar />
          <div className="page-background">
            <div className="events-container">
              <SearchBar handleSearch={handleSearch} />

              {filteredVenues.length > 0 ? (
                filteredVenues.map((venue) => (
                  <div key={venue.id} className="venue-card">
                    <Link to={`/venues/${venue.id}`}>
                      <strong className="venue-name">{venue.venueName}
                        <FontAwesomeIcon icon={faArrowRight} className="clickable-icon" />
                        <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
                      </strong>
                    </Link>
                    <div><strong>Address:</strong> {venue.venueAddress}</div>
                    <div><strong>City:</strong> {venue.venueCity}</div>
                    <div><strong>State:</strong> {venue.venueState}</div>
                    <div><strong>Zip:</strong> {venue.venueZip}</div>
                    {/*<div><strong>Wheelchair Accessible:</strong> {venue.wheelchairAccessible ? 'Yes' : 'No'}</div>
                    <div><strong>ADA Bathrooms:</strong> {venue.ADABathrooms ? 'Yes' : 'No'}</div>
                    <div><strong>ADA Seating:</strong> {venue.ADASeating ? 'Yes' : 'No'}</div>
                    <div><strong>Bus Stop Close:</strong> {venue.busStopClose ? 'Yes' : 'No'}</div>
                    <div><strong>Sign Language:</strong> {venue.signLanguage ? 'Yes' : 'No'}</div>
                    <div><strong>Clear Pathways:</strong> {venue.clearPathways ? 'Yes' : 'No'}</div>
                    <div><strong>Descriptive Audio:</strong> {venue.descriptiveAudio ? 'Yes' : 'No'}</div>
                    <div><strong>Elevators:</strong> {venue.elevators ? 'Yes' : 'No'}</div>
                    <div><strong>Multi-Level:</strong> {venue.multiLevel ? 'Yes' : 'No'}</div>*/}

                  </div>
                ))
              ) : (
                venues.map((venue) => (
                  <div key={venue.id} className="venue-card">
                    <Link to={`/venues/${venue.id}`}>
                      <strong className="venue-name">{venue.venueName}
                        <FontAwesomeIcon icon={faArrowRight} className="clickable-icon" />
                        <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
                      </strong>
                    </Link>
                    <div><strong>Address:</strong> {venue.venueAddress}</div>
                    <div><strong>City:</strong> {venue.venueCity}</div>
                    <div><strong>State:</strong> {venue.venueState}</div>
                    <div><strong>Zip:</strong> {venue.venueZip}</div>
                    {/*<div><strong>Wheelchair Accessible:</strong> {venue.wheelchairAccessible ? 'Yes' : 'No'}</div>
                    <div><strong>ADA Bathrooms:</strong> {venue.ADABathrooms ? 'Yes' : 'No'}</div>
                    <div><strong>ADA Seating:</strong> {venue.ADASeating ? 'Yes' : 'No'}</div>
                    <div><strong>Bus Stop Close:</strong> {venue.busStopClose ? 'Yes' : 'No'}</div>
                    <div><strong>Sign Language:</strong> {venue.signLanguage ? 'Yes' : 'No'}</div>
                    <div><strong>Clear Pathways:</strong> {venue.clearPathways ? 'Yes' : 'No'}</div>
                    <div><strong>Descriptive Audio:</strong> {venue.descriptiveAudio ? 'Yes' : 'No'}</div>
                    <div><strong>Elevators:</strong> {venue.elevators ? 'Yes' : 'No'}</div>
                    <div><strong>Multi-Level:</strong> {venue.multiLevel ? 'Yes' : 'No'}</div>*/}

                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      );
    };

  export default Venues;