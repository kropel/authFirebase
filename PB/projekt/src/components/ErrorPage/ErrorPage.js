import React from "react";
import Container from "components/Container/Container";
import TitleComponent from "components/TitleComponent/TitleComponent";
import PropTypes from "prop-types";

const ErrorPage = ({ title }) => (
  <Container>
    <TitleComponent title={title} />
  </Container>
);

ErrorPage.propTypes = {
  title: PropTypes.string.isRequired
};

export default ErrorPage;
