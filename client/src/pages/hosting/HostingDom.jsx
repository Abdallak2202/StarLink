import React from 'react'
import Link from 'next/link'
import HomeDominio from "../../styles/HomeDominio.module.css";

 const HostingDominio = () => {
  return (
    <div className='so'>
      <br/><br/><br/><br/><br/>
      <form onSubmit='submit'>

      <div class="flex">
    <div class="flex items-center h-5">
        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    </div>
    <div class="ml-2 text-xl">
        <label for="helper-radio" class="font-medium text-gray-900 dark:text-gray-300">Registrar un nuevo dominio</label>
        <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Registra ahora mismo un dominio para tu hosting a precio promocional.</p>
        
    </div>
</div>
<br/>
<div class="flex">
    <div class="flex items-center h-5">
        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    </div>
    <div class="ml-2 text-xl">
        <label for="helper-radio" class="font-medium text-gray-900 dark:text-gray-300">Ya tengo un dominio, quiero transferirlo a StarLink </label>
        <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">¿Tienes un dominio en otra empresa? Tráelo a DonWeb y obtén 1 año de renovación gratis.</p>
    </div>
    <div>
<form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
    </div>
    
    <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span class="sr-only">Search</span>
    </button>
</form>
</div>
    
</div>
<br/>
<div class="flex">
    <div class="flex items-center h-5">
        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    </div>
    
    <div class="ml-2 text-xl">
        <label for="helper-radio" class="font-medium text-gray-900 dark:text-gray-300">Ya tengo un dominio registrado, solo quiero el hosting </label>
        <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Indícanos tu dominio y lo apuntaremos a tu nuevo hosting.</p>
    </div>
    
</div>
<br/>
<div class="flex">
    <div class="flex items-center h-5">
        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    </div>
    <div class="ml-2 text-xl">
        <label for="helper-radio" class="font-medium text-gray-900 dark:text-gray-300">Lo decidiré más tarde</label>
        <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300"></p>
    </div>
    
</div>

<br/>

<div>
    
</div>

</form>
<br/> <br/>

<Link  href=''>
              <button type='submit'class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Continuar</button>
              </Link>


</div>




)}
export default HostingDominio;
