import React, { useContext } from "react";
import { LangugaeContext } from "../App";

const LangButton = ({ lang, onClick }) => (
  <button
    onClick={() => onClick(lang)}
    disabled={useContext(LangugaeContext) === lang ? true : false}
  >
    {lang.toUpperCase()}
  </button>
);

export default LangButton;
