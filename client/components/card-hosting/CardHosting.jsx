import s from 'src/styles/servHost.module.css'
import React from "react";
import { motion } from "framer-motion"
import Link from 'next/link'

    

const config = {
      type: 'spring',
      damping: 10,
      stiffness: 80
    };
    export const CardHosting = ({ TLD, price, description, name, floorSpace, racks, consumption   }) => {
      return (

<div>

<div>
    
</div>


<div >

        <motion.div
          transition={config}
              initial={{ scale: 0.3, opacity: 0 }}
           animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
            exit={{ x: 0, opacity: 0 }}>

        <div className={s.container}>
        <div className= {s.flipCard} >
              <div className={s.flipCardInner}>
             <div className= {s.flipCardFront} >

             <h1 className="mb-4 text-9xl font-medium font-sans md:font-serif bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-700 to-blue-600  ">{TLD}</h1>
             <h1 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400">{name}</h1>
             <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> {floorSpace}</h2>
             <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> {racks}</h2>
             <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> {consumption}</h2>



          <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> Por solo</h2>
          <div className="flex items-baseline text-purple-500 dark:text-white">
          <span class="text-5xl font-semibold ">$</span>
          <span class="text-7xl font-extrabold tracking-tight ">{price}</span>
          <span class="ml-1 text-2xl font-normal text-purple-500 dark:text-gray-400">/month</span>

          </div>
          </div>

          <div className={s.flipCardBack}>
            <br/>
          <h1 className="mb-4 text-6xl font-extrabold text-purple-200  drop-shadow-lg">Eleji tu Plan {TLD}</h1>
          <br/>
          <br/>
          <p className=" mb-6 text-4xl font-bold text-purple-200 drop-shadow-lg shadow-ambar-300">{description}</p>
          
          <br/>
          
          <Link href='home'>
<button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-purple-200 hover:bg-purple-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
    </svg>
    continuar
</button>
</Link>

        </div>
        </div>
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