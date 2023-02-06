import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [services, setServices] = useState([]);
  const { Services } = useServices(services);

//llamado a la api
 useEffect(() => {
  const obtenerServices = async () => {
    const resultado = await axios.get('http://localhost:1337/api/cloudserver1s');

    setServices(resultado.data);
  }
obtenerServices();
 }, []);




  return (
    <>
      <Head>
        <title>StarLink</title>
      
      </Head>
      <main className={styles.main}>

      <Spline className={styles.Spline} scene="https://prod.spline.design/pE91QTxCL5UWQMbK/scene.splinecode" />

      </main>
    </>
  )
}
