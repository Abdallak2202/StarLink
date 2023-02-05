import s from "src/styles/searchBar.module.css";
import Image from "next/image";
import React, { useState } from 'react'


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')



  return (
    <form onSubmit={handleSubmit}>
    <div className= {s.containerSearch}>

        src={'/lupa.png'}
        width={40}
        height={40}
        />

  )
}
export default SearchBar;
