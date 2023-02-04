import '@/styles/globals.css'
import NavBarMain from 'components/nav/NavBarMain'


export default function App({ Component, pageProps }) {
  return (
  <div>
  <NavBarMain username="random user"/>
  <Component {...pageProps} />
  </div>
)}

