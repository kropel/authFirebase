import React, { useState } from "react";
import Ratting from "./Rating";

const PostMovie = ({ title, poster, descripton, rating }) => {
  const [vote, setVoute] = useState(rating);
  const onClick = (index) => {
    alert(`Zagłosowałeś na: "${title}"\nOceniłeś na: ${index + 1}`);
    setVoute(index);
  };

  return (
    <div>
      <h2>{title}</h2>
      <img src={poster} alt={title} />
      <p>{descripton}</p>
      <Ratting rating={rating} />
      <p>Your vote:</p>
      <Ratting rating={vote} onClick={onClick} />
    </div>
  );
};

export default PostMovie;
