import { useState } from 'react';

const Filter = ({ data, onChange }) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedSlug, setSelectedSlug] = useState('');

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setSelectedPrice(value);
    setSelectedSlug('');
    onChange({ price: value, slug: '' });
  };

  const handleSlugChange = (event) => {
    const value = event.target.value;
    setSelectedSlug(value);
    onChange({ price: selectedPrice, slug: value });
  };

  const priceRanges = [
    { label: '0-1000', min: 0, max: 1000 },
    { label: '1001-2000', min: 1001, max: 2000 },
    { label: '2001-3000', min: 2001, max: 3000 },
    { label: '3001-4000', min: 3001, max: 4000 },
    { label: '<4000', min: 4001, max: Number.MAX_SAFE_INTEGER }
  ];

  const slugOptions = data
    .filter((item) => {
      const price = parseInt(selectedPrice);
      return price >= item.price && price < item.price + 1000;
    })
    .map((item) => ({
      label: `${item.slug} - ${item.description}`,
      value: item.slug
    }));

  return (
    <div class="pt-40">
      <div>
        <label htmlFor="price-select">Price range:</label>
        <select id="price-select" value={selectedPrice} onChange={handlePriceChange}>
          <option value="">Select a price range</option>
          {priceRanges.map((range) => (
            <option key={range.label} value={range.min}>
              {range.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="slug-select">Slug:</label>
        <select id="slug-select" value={selectedSlug} onChange={handleSlugChange} disabled={!selectedPrice}>
          <option value="">Select a slug</option>
          {slugOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
