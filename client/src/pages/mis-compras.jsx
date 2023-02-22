import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { getUserFromLocalCookie } from '../../lib/auth'

export const MisCompras = () => {
  const router = useRouter();
  const { data: session } = useSession();
  
 
  useEffect(() => {
    async function setPageState() {
        try {
          const user = await getUserFromLocalCookie();
          console.log({ user });
         if(!user &&!session) router.push("/login");
          //set coffee stores
        } catch (error) {
          //set error
          console.log("Error", { error });
        }
      }
    
    setPageState();
//  setfirst(user)
//     if( !first){
//      router.push("/login")
//     }
 
   }, [])
   
  return (
    <div>mis-compras</div>
  )
}

export default MisCompras;




