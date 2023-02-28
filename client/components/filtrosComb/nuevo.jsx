

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
    .filter((item) => item.price <= 50) // Filtrar productos con precio <= 50
    .map((item) => ({
      label: `${item.slug} - ${item.description} - ${item.price}`,
      value: item.options
    }));

  return (
    <select multiple value={selectedValues} onChange={handleChange}>
      {filterOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
