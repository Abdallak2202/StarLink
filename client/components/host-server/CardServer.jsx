import s from "components/host-server/CardServer.module.css"
import React from "react";
import Link from 'next/link'
import { motion } from "framer-motion"
    

const config = {
      type: 'spring',
      damping: 10,
      stiffness: 80
    };
    export const CardServer = ({ TLD, price, description,brand, processor, SSD, RAM, OS, id }) => {
      return (
        <motion.div
          transition={config}
              initial={{ scale: 0.3, opacity: 0 }}
           animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
            exit={{ x: 0, opacity: 0 }}>


<div className={s.container}>
<img src="https://media2.giphy.com/media/9igGG6KxpY0eY0Sr5u/giphy.gif" alt="Logo" class="w-400 h-300" />

<div class="flex flex-wrap justify-center ">

<div class="  w-full max-w-full max-h-full bg-white  border-b-4 border-l-4 border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

  <div class="m-2 p-2">
  <h1 class="mb-4 text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-blue-900 from-blue-400  drop-shadow-lg">Eleji tu Plan {TLD}</h1>
  <p class=" mb-6 text-5xl font-bold text-purple-900 drop-shadow-lg shadow-ambar-300">{description}</p>

      

      <h2 class="mb-2 text-5xl font-bold font-mono uppercase tracking-tight text-sky-100 dark:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500">{brand}</h2>
      <ul>
      <li class="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg aria-hidden="true" class="flex-shrink-0 w-8 h-8 text-blue-500 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-3xl font-bold leading-tight text-gray-500 dark:text-gray-400">{processor}</span>
              </li>
              <li class="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg aria-hidden="true" class="flex-shrink-0 w-8 h-8 text-blue-500 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-3xl font-bold leading-tight text-gray-500 dark:text-gray-400">{RAM} de memoria RAM</span>
              </li>
              <li class="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg aria-hidden="true" class="flex-shrink-0 w-8 h-8 text-blue-500 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-3xl font-bold leading-tight text-gray-500 dark:text-gray-400">{SSD}</span>
              </li>
              <li class="flex space-x-3">
              {/* <!-- Icon --> */}
              <svg aria-hidden="true" class="flex-shrink-0 w-8 h-8 text-blue-500 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
              <span class="text-3xl font-bold leading-tight text-gray-500 dark:text-gray-400">{OS}</span>
              </li>
              </ul>

              <h2 className=" underline decoration-wavy italic mb-4 px-3 py-4 text-3xl font-mono font-medium text-gray-500 dark:text-gray-400"> Por solo</h2>
          <div className="flex items-baseline text-purple-500 dark:text-white drop-shadow-3xl">
          <span class="text-7xl py-8 inline-flex justify-center w-full text-center font-extrabold tracking-tight box-decoration-clone rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 text-white px-11">$ {price}/month</span>
          </div>
          <br />

          <Link href={`/server/${id}`} >
                        <button  class="cursor-pointer text-gray-100 text-3xl font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  rounded-lg  px-6 py-4 inline-flex justify-center w-full text-center">

                             View Product
                        </button>
           
                      </Link>  

             





















          
          {/* <Link href='DashBoard'>
<button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-purple-200 hover:bg-purple-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
    </svg>
    continuar
</button>
</Link> */}
                      
      

        </div>
        </div>
          </div>
</div>















          </motion.div>
      );
    };

export default CardServer;

