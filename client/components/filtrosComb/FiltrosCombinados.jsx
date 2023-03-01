import { useState } from 'react';
import s from "src/styles/filtrosCombinados.module.css"

const Filter = ({ data, onChange }) => {
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedSlug, setSelectedSlug] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setSelectedPrice(value);
    setSelectedSlug('');
    setSelectedOption(null);
    onChange({ price: value, slug: '' });
  };

  const handleSlugChange = (event) => {
    const value = event.target.value;
    setSelectedSlug(value);
    const option = slugOptions.find((o) => o.value === value);
    setSelectedOption(option);
    onChange({ price: selectedPrice, slug: value });
  };

  const priceRanges = [
    { label: '1-350', min: 1, max: 350 },
    { label: '401-1000', min: 401, max: 1000 },
    { label: '1001-2000', min: 1001, max: 2000 },
    { label: '2001-3000', min: 2001, max: 3000 },
    { label: '3001-4000', min: 3001, max: 4000 },
    { label: '<4000', min: 4001, max: Number.MAX_SAFE_INTEGER }
  ];

  const slugOptions = selectedPrice >= 1 && selectedPrice <= 8000
    ? data
      .filter((item) => {
        const price = parseInt(selectedPrice);
        return price >= item.price && price < item.price + 1000;
      })
      .map((item) => ({
        label: `${item.slug} - ${item.description}`,
        value: item.slug
      }))
    : [];


    const handleSelectChange = (event) => {
      const value = event.target.value;
      if (value === "domains") {
       location.href = "pages/dominio/dominio-com-co";
      } else if (value === "housings") {
        location.href = "pages/hosting/webHosting";
      } else if (value === "dedicated-servers") {
        location.href = "pages/cloudDedicados/cloudServers";
      }
    };

  return (
    <div>
    <div class="pt-40 flex ml-auto ">
      <div class="flex">
        <label htmlFor="price-select" class="text-5xl px-20 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Seleccione:</label>
        <select id="price-select" value={selectedPrice} onChange={handlePriceChange} class="inline-flex items-center text-4xl  text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
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
        <select id="slug-select" value={selectedSlug} onChange={handleSlugChange} disabled={!selectedPrice} class=" text-4xl inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          <option value="">Servicio de su preferencia</option>
          {slugOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>



      </div >
     
      {selectedOption && (
        <div class="pt-20 flex items-center justify-center h-screen">


<div className={s.container}>
          <div class="max-w- 7xl p-10 w-200 h-200 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg class="w-20 h-30 mb-10 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
    <a href="#">
    <svg aria-hidden="true" class="w-10 h-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
        <h5 class="mb-10 text-7xl font-semibold tracking-tight text-gray-900 dark:text-white">Servicios que ofrecemos en el rango de precios seleccionados</h5>
    </a>
    <div class="bg-gradient-to-r to-sky-50 from-sky-300 ">
    <p class="mb-3 font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r to-sky-300 from-sky-600 ">{selectedOption.label}</p>
    </div>
    
   <h1 class="text-2xl px-2 py-10 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Encuentre este Servicio en:</h1>


  <option value="domains" class="text-3xl">Dominio</option>
 <a id="Dominio" href='/dominio/dominio-com-co' class=" text-2xl inline-flex items-center text-blue-600 hover:underline">
  See our guideline
  <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
  </svg>
</a>

<option value="housings" class="text-3xl">Hostings</option>
<a id="housings" href='/hosting/w-hosting/webHosting' class=" text-2xl inline-flex items-center text-blue-600 hover:underline">
  See our guideline
  <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
  </svg>
</a>

<option value="dedicated-servers" class="text-3xl">Cloud y dedicados</option>
<a id="dedicated-servers" href='/cloudDedicados/cloudServers' class=" text-2xl inline-flex items-center text-blue-600 hover:underline">
  See our guideline
  <svg class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
  </svg>
</a>



</div>

</div>




        </div>
        
      )}
    
    </div>
  );
};

export default Filter;
