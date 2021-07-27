import React, { useState } from "react";
import "./App.css";
import movies from "./movies2.json";
import ListPosts from "./componets/ListPosts";
import LangButton from "./componets/LangButton";

// let greater6 = movies.filter((movie) => movie.rating > 6);
// let lesEquil6 = movies.filter((movie) => movie.rating <= 6);

let byGenre = movies.reduce((acumulator, current) => {
  acumulator[current.genre] = acumulator[current.genre] || [];
  acumulator[current.genre].push(current);
  return acumulator;
}, {});
const LangugaeContext = React.createContext(null);

function App() {
  const [lang, setLanguage] = useState("pl");
  return (
    <div>
      <LangugaeContext.Provider value={lang}>
        <div>
          <LangButton onClick={setLanguage} lang={"pl"} />
          <LangButton onClick={setLanguage} lang={"en"} />
        </div>
        {Object.keys(byGenre).map((genre, index) => (
          <div key={genre + index}>
            <h1>{genre}</h1>
            <ListPosts movies={byGenre[genre]} />
          </div>
        ))}
      </LangugaeContext.Provider>
    </div>
  );
}
export { App as default, LangugaeContext };
