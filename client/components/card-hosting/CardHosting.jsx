import s from 'src/styles/servHost.module.css'
import React from "react";
import { motion } from "framer-motion"
import Link from 'next/link'

    

const config = {
      type: 'spring',
      damping: 10,
      stiffness: 80
    };
    export const CardHosting = ({ price, description, name, floorspace, racks, consumption , id , slug }) => {
      return (



        <div className={s.container}>

<div class={s.hero}> 

  <div class={s.cube}></div>
  <div class={s.cube}></div>
  <div class={s.cube}></div>
  <div class={s.cube}></div>
  <div class={s.cube}></div>
  <div class={s.cube}></div>





        <motion.div
          transition={config}
              initial={{ scale: 0.3, opacity: 0 }}
           animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
            exit={{ x: 0, opacity: 0 }}>

<div className={s.flipCardFront}>
<div class="  w-full max-w-sm p-6 bg-white border-8 border-gray-200 rounded-lg shadow sm:p-12 dark:bg-gray-800 dark:border-gray-700">

<h1 className="text-white ring-offset-2 ring-2 shadow-inner bg-gradient-to-r from-indigo-500 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 rounded-lg font-bold font-mono text-4xl px-4 py-2 inline-flex justify-center w-full text-center">{name}</h1>
             <h1 className="italic mb-2 px-3 py-4 text-2xl font-mono font-medium text-gray-500 dark:text-gray-400 ">Elige tu Plan</h1>
             <p className=" mb-6 text-4xl font-bold text-blue-400 drop-shadow-lg shadow-ambar-300 text-center">{description}</p>
              {/* <!-- List --> */}
              <ul role="list" class="space-y-5 my-7">
              <li class="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-2xl font-bold leading-tight text-gray-500 dark:text-gray-400">{floorspace} IN</span>
              </li>
              <li class="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-2xl font-bold leading-tight text-gray-500 dark:text-gray-400"> {racks} unidad de racks</span>
              </li>
              <li class="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-2xl font-bold leading-tight text-gray-500 dark:text-gray-400"> {consumption} kWh</span>
              </li>
  

</ul>

          <h2 className=" underline decoration-wavy italic mb-4 px-3 py-4 text-2xl font-mono font-medium text-gray-500 dark:text-gray-400"> Por solo</h2>
          <div className="flex items-baseline text-purple-500 dark:text-white drop-shadow-2xl">
          <span class="text-4xl font-semibold">$</span>
          <span class="text-7xl py-8 font-extrabold tracking-tight">{price}</span>
          <span class="ml-1 text-2xl font-normal text-gray-500 dark:text-gray-400">/month</span>
          </div>
                      <Link href={`/racks/${id}`} >
                        <button           class="cursor-pointer text-gray-100 text-2xl font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  rounded-lg  px-6 py-4 inline-flex justify-center w-full text-center">

                             View Product
                        </button>
           
                      </Link>  

        </div>

        </div>
     
          </motion.div>
          </div>
          </div>
         
      );
    };

export default CardHosting;




















































// import React from 'react'
// import Link from 'next/link'



// export const CardHosting = () => {
//   return (
//     <div>
//         <div className='bg-purple-300'  >
//             <br/> <br/> <br/>
//             <br/> <br/> <br/>

     
// <link rel="preconnect" href="https://fonts.gstatic.com"/> 
// <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
// <body class="font-sans bg-purple-300  ">
// <div class="min-h-screen flex justify-center items-center">
// <div class="">
// <div class="text-center font-semibold">
//     <h1 class="text-5xl">
//         <span class="text-violet-500 tracking-wide font-extrabold">El Web Hosting  que ti sitio merece </span>
//         <br/>
//         <br></br>
//         <span className='text-violet-500 font-extrabold'>desde$399/mes</span>
//         <br/><br/>
//         <span class="text-violet-500  tracking-wide font-extrabold">Pesos Argentinos ver planes</span>
//     </h1>
//     <br/><br/>
    
    
//     <p class="pt-6 text-3xl text-violet-500   font-extrabold  w-full px-18 md:w-full">
//     ¡Simple, rápido y confiable!
// En Pesos Argentinos <br/> sin impuesto país ni sorpresas
//     </p>
// </div>
// {/* <-----------containner de cards-----------------> */}
// <div class="pt-24 flex flex-row">

//     {/* <-----------card 1-----------------> */}
    
//     <div class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
//         <h1 class="text-green font-semibold text-violet-500  text-2xl">Basic</h1>
//         <p class="pt-2 tracking-wide">
//             <span class="text-gray-400 align-top">$ </span>
//             <span class="text-3xl text-violet-500 font-semibold">499</span>
//             <span class="text-gray-400 font-medium">/ user</span>
//         </p>
//         <hr class="mt-4 border-1"/>
//         <div class="pt-8">
//         <ul role="list" class="space-y-5 my-7">
// <li class="flex space-x-3">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Dominio(ahorra: $2.790)</span>
// </li>
// <li class="flex space-x-3">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">50GB Cloud storage</span>
// </li>
// <li class="flex space-x-3 line-through">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> Cuentas de correo</span>
// </li>
// <li class="flex space-x-3 line-through decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Certificado SSL</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Soporte Profesional 24/7</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Ancho de banda sin medicion </span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600  dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Copia de seguridad semanal</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600  dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">1 base de datos</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Optimizado para WordPress </span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600  dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Migrador a 1 click</span>
// </li>
// <li class="flex space-x-3 line-through decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Construccion de sitio web</span>
// </li>
// </ul>
// <Link  href='HostingDom'>
// <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Continuar <span class="pl-2 material-icons align-middle text-sm">east</span>
//                     </button>
// </Link>
//         </div>
//     </div>

//      {/* <-----------card 2-----------------> */}
//     <div class="w-80 p-8 bg-violet-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
//         <h1 class="text-white font-semibold text-2xl">Emprendedor</h1>
//         <p class="pt-2 tracking-wide">
//             <span class="text-gray-400 align-top">$ </span>
//             <span class="text-3xl font-semibold">599</span>
//             <span class="text-gray-400 font-medium">/ user</span>
//         </p>
//         <hr class="mt-4 border-1 border-gray-600"/>
//         <div class="pt-8">
//         <ul role="list" class="space-y-5 my-7">
// <li class="flex space-x-3">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Dominio(ahorra: $2.790)</span>
// </li>
// <li class="flex space-x-3">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">50GB Cloud storage</span>
// </li>
// <li class="flex space-x-3 ">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> Cuentas de correo</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Certificado SSL</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Soporte Profesional 24/7</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Ancho de banda sin medicion </span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600  dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Copia de seguridad semanal</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600  dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">1 base de datos</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Optimizado para WordPress </span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600  dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Migrador a 1 click</span>
// </li>
// <li class="flex space-x-3 line-through decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Construccion de sitio web</span>
// </li>
// </ul>

// <Link  href='HostingDom'>
// <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Continuar <span class="pl-2 material-icons align-middle text-sm">east</span>
//                     </button>
// </Link>
//         </div>
//         <div class="absolute top-4 right-4">
//             <p class="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
//         </div>
//     </div>
//      {/* <-----------card 3-----------------> */}
//     <div class="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
//         <h1 class=" font-semibold text-2xl text-violet-500 ">Enterprise</h1>
//         <p class="pt-2 tracking-wide">
//             <span class="text-gray-400 align-top">$ </span>
//             <span class="text-3xl font-semibold text-violet-500 ">999</span>
//             <span class="text-violet-500  font-medium">/ user</span>
//         </p>
//         <hr class="mt-4 border-1"/>
//         <div class="pt-8">
//         <ul role="list" class="space-y-5 my-7">
// <li class="flex space-x-3">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Dominio(ahorra: $2.790)</span>
// </li>
// <li class="flex space-x-3">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">50GB Cloud storage</span>
// </li>
// <li class="flex space-x-3 ">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> Cuentas de correo</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Certificado SSL</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Soporte Profesional 24/7</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Ancho de banda sin medicion </span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600  dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Copia de seguridad semanal</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600  dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">1 base de datos</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Optimizado para WordPress </span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600  dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Migrador a 1 click</span>
// </li>
// <li class="flex space-x-3  decoration-gray-500">
//     {/* <!-- Icon --> */}
//     <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5  text-blue-600 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
//     <span class="text-base font-normal leading-tight text-gray-500">Construccion de sitio web</span>
// </li>
// </ul>
// <Link  href='HostingDom'>
// <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Continuar <span class="pl-2 material-icons align-middle text-sm">
//                         east </span>
//                     </button>
// </Link>
          
//         </div>
//     </div>
// </div>
// </div>
// </div>
// </body>
// </div>

//     </div>


  
//   )
// }
// export default CardHosting