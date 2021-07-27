import React from "react";
import InputFilter from "components/Filter/InputFilter/InputFilter";
import PropTypes from "prop-types";

const FiltersList = ({ manufacturers, radioChecked, onChange }) => {
  const filtersManufacturers = manufacturers.map((manu, key) => {
    let lowerCase = manu.toLowerCase();
    let checked = lowerCase === radioChecked;
    return (
      <InputFilter
        key={key}
        type="radio"
        name="manufacturere"
        id={lowerCase}
        value={lowerCase}
        checked={checked}
        onChange={onChange}
        label={manu}
      />
    );
  });
  return filtersManufacturers;
};

FiltersList.propTypes = {
  manufacturers: PropTypes.arrayOf(PropTypes.string).isRequired,
  radioChecked: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FiltersList;
