import React from 'react'
import { useRouter } from 'next/router'
import { data } from 'public/utils/data'
import Link from 'next/link'

export default function ProductScreen({entrada}) {
  console.log(entrada)
  const router = useRouter()
  //const {query} = useRouter()
  //const {id} = query
  //let {id} = useParams()
console.log(router.query)
  //para buscar el producto
  //console.log(product)
  // if(!product){
    //   return <div>service not found</div>
    // }
   //const prueba = data.products.find(el => el.id === id)
 //console.log(prueba)
 
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
<h2>name:{entrada.name}</h2>
<h2>precio:{entrada.price}</h2>

                          <Link href={'/cloudDedicados/cloudServers'} >
                               
                               <button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1" id="monthly">
                               RELOAD
                                   </button>
                                     </Link>  
                <Link href={'/cart'} >
                               
                      <button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1" id="monthly">
                      + add
                          </button>
                            </Link>  
                          </div> 






</>:
<div>Loading</div>
}
    </div>

}
   
export async function getServerSideProps({query: { id }}){
const url = `https://star-link-back-end-production.up.railway.app/cloud-servers/${id}`

  console.log(url)

const respuesta = await fetch(url)
const entrada = await respuesta.json()

console.log(entrada)

  return {
    props:{
entrada
    }
  }


}