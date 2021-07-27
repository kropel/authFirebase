import React from "react";
import PropTypes from "prop-types";

const Product = ({
  id,
  name,
  image,
  manufacture,
  amount,
  category,
  featured
}) => (
  <div className="product">
    <img src={image} alt={name} />
    <p className="price">${amount}</p>
    <h3>{name}</h3>
  </div>
);

Product.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  manufacture: PropTypes.string,
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  category: PropTypes.string,
  featured: PropTypes.bool
};

export default Product;
