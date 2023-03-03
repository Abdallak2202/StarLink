import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Spline from '@splinetool/react-spline'
import { getRoleFromLocalCookie } from 'lib/auth'

export default function Home() {
  // const [services, setServices] = useState([]);
  // const { Services } = useServices(services);


 useEffect(() => {
  const setRole = async () => {
    try {
      
      const role = await getRoleFromLocalCookie();
      console.log({role});
    } catch (error) {
      console.log({error});
    }
  }
  setRole()
 }, []); 

//  startFetchMyQuery();


  return (
    <>
      <Head>
        <title>StarLink</title>
      
      </Head>
      <main className={styles.main}>

      <Spline className={styles.slpine} scene="https://prod.spline.design/pE91QTxCL5UWQMbK/scene.splinecode" />

      </main>
    </>
  )
}


