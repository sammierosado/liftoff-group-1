import React, { useEffect, useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import axios from 'axios';

const StarRating = ({ index, venueId }) => {
 

{/*STORE TO LOCAL STORAGE */}

const [stars, setStars] = useState(null);
  const [hover, setHover] = useState(null);






  const handleRatingChange = (newRating) => {
    {/* AXIOS POST TO SERVER*/}
  const postRatingToServer = (rating) => {
    const APIURL = 'http://localhost:8080/api/starratings/rateVenue';
    const ratingData = {
      "venueId":index, // Use the provided venueId prop
      "starRating": newRating,
    };

    axios.post(APIURL, ratingData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error posting the rating data:', error);
      });
  };
    setStars(newRating);

    // Call the function to post the rating when the user selects a rating
    postRatingToServer(newRating);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
  
        return (
          <label key={i}>
            <input
              type="radio"
              name={`rating_${index}`}
              value={ratingValue}
              onClick={() => handleRatingChange(ratingValue)}
            />
            <FaMicrophone
              className="star"
              color={ratingValue <= (hover || stars) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      {stars !== null ? (
        <div>
          <p>You rated this venue {stars} out of 5 stars.</p>
        </div>
      ) : null}
    </div>
  );
      }
export default StarRating;


