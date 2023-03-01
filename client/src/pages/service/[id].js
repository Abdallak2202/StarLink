import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ServiceScreen = ({entrada, agregarCarrito})=> {

  console.log(entrada);
   const {TLD, price, description, id, slug} = entrada

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //agragar al carrito
   let productoSeleccionado = {
id,
name: TLD,
price,
description,
slug
   }
  
agregarCarrito(productoSeleccionado);
};


  const router = useRouter()
  
 
 return <div >
  { entrada ?

  <div class="bg-gradient-to-br from-indigo-300 via-violet-100 to-sky-200 p-8 rounded-md w-ful pt-48 h-full pb-80">


   <div class=" flex items-center justify-between pb-12">

   <div>
			<h2 class="text-gray-500   font-semibold text-4xl">Products Oder</h2>
			<span class="text-2xl text-gray-500">All products item</span>
		</div>
    </div>

    <div class="flex flex-row-reverse items-center justify-between">
    <div>
      
    <Link href='/dominio/dominio-com-co'> 
    <button class="bg-indigo-600 px-4 py-3 rounded-md text-white font-semibold tracking-wide cursor-pointer text-lg" id="monthly" onClick={()=>router.push('/dominio/dominio-com-co')}>continue shopping</button></Link>
					
				</div>
    </div>

     <div> 

     <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">

        <div class="inline-block min-w-full shadow-lg rounded-2xl overflow-hidden">
        <table class="min-w-full leading-normal">

        <thead>

        <tr>
								<th
									class="px-5 py-3 border-b-2 border-gray-300 bg-gray-50 backdrop-blur-sm text-left text-lg font-semibold text-gray-500 uppercase tracking-wider">
                    Product
									
								</th>
                <th
									class="px-5 py-3 border-b-2 border-gray-300  bg-gray-50 backdrop-blur-sm text-left text-lg font-semibold text-gray-500 uppercase tracking-wider">
									Name
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-300   bg-gray-50  text-left text-lg font-semibold text-gray-500 uppercase tracking-wider ">
									Descripción
								</th>
								<th
									class="px-5 py-3 border-b-2 border-gray-300  bg-gray-50 -sm text-left text-lg font-semibold text-gray-500 uppercase tracking-wider">
									precio
								</th>
                <th
									class="px-5 py-3 border-b-2 border-gray-300  bg-gray-50 backdrop-blur-sm text-left text-lg  font-semibold text-gray-500 uppercase tracking-wider">
								</th>
							</tr>
                           
                </thead>

                <tbody>
                <tr>
                <td class="px-5 py-5 border-b border-gray-300 bg-transparent text-sm backdrop-blur-xl">

                <div class="flex items-center">

                <div class="flex-shrink-0 w-20 h-20 ">

                <img class="w-full h-full rounded-full border-2 border-b-gray-50 border-spacing-5"
                                               src='/images/nubeDominio.jpg'
                                                alt="producto" />
              </div>
              </div>
              
              </td>
              <td class="px-5 py-5 border-b border-gray-300 bg-transparent text-lg backdrop-blur-xl">
              <p class="text-gray-900 whitespace-no-wrap">{entrada.TLD}</p>
              </td>

              <td class="px-5 py-5 border-b border-gray-300 bg-transparent text-lg backdrop-blur-xl">
              <p class="text-gray-900 whitespace-no-wrap">{entrada.description}</p>
              </td>

								<td class="px-5 py-5 border-b border-gray-300 bg-transparent text-lg backdrop-blur-xl">
									<p class="text-gray-900 whitespace-no-wrap">
									{entrada.price} $
									</p>
								</td>

                <td class="px-5 py-5 border-b border-gray-300 bg-transparent pr-0 backdrop-blur-xl ">

                <form onSubmit={handleSubmit}>
                          <Link href={'/dominio/dominio-com-co'} >
                               <button className="bg-gray-50 focus:ring-1 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1 hover:bg-gray-200 border-2 border-b-gray-200" id="monthly">
                               RELOAD
                                   </button>
                                     </Link>  
                            <input type="submit" value="ADD CART" className=' bg-indigo-600 focus:ring-2 focus:ring-offset-1 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-3 px-10 mr-1 cursor-pointer hover:bg-blue-500' />
        </form>
								</td>
              </tr>
              </tbody>
                         </table> 

                         <div
						class="px-5 py-5 bg-gray-50 border-t flex flex-col xs:flex-row items-center xs:justify-between">

                         <div class="inline-flex mt-2  xs:mt-0 ">
							<button
                                class="text-lg text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-14 rounded-l">
                                Prev
                            </button>
							&nbsp; &nbsp;
							<button
                                class="text-lg text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-14 rounded-r">
                                Next
                            </button>
						</div>  
                          </div> 
                          </div> 
                          </div>
                          </div>
                          




                          
</div>:
<div>Loading</div>
}
    </div>

}
   
export async function getServerSideProps({query: { id }}){
const url = `https://star-link-back-end-production.up.railway.app/domains/${id}`

  console.log(url)

const respuesta = await fetch(url)
const entrada = await respuesta.json()


  return {
    props:{
entrada
    }
  }


}
export default ServiceScreen;