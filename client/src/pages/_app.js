import NavBarMain from "components/nav/NavBarMain";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import Loading from "components/loading/Loading";
import Footer from "components/footer/Footer";
import { useFetchUser } from "lib/authContext";
import { SessionProvider, useSession } from "next-auth/react"


export default function App({ Component,  pageProps: { session, ...pageProps }}) {
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);
const {user,loading} = useFetchUser();


  useEffect(() => {
    const handleLoggedIn = async () => {
      // const isLoggedIn = await magic.user.isLoggedIn();
      // switch (isLoggedIn) {
      //   case true :
      //     router.push("/")
      //   default:
      //     router.push("/login")
      // }
      // if (router.pathname === "/login" && user ) router.push('/');
      // if (router.pathname === "/mis-compras" && !user) {
      //   router.push("/login");
      // } else {
      //   router.push(router.pathname);
      // }

        // if (user) {
        //   // route to /
        //   router.push("/");
        // } else {
        //   // route to /login
        //   router.push("/login");
        // }
      
    };
    handleLoggedIn();
  }, [router.pathname,]);

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

          {router.pathname !== "/login" && <NavBarMain />}
          <Component {...pageProps} />
          {router.pathname !== "/login" && <Footer />}
        </div>
      )}
    </SessionProvider>
  );
}
