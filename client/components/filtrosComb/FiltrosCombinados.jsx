/* import { useState } from 'react';

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

  const filterOptions = data
    .filter((item) => item.price <= 1500) 
    .map((item) => ({
      label: `${item.slug} - ${item.description} - ${item.price}`,
      value: item.options
    }));
 */
  /* return (
    <div class="pt-40">
      <select multiple value={selectedValues} onChange={handleChange}>
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  ); */

 /*  return (
    <div class="pt-40">
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
 */

import { useState } from 'react';

const Filter = ({ data, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  const priceOptions = data
    .filter((item) => item.price <= 1500)
    .map((item) => ({
      label: `${item.slug} - ${item.description}`,
      value: item.slug
    }));

  return (
    <div class="pt-40">
      <select value={selectedValue} onChange={handleChange}>
        <option value="">Select a price range</option>
        {priceOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;


