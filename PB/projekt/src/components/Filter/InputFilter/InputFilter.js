import React from "react";
import PropTypes from "prop-types";

const InputFilter = ({ type, name, id, value, checked, onChange, label }) => (
  <div>
    <label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label}
    </label>
  </div>
);

InputFilter.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default InputFilter;
