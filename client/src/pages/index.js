import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Spline from '@splinetool/react-spline'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
