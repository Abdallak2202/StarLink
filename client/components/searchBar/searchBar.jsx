import s from "src/styles/searchBar.module.css";
import Image from "next/image";
import React, { useState } from 'react'
import data from "helpers/dataSearchBar";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();
    
  
    const results = await data.filter(item => item.includes(searchTerm));
  
    console.log(`Search results for "${searchTerm}":`);
    console.log(results);
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
    <div className= {s.containerSearch}>
    <div className={s.inputSearch}>
    <div className={s.inputResults}>
 
    <input className={s.placeholder} 
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      placeholder="Ingrese su busqueda" type={'text'} />
        {/* <div className={s.results}>
        0 results found
       </div>  */}
    
        </div>
    <button type="submit" className={s.icon}>
      
    <Image 
        src={'/lupa.png'}
        width={40}
        height={40}
        />
              </button>
     
            </div>
         
          </div>
          </form>
  )
}
export default SearchBar;
