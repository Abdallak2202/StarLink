import React, { useEffect, useState} from 'react'
import data from 'public/utils/data'
import Link from 'next/link'
import cloudServers from '@/pages/cloudDedicados/cloudServers'

export default function Contenido() {
const [cloud, setCloud] = useState([])

useEffect(() => {
   // console.log('useEffect')
    obtenerDatos() 
}, [])
const obtenerDatos= async () => {
    const data = await fetch('https://star-link-back-end-production.up.railway.app/cloud-servers')
    const services = await data.json()
    console.log(services)
    setCloud(services)
}

    return (
              < >
      <div className="xl:mx-auto xl:container py-20 2xl:px-0 px-6 ">
          <div className="lg:flex items-center justify-between">
              <div className=" lg:w-1/2 w-full">
                  <p className="text-base leading-4 text-gray-600">Choose your plan</p>
                  <h1 role="heading" className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800">
                  Planes y precios <p>de Servidor Cloud</p>
                  </h1>
                  <p role="contentinfo" className="text-base leading-5 mt-5 text-gray-600">
                  Elige la mejor combinación para tu proyecto <p>hasta 16 vCPU's, 64 GB RAM y 480 GB almacenamiento SSD</p>
                  </p>
                  <div className="w-56">
                      <div className="bg-gray-100 shadow rounded-full flex items-center mt-10">
                          <button onclick="menuHandler1()" className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1" id="monthly">
                          Anual
                          </button>
                          <button onclick="menuHandler1()" className="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6" id="annually">
                              Mensual
                          </button>
                      </div>
                  </div>
              </div>
              <div className="xl:w-1/2s lg:w-7/12 w-full lg:mt-0 mt-12 md:px-8" role="list">
                  <img src="https://i.ibb.co/0n6DSS3/bgimg.png" className="absolute w-full -ml-12 mt-24" alt="background circle images" />
  
                  {cloud.map((el) => (
                  <div className="pb-4">
                  <div role="listitem" className="bg-white cursor-pointer hover:scale-105 ease-in-out duration-300 drop-shadow-md hover:drop-shadow-xl  rounded-lg p-5 relative z-30 ">
                      <div className="md:flex items-center justify-between">
                      
                          <h2 className="text-2xl font-semibold leading-6 text-gray-800">{el.name}</h2>
                          
                          <p className="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800">${el.price}<span className="font-normal text-base">/mes</span>
                          </p>
                          
                      </div>
  
              <div className="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">      
              <ul>
                      <li className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                  Memoria: {el.RAM}
                  </p> 
                  </li>
  
                  <li className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  </div>
                  <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                  Storage: {el.SSD}
                  </p> 
                  </li>
  
                  <li className="flex items-start mt-4">
                      <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  </div>
                  <p className="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                  Transferencia: {el.transfer}
                  </p> 
                  </li>
              </ul>
              </div>
                        <div className="flex flex-row-reverse ">
                         <Link href='/cart' >
                      <button onclick="menuHandler1()" className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1" id="monthly">
                      + add
                          </button>
                            </Link>  
                      </div>
                  </div>
                  </div>
                
                  ))} 
              </div>
          </div>
      </div>
  </>
    )
  }
