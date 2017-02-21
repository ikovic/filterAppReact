import React, {PropTypes} from 'react';

const RadioButton = ({name, label, value, handleChange}) => {
  return (
    <label>
      <input name={name} type="radio" checked={!!value} value={label} onChange={(e) => handleChange(e.target.value)}/>
      {label}
    </label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default RadioButton;