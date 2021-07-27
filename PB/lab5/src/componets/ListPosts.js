import React from "react";
import PostMovie from "./PostMovie";

const ListPosts = ({ movies }) =>
  movies.map(({ id, title, poster, description, rating }) => (
    <PostMovie
      key={id}
      title={title}
      poster={poster}
      descripton={description}
      rating={rating}
    />
  ));

export default ListPosts;
