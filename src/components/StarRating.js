"use client"

import React from 'react';

const StarRating = ({ stars }) => {
  const filledStars = Math.round(stars); // Round the number of stars to the nearest integer
  const emptyStars = 5 - filledStars; // Calculate the number of empty stars

  return (
    <div className="flex space-x-1">
      {[...Array(filledStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="#eb0c8e" // Fill color for filled stars
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l2.3 7.8h7.7l-6 4.8 2.3 7.8-6-4.8-6 4.8 2.3-7.8-6-4.8h7.7z" />
        </svg>
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="none" // No fill for empty stars
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
