import React from "react";
import ProductList from "components/ProductList/ProductList";
import Container from "components/Container/Container";
import TitleComponent from "components/TitleComponent/TitleComponent";
import PropTypes from "prop-types";

const HomePage = ({ title }) => {
  return (
    <Container>
      <TitleComponent title={title} />

      <h2 className="header-small">Desktops</h2>
      <ProductList value="desktop" featured />

      <h2 className="header-small">Tablets</h2>
      <ProductList value="tablet" featured />
    </Container>
  );
};

HomePage.propTypes = {
  title: PropTypes.string.isRequired
};

export default HomePage;
