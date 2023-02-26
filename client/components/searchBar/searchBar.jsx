import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import axios from 'axios';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
     //axios.get(` https://star-link-back-end-production.up.railway.app/registered-domains/search?q=${searchTerm}`)
     axios.get(` https://star-link-back-end-production.up.railway.app/registered-domains/?name=${searchTerm}`)
      .then(response => setSearchResults(response.data))
      .catch(error => console.error(error));
  }, [searchTerm]);


//   const obtenerDominios= async () => {
//     const data = await fetch(` https://star-link-back-end-production.up.railway.app/registered-domains/search?q=${searchTerm}`)
//     const control = await data.json()
//     setCloud(control)
// }



  return (
    <form>
      <div className="flex flex-col pt-40 pb-6  m-h-screen bg-slate-100">

    <div className="bg-white items-center justify-between w-full flex rounded-full shadow-lg p-2 mb-1 sticky">

    <div>
    <Link href='/dominio/dominio-com-co'> 
                    <button  type="submit" className=" pb-1">
    <div className="p-2 mr-1 rounded-full hover:bg-rose-200 cursor-pointer">

    <svg className="h-6 w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>

                    </div>
                    </button>
                     </Link>
                    </div>

                    <input class="font-bold uppercase rounded-full w-full py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs" type="text" placeholder="search Domain" 
                    value={searchTerm}
                    onChange={handleInputChange}/>

                    <Link href='/dominio/registro-de-dominios'> 
                    <button  type="submit" className=" pb-1">

                    <div class="bg-gray-600 p-2 hover:bg-rose-200 cursor-pointer mx-2 rounded-full">

                    <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                    </div>
                    </button>
                     </Link>

                    </div>

                    </div>
    <div>
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
      
      </div> 
      
    </form>

  );
};

export default SearchBar;

// import dataSearchBar from 'components/searchBar/dataSearchBar'
// import Link from 'next/link';
// import { useState, useEffect } from 'react';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };


//   useEffect(() => {
//     setSearchResults(dataSearchBar.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())));
//   }, [searchTerm]);




//   return (
//     <div className="flex items-center justify-center mt-20">
//        <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleInputChange}
//         className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-64 appearance-none leading-normal"
//       />
//       <Link href='/dominio/registro-de-dominios'>
//       <button  type="submit"
//       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search

//        </button>
//        </Link>
//        </form>

//     </div>
//   );
// };

// export default SearchBar;
