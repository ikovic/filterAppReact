import React, {PropTypes} from 'react';

const Select = ({id, options, selected, handleChange}) => {

  const htmlOptions = options.map(option => <option key={`${id}Option${option.value}`}
                                                    value={option.value}>{option.label}</option>);

  return (
    <select id={id} onChange={handleChange} value={selected}>
      {htmlOptions}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Select;