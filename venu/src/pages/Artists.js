import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBarArtist';
import ArtistDetails from '../components/ArtistDetails';
import './stylesheets/Artists.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [filteredArtists, setFilteredArtists] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/artists', {
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
      setArtists(data);
    } catch (error) {
      console.log('Error fetching artists:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (searchTerm) => {
    const normalizedSearchTerm = searchTerm.replace('/', '-');

    const filtered = artists.filter((artist) => {
      const { artistName, genre } = artist;
      const searchTermLower = normalizedSearchTerm.toLowerCase();

      return (
        artistName.toLowerCase().includes(searchTermLower) ||
        genre.toLowerCase().includes(searchTermLower)
      );
    });

    console.log('Filtered Artists:', filtered);
    setFilteredArtists(filtered);
  };

  return (
    <div>
      <Navbar />
      <div className="page-background">
        <div className="events-container">
          <SearchBar handleSearch={handleSearch} />

          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist) => (
              <div key={artist.id} className="artist-card">
                <Link to={`/artists/${artist.id}`}>
                  <strong className="artist-name">
                    {artist.artistName}
                    <FontAwesomeIcon icon={faArrowRight} className="clickable-icon" />
                    <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
                  </strong>
                </Link>
                <div>
                  <strong>Genre:</strong> {artist.genre}
                </div>
              </div>
            ))
          ) : (
            artists.map((artist) => (
              <div key={artist.id} className="artist-card">
                <Link to={`/artists/${artist.id}`}>
                  <strong className="artist-name">
                    {artist.artistName}
                    <FontAwesomeIcon icon={faArrowRight} className="clickable-icon" />
                    <FontAwesomeIcon icon={faInfoCircle} className="info-icon" />
                  </strong>
                </Link>
                <div>
                  <strong>Genre:</strong> {artist.genre}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Artists;