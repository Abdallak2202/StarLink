import React, { useState, useEffect } from 'react';
import s from "src/styles/searchBar.module.css";
import Image from "next/image";
import Link from 'next/link';
import axios from 'axios';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios.get(` https://star-link-back-end-production.up.railway.app/registered-domains/search?q=${searchTerm}`)
      .then(response => setSearchResults(response.data))
      .catch(error => console.error(error));
  }, [searchTerm]);
  



  return (
    <form>
    <div className= {s.containerSearch}>
    <div className={s.inputSearch}>
    <div className={s.inputResults}></div>
      <input
        value={searchTerm}
        onChange={handleInputChange}
        placeholder=" search Domain"
        className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-64 appearance-none leading-normal"
      />
    

       <Link href='/dominio/registro-de-dominios'> 
       <button  type="submit"
     className={s.icon}>

     <Image 
        src={'/lupa.png'}
        width={40}
        height={40}
        />
       </button>
       </Link>

      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
     
       </div>  
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