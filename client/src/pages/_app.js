import '@/styles/globals.css'
import NavBarMain from 'components/nav/NavBarMain'
import "tailwindcss/tailwind.css";


export default function App({ Component, pageProps }) {
  return (
  <div>
  <NavBarMain username="random user"/>
  <Component {...pageProps} />
  </div>
)}

