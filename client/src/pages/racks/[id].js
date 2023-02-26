import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const RackScreen = ({entrada, agregarCarrito})=> {

  console.log(entrada);
   const {name, floorspace, racks, consumption, price, description, id, slug, location } = entrada

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //agragar al carrito
   let productoSeleccionado = {
id,
name,
price,
description,
location,
floorspace,
racks,
consumption,
slug,
location
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
<h2>Name:{entrada.name}</h2>
<h2>Descripción de Servicio:{entrada.description} </h2>
<h2>precio:{entrada.price} $</h2>
        <form onSubmit={handleSubmit}>
                          <Link href={'/hosting/w-hosting/webHosting'} >
                               <button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1" id="monthly">
                               RELOAD
                                </button>
                          </Link>  
                
    <input type="submit" value="Agregar al Carrito" />
        </form>
     
      </div> 

</>:
<div>Loading</div>
}
    </div>

}
   
export async function getServerSideProps({query: { id }}){
const url = `https://star-link-back-end-production.up.railway.app/housings/${id}`
  console.log(url)
const respuesta = await fetch(url)
const entrada = await respuesta.json()
  return {
    props:{
entrada
    }
  }


}
export default RackScreen;