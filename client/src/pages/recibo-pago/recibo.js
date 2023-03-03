import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
// export async function getStaticProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
   
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         payment,
//       },
//     }
//   }
export const recibo = () => {
    const router = useRouter()

    
    useEffect(() => {
        const getDta=async()=>{

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders?_sort=id:desc&_limit=1`)
            const payment = await res.json()
            const {receipt_url}= payment[0]
            // console.log(receipt_url);
            router.push(receipt_url)
        }
        getDta()
    }, [])
    
    // ?_sort=id:desc&_limit=1
    // console.log({payment});
  return (
    <div>Gracias Por su Compra</div>
    
  )
}

export default recibo;