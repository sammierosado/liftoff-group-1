import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './stylesheets/ArtistDetails.css';
import Navbar from './Navbar';

const ArtistDetails = () => {
  const [artistDetails, setArtistDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/artists/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched artist details:', data);
        setArtistDetails(data);
      } catch (error) {
        console.error('Error fetching artist details:', error);
      }
    };

    fetchArtistDetails();
  }, [id]);

  return (
    <div className="artist-details-page-background">
      <Navbar />
      <div className="events-container artist-details-container">
        <h2>{artistDetails.artistName}</h2>
        <p><strong>Genre:</strong> {artistDetails.genre}</p>
      </div>
    </div>
  );
};

export default ArtistDetails;