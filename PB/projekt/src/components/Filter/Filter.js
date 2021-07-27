import React, { useState } from "react";
import FiltersList from "components/Filter/FiltersList/FiltersList";
import ProductService from "services/products.service";
import PropTypes from "prop-types";

const Filter = ({ filterCollback }) => {
  const allManufacturers = ProductService.getAllManufacturers();
  allManufacturers.unshift("All");
  const baseManufacturers = ["All", "Apple", "Dell"];
  const [manufacturers, setManufacturers] = useState(baseManufacturers);
  const [radioChecked, radioChange] = useState("all");
  const [serachValue, searchChang] = useState("search...");

  const handleChange = (event) => {
    radioChange(event.target.value);
    filterCollback(event.target.value);
  };

  const handleSearch = (event) => {
    searchChang(event.target.value);
    if (!!event.target.value) {
      filterCollback(event.target.value);
    } else {
      filterCollback("all");
    }
  };

  const handleClear = () => {
    searchChang("search...");
    radioChange("all");
    filterCollback("all");
  };

  const handleFocus = (event) => {
    if (event.target.value === "search...") {
      searchChang("");
    }
  };

  const handleMore = () => {
    if (manufacturers.length === 3) {
      setManufacturers(allManufacturers);
    } else {
      setManufacturers(baseManufacturers);
    }
  };

  return (
    <div className="filter">
      <div className="filter-header">
        <h4>Search</h4>
        <span className="clear" onClick={handleClear}>
          Clear
        </span>
      </div>
      <div>
        <input
          type="text"
          value={serachValue}
          onChange={handleSearch}
          onFocus={handleFocus}
        />
      </div>
      <h4>Manufacturer</h4>
      <div className="filter-list">
        <FiltersList
          manufacturers={manufacturers}
          radioChecked={radioChecked}
          onChange={handleChange}
        />
        <span className="more" onClick={handleMore}>
          {manufacturers.length === 3 ? "More" : "Less"}
        </span>
      </div>
    </div>
  );
};

Filter.propTypes = {
  filterCollback: PropTypes.func.isRequired
};

export default Filter;
