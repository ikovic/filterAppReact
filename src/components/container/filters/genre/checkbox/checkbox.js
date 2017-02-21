import React, {PropTypes} from 'react';

const Checkbox = ({name, label, value, handleChange}) => {

  return (
    <label>
      <input type="checkbox" name={name} checked={!!value} onChange={(e) => {
        handleChange(name, e.target.checked)}}/>
      {label}
    </label>
  );

};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Checkbox;
