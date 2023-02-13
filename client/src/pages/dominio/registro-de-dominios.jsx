import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from 'components/searchBar/searchBar';


const RegistroDeDominios = () => {
  const [data, setData] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://star-link-back-end-production.up.railway.app/registered-domains',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  

  if (!data) {
    return <div>Loading...</div>;
  }

  const filteredData = data.filter(item => {
    if (typeof item.url === "string" && typeof term === "string") {
      return item.url.toLowerCase().includes(term.toLowerCase());
    }
    return false;
  });

  
  
  console.log(filteredData);

  return (
    <div>
      <SearchBar />
      <div className='hover:table-fixed"'>
      <input 
      type="text" 
     
      value={term} onChange={handleChange} />
       <svg aria-hidden="true" class="w-20 h-20 mr-2 fill-current" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
      <ul  >
        {filteredData.map(item => (
          <li className="relative inline-flex items-center w-full px-5 py-3 text-3xl font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-blue-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                    key={item.id}>{item.url}
                   <button type="button" className=" relative md:absolute bottom-1 right-10 p-0.5 mb-2 mr-2 overflow-hidden text-2xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                   <span class=" relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  No disponible
  </span>
</button>
          </li>
          
          
        ))}
      </ul>
    </div>
    </div>
  );
};

export default RegistroDeDominios;

