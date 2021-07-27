import React, { useEffect } from "react";
import PropTypes from "prop-types";

const TitleComponent = ({ title }) => {
  const pageTitle = title;
  useEffect(() => {
    const baseTitle = document.title;
    document.title = baseTitle + ` - ${pageTitle}`;
    return () => (document.title = baseTitle);
  }, [pageTitle]);
  return <h1 className="header-big">{pageTitle}</h1>;
};

TitleComponent.propTypes = {
  title: PropTypes.string.isRequired
};

export default TitleComponent;
