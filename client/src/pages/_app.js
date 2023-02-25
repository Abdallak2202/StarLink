import NavBarMain from "components/nav/NavBarMain";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Loading from "components/loading/Loading";
import Footer from "components/footer/Footer";
import { useFetchUser } from "lib/authContext";
import { SessionProvider, useSession } from "next-auth/react"
import { Carrois_Gothic } from "@next/font/google";


export default function App({ Component,  pageProps: { session, ...pageProps }}) {
  const [carrito, setCarrito] = useState([]);

  useEffect(()=> {
const carritoLS = JSON.parse(localStorage.getItem("carrito"))
carritoLS.length === 0 ? '':
setCarrito(carritoLS);
  }, []);

useEffect(()=> {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}, [carrito]);

  const agregarCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarProducto = (id) => {
    const carritoActualizado= carrito.filter((articulo)=> articulo.id !==id);
    setCarrito(carritoActualizado);
  };


const [cartItemsCount, setCartItemsCount] = useState(0)
useEffect(()=> {
setCartItemsCount(carrito.length)
//console.log(cartItemsCount)
},[carrito])




  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);
const {user,loading} = useFetchUser();


  // useEffect(() => {
  //   const handleLoggedIn = async () => {
  //     // const isLoggedIn = await magic.user.isLoggedIn();
  //     // switch (isLoggedIn) {
  //     //   case true :
  //     //     router.push("/")
  //     //   default:
  //     //     router.push("/login")
  //     // }
  //     // if (router.pathname === "/login" && user ) router.push('/');
  //     // if (router.pathname === "/mis-compras" && !user) {
  //     //   router.push("/login");
  //     // } else {
  //     //   router.push(router.pathname);
  //     // }

  //       // if (user) {
  //       //   // route to /
  //       //   router.push("/");
  //       // } else {
  //       //   // route to /login
  //       //   router.push("/login");
  //       // }

  //   };
  //   handleLoggedIn();
  // }, [router.pathname,]);

  // useEffect(() => {
  //   const handleComplete = () => {
  //     setIsLoading(false);
  //   };
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleComplete);
  //     router.events.off("routeChangeError", handleComplete);
  //   };
  // }, [router]);
  return (
    <SessionProvider session={session}>
      {loading ? (
        <Loading />
      ) : (
        <div>

          {router.pathname !== "/login" && <NavBarMain  cartItemsCount={cartItemsCount}/>}
          <Component {...pageProps} carrito={carrito} agregarCarrito={agregarCarrito}  eliminarProducto={eliminarProducto} cartItemsCount={cartItemsCount}/>
          {router.pathname !== "/login" && <Footer />}
        </div>
      )}
    </SessionProvider>
  );
}
