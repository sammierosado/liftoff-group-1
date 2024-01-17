import React, { useEffect, useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import axios from 'axios';

const StarRating = ({ index, venueId }) => {
 

{/*STORE TO LOCAL STORAGE */}

const [stars, setStars] = useState(() => {
    const storedStars = localStorage.getItem(`userRating_${index}`);
    return storedStars ? parseInt(storedStars) : null;
  });
  const [hover, setHover] = useState(null);

useEffect(() => {
    if (stars !== null) {
      localStorage.setItem(`userRating_${index}`, stars.toString());
    }
  }, [stars, index]);


{/* AXIOS POST TO SERVER*/}
  const postRatingToServer = (rating) => {
    const APIURL = 'http://localhost:8080/api/starratings/rateVenue';
    const ratingData = {
      "venueId":index, // Use the provided venueId prop
      "starRating": stars,
    };

    axios.post(APIURL, ratingData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error posting the rating data:', error);
      });
  };

  const handleRatingChange = (newRating) => {
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
};

export default StarRating;


