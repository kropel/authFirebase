import React from "react";
import "./App.css";
import movies from "./movies.json";
import ListPosts from "./componets/ListPosts";

let greater6 = movies.filter((movie) => movie.rating > 6);
let lesEquil6 = movies.filter((movie) => movie.rating <= 6);

let byGenre = movies.reduce((acumulator, current) => {
  acumulator[current.genre] = acumulator[current.genre] || [];
  acumulator[current.genre].push(current);
  return acumulator;
}, {});



function App() {
  return (
    <div>
      {Object.keys(byGenre).map((genre, index) => (
        <div key={genre + index}>
          <h1>{genre}</h1>
          <ListPosts movies={byGenre[genre]} />
        </div>
      ))}
    </div>
  );
}

export default App;
