import React from "react";

const Rating = ({ rating, max = 10, onClick }) => (
  <div className="StarsContainer">
    {Array(max)
      .fill(1)
      .map((elem, index) => (
        <div className="Star" data-rating={index} onClick={onClick} key={index}>
          {index > rating ? "\u2606" : "\u2605"}
        </div>
      ))}
  </div>
);

export default Rating;
