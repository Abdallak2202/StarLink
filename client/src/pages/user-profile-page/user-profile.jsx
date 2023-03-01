import React from 'react'

export default function userProfile() {
  return (
    <div className='pt-8'>

<div className="relative block w-full  h-96 ">

<div class="absolute top-0 w-full h-full bg-center bg-cover">

      <img src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80" alt="fondo"/>
      
    </div>
    
    </div>
  
    <div class="relative py-16 bg-gray-200">

    <div class="container mx-auto px-4  bg-white shadow-xl rounded-2xl">

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg -mt-64">
      <div class="px-6">
      <div class="flex flex-wrap justify-center">

      <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
     
          <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 " viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
    </svg>
          </div>

        </div>

        <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">

        <div class="py-6 px-3 mt-32 sm:mt-0">

        <button
      class="text-white py-2 pl-8 pr-8 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
      >
      Back Home
    </button>

        </div>

        </div>

        <div class="w-full lg:w-4/12 px-4 lg:order-1">

        <div class="flex justify-center py-4 lg:pt-4 pt-8">

        <div class="mr-4 p-3 text-center">
            <p class="text-xl font-bold block uppercase tracking-wide text-gray-700 ">0</p>
            <p class="text-gray-400 text-sm ">Reviews</p>
          </div>
          <div class="mr-4 p-3 text-center">
               <p class="text-xl font-bold block uppercase tracking-wide text-gray-700 ">0</p>
            <p class="text-gray-400 text-sm">Shopping</p>
          </div>
          <div class="mr-4 p-3 text-center">
               <p class="text-xl font-bold block uppercase tracking-wide text-gray-700 ">0</p>
            <p class="text-gray-400 text-sm">Services</p>
          </div>
        
        </div>
        </div>
        </div>
  
      
    
        <div class="text-center mt-12">

        <h1 class="text-4xl font-semibold leading-normal mb-2 text-gray-700">first name<span class="text-4xl font-semibold leading-normal mb-2 text-gray-700"> last name</span></h1>

        <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
        <p class=" mr-2 text-lg text-gray-600 mt-4">user name</p>
        </div>

        <div class="mb-2 text-blueGray-600 mt-10">

        <p class="mt-8 text-gray-500 text-lg">email</p>
        <p class="mt-2 text-gray-500 text-lg">telephone</p>
        <p class="mt-2 text-gray-500 text-lg">addres</p>

        </div>
      </div>
    
      <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
      <div class="flex flex-wrap justify-center">
      <div class="w-full lg:w-9/12 px-4">
        <p class="text-gray-600 text-center font-light lg:px-16">servicios de otro planeta. links...</p>
        </div>
        </div>
      </div>
      
      </div>
      </div>
    </div>
    </div>
    </div>
    


  )
}
