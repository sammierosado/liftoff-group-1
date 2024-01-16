import React, { useEffect, useState } from 'react';
import { FaMicrophone } from 'react-icons/fa';

const StarRating = ({ index }) => {
  const [rating, setRating] = useState(() => {
    const storedRating = localStorage.getItem(`userRating_${index}`);
    return storedRating ? parseInt(storedRating, 10) : null;
  });
  const [hover, setHover] = useState(null);

  useEffect(() => {
    if (rating !== null) {
      localStorage.setItem(`userRating_${index}`, rating.toString());
    }
  }, [rating, index]);

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
              onClick={() => setRating(ratingValue)}
            />
            <FaMicrophone
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      {rating !== null ? (
        <div>
          <p>You rated this event {rating} out of 5 stars.</p>
        </div>
      ) : null}
    </div>
  );
};

export default StarRating;

