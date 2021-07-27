import React from "react";
import Ratting from "./Rating";

const PostMovie = ({ title, poster, descripton, rating }) => {
  const onClick = (event) =>
    alert(
      `Zagłosowałeś na: "${title}"\nOceniłeś na: ${Number(
        event.target.dataset.rating
      ) + 1}`
    );

  return (
    <div>
      <h2>{title}</h2>
      <img src={poster} alt={title} />
      <p>{descripton}</p>
      <Ratting rating={rating} onClick={onClick} />
    </div>
  );
};

export default PostMovie;
