import React, { useContext } from "react";
import PostMovie from "./PostMovie";
import { LangugaeContext } from "../App";

const ListPosts = ({ movies }) => {
  const lang = useContext(LangugaeContext);
  return movies.map(({ id, title, poster, description, rating }) => (
    <PostMovie
      key={id}
      title={title[lang]}
      poster={poster}
      descripton={description[lang]}
      rating={rating}
    />
  ));
};

export default ListPosts;
