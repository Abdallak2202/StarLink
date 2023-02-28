import { useState } from 'react';

const Filter = ({ data, onChange }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (value) => {
    let newSelectedValues;
    if (selectedValues.includes(value)) {
      newSelectedValues = selectedValues.filter((v) => v !== value);
    } else {
      newSelectedValues = [...selectedValues, value];
    }
    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues);
  };

  const filterOptions = data.map((item) => ({
    label: `${item.name} - ${item.price}`,
    value: item.options
  }));

  return (
    <div>
      {filterOptions.map((option) => (
        <label key={option.value}>
          <input
            type="checkbox"
            checked={selectedValues.includes(option.value)}
            onChange={() => handleChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Filter;





