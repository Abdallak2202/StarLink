import { useState, useEffect } from 'react';
import Filter from 'components/filtrosComb/FiltrosCombinados';

const FilterableList = () => {
  const [data, setData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const [endpoint1, endpoint2, endpoint3] = await Promise.all([
        fetch("https://star-link-back-end-production.up.railway.app/domains").then((res) => res.json()),
        fetch(" https://star-link-back-end-production.up.railway.app/housings").then((res) => res.json()),
        fetch(" https://star-link-back-end-production.up.railway.app/dedicated-servers").then((res) => res.json()),
      ]);
      // Combine the data from the three endpoints into a single array
      const combinedData = [...endpoint1, ...endpoint2, ...endpoint3];
      setData(combinedData);
    };
    fetchData();
  }, []);

  const handleFilterChange = (filterSlug, values) => {
    setSelectedOptions({
      ...selectedOptions,
      [filterSlug]: values,
    });
  };

  const filteredData = data.filter((item) =>
  Object.entries(selectedOptions).every(([filterSlug, values]) =>
    values.length === 0 || (item.options && item.options.some((option) => values.includes(option)))
  )
);


  
  return (
    <div>
      <Filter data={data} onChange={(values) => handleFilterChange('options', values)} />
      {filteredData.map((item) => (
        <div key={item.slug}>
          {/* <h1>{item.name}</h1>
          <h2>{item.price}</h2> */}




 
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Precio
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Descripcion
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512" ><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <div class="flex items-center">
                        Category
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.slug}
                </th>
                <td class="px-6 py-4">
                ${item.price}
                </td>
                <td class="px-6 py-4 text-md-center">
                  {item.description}
                </td>
            </tr>
        </tbody>
    </table>
</div>



          
        </div>
      ))}
    </div>
  );
};

export default FilterableList;
