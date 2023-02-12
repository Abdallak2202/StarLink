import React from 'react'
import Link from 'next/link'
import HomeDominio from "../../styles/HomeDominio.module.css";

 const HostingDominio = () => {
  return (

    <div  className=' bg-purple-300'>
        <br/>
        <br/>

        <br/>

        <br/>

        <br/>

        <br/>



      <a href="#" class="  ml-80 mr-80 block     p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      




        {/* <---------form--------------------------> */}
    <div  className='bg-violet-500'>
      <br/><br/><br/><br/><br/>
      <form onSubmit='submit'>

      <div class="flex  ">
    <div class="flex items-center h-5  ">
        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 h-4 text-purple-300 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    </div>
    <div class="ml-2 text-3xl">
        <label for="helper-radio" class="font-medium text-purple-300 dark:text-gray-300">Registrar un nuevo dominio</label>
        <p id="helper-radio-text" class="text-xl font-normal text-purple-300 dark:text-gray-300">Registra ahora mismo un dominio para tu hosting a precio promocional.</p>
        
    </div>
</div>
<br/>
<div class="flex">
    <div class="flex items-center h-5">
        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 h-4 text-purple-300 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    </div>
    <div class="ml-2 text-3xl">
        <label for="helper-radio" class="font-medium text-purple-300 dark:text-purple-300">Ya tengo un dominio, quiero transferirlo a StarLink </label>
        <p id="helper-radio-text" class="text-xl font-normal text-purple-300 dark:text-gray-300">¿Tienes un dominio en otra empresa? Tráelo a DonWeb y obtén 1 año de renovación gratis.</p>
    </div>
    
</div>
<br/>
<div class="flex">
    <div class="flex items-center h-5">
        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 h-4 text-purple-300 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    </div>
    
    <div class="ml-2 text-3xl">
        <label for="helper-radio" class="font-medium text-purple-300 dark:text-gray-300">Ya tengo un dominio registrado, solo quiero el hosting </label>
        <p id="helper-radio-text" class="text-xl font-normal text-purple-300 dark:text-gray-300">Indícanos tu dominio y lo apuntaremos a tu nuevo hosting.</p>
    </div>
    
</div>
<br/>
<div class="flex">
    <div class="flex items-center h-5">
        <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" class="w-4 h-4 text-purple-300 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    </div>
    <div class="ml-2 text-3xl">
        <label for="helper-radio" class="font-medium text-purple-300 dark:text-gray-300">Lo decidiré más tarde</label>
        <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-300"></p>
    </div>
    
</div>

<br/>

<div>
    
</div>

</form>
<br/> <br/>

<div  className=' flex justify-center'>
<Link  href=' https://upload.wikimedia.org/wikipedia/commons/1/1e/SITIO-EN-CONSTRUCCION.jpg'>
              <button type='submit'class="bg-transparent hover:bg-purple-500 text-purple-300 font-semibold hover:text-white py-2 px-4 border border-blue-300   hover:border-transparent rounded">Continuar</button>
              </Link>
</div>

<br/>






</div>
</a>

</div>


)}
export default HostingDominio;
