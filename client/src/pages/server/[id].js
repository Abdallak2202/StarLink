import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ServerScreen = ({entrada, agregarCarrito})=> {

  console.log(entrada);
   const {brand, price, description, id, OS, processor, RAM, SSD } = entrada

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //agragar al carrito
   let productoSeleccionado = {
id,
name: brand,
price,
description, 
OS,
processor,
RAM,
SSD
   }
  
agregarCarrito(productoSeleccionado);
};


  const router = useRouter()
  
 
 return <div>
  { entrada ?
  <>
  
      <h2> Single Product</h2>
      <Link href='/'><button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1" id="monthly" onClick={()=>router.push('/')}>
      <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                      Back to shopp
                          </button></Link>
        
                           <div>
                           <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
<h2>Name:{entrada.brand}</h2>
<h2>Descripción de Servicio:{entrada.description} </h2>
<h2>precio:{entrada.price} $</h2>
        <form onSubmit={handleSubmit}>
                          <Link href={'/hosting/servidores-dedicados'} >
                               <button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1" id="monthly">
                               RELOAD
                                   </button>
                                     </Link>  
                {/* <Link href={'/cart'} > */}
                               
                      {/* <button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1" id="monthly">
                      + add
                          </button> */}
                            {/* </Link>   */}
                            <input type="submit" value="Agregar al Carrito" />
        </form>
                               
                          </div> 






</>:
<div>Loading</div>
}
    </div>

}
   
export async function getServerSideProps({query: { id }}){
const url = `https://star-link-back-end-production.up.railway.app/dedicated-servers/${id}`

  console.log(url)

const respuesta = await fetch(url)
const entrada = await respuesta.json()


  return {
    props:{
entrada
    }
  }


}
export default ServerScreen;