import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import HomePage from "components/HomePage/HomePage";
import CatalogPage from "components/CatalogPage/CatalogPage";
import AboutPage from "components/AboutPage/AboutPabe";
import ErrorPage from "components/ErrorPage/ErrorPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage title={"Welcome to our store"} />
        </Route>
        <Route path="/catalog">
          <CatalogPage title={"Catalog"} />
        </Route>
        <Route path="/about">
          <AboutPage title={"About"} />
        </Route>
        <Route>
          <ErrorPage title="Page not found" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
