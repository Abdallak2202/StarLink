import s from 'src/styles/servHost.module.css'
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
        <div className= {s.flipCard} >
              <div className={s.flipCardInner}>
             <div className= {s.flipCardFront} >

             <h1 className="mb-4 text-9xl font-medium font-sans md:font-serif bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-700 to-blue-600  ">{TLD}</h1>


             <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> {brand}</h2>
          

              <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> {processor}</h2>
              <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> {RAM}</h2>
              <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> {SSD}</h2>
              <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> {OS}</h2>











          <h2 className="mb-4 text-xl font-medium text-purple-500 dark:text-gray-400"> Por solo</h2>
          <div className="flex items-baseline text-purple-500 dark:text-white">
          <span class="text-5xl font-semibold ">$</span>
          <span class="text-7xl font-extrabold tracking-tight ">{price}</span>
          <span class="ml-1 text-2xl font-normal text-purple-500 dark:text-gray-400">/month</span>

          </div>
          </div>

          <div className={s.flipCardBack}>
           
          <h1 className="mb-4 text-6xl font-extrabold text-purple-200  drop-shadow-lg">Eleji tu Plan {TLD}</h1>
          <br/>
          <br/>
          <p className=" mb-6 text-4xl font-bold text-purple-200 drop-shadow-lg shadow-ambar-300">{description}</p>
          <br/>
          <br/>
          
          {/* <Link href='DashBoard'>
<button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-purple-200 hover:bg-purple-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
    <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
    </svg>
    continuar
</button>
</Link> */}
                      <Link href={`/server/${id}`} >
                      <button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1" id="monthly">
                             View Product
                      </button>
                      </Link> 

        </div>
        </div>
          </div>
          </div>
          </motion.div>
      );
    };

export default CardServer;

