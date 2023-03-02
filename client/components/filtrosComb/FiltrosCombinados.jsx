import { useState } from 'react';
import s from "src/styles/filtrosCombinados.module.css"

const Filter = ({ onChange }) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setSelectedPrice(value);
    onChange({ value, name: "price-select" });
  };
  
  const handleServiceChange = (event) => {
    const value = event.target.value;
    setSelectedService(value);
    onChange({ value, name: "service-select" });
  };
  
  const priceRanges = [
    { label: '500' },
    { label: '800' },
    { label: '1500' },
    { label: '2790' },
    { label: '5500' },
    { label: '9000' }
  ];

  const serviceCategories = [
    { value: 'Domain'},
    { value: 'Housing'},
    { value: 'Dedicated Server'}
  ];

    
  return (
    <div>
    <div class="pt-40 flex ml-auto ">
      <div class="flex">
        <label htmlFor="price-select" class="text-5xl px-20 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Seleccione:</label>
        <select id="price" onChange={handlePriceChange} class="inline-flex items-center text-4xl  text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <option value="">Rango de precios</option>
             {priceRanges.map((range) => (
           <option key={range.label} value={range.min}>
            {range.label}
              </option>
  ))}
</select>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
  <label  class=" py-4 text-4xl px-10 ml-10 text-white bg-blue-400 rounded dark:bg-blue-500">Y luego</label>

      </div>
      <div class="flex">
        <label htmlFor="slug-select" class=" py-4 text-5xl px-20 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Indique:</label>
        <select id="service" onChange={handleServiceChange} class=" text-4xl inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <option value="">Servicio de su preferencia</option>
          {serviceCategories.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
      </div >
         
    </div>
  );
};

export default Filter;







