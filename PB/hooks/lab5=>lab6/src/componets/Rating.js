import React from "react";

const Rating = ({ rating, max = 10, onClick }) => (
  <div className="StarsContainer">
    {[...Array(max)].map((elem, index) => (
      <div
        className="Star"
        data-rating={index}
        onClick={onClick ? () => onClick(index) : () => {}}
        key={index}
      >
        {index > rating ? "\u2606" : "\u2605"}
      </div>
    ))}
  </div>
);

export default Rating;
