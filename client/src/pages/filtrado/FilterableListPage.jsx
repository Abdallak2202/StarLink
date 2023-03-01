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
  
  <div class=" pt-40 relative overflow-x-auto shadow-md sm:rounded-lg">
  <div class="flex items-center justify-between pb-4">

  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 text-center">
                    Servicio
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    Precio
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    Descripción
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                    Categoria
                </th>
            </tr>
        </thead>
        <tbody>
        <tr class=" text-lg text-center leading-relaxed bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 text-center sfont-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.slug}
                </th>
                <td class="px-8 py-20 text-center">
                ${item.price}
                </td>
                <td class="px-8 py-20 text-center">
                {item.description}
                </td>
                <td class="px-8 py-20 text-center ">
                {item.service}
                </td>

            </tr>
        </tbody>
    </table>
</div>




 



</div>

          
        </div>
      ))}
    </div>
  
  );
};

export default FilterableList;








