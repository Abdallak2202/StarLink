import NavBarMain from 'components/nav/NavBarMain'
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {magic} from "../../lib/magic-client";
import "../styles/globals.css";
import Loading from 'components/loading/Loading';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoggedIn = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      if (isLoggedIn) {
        // route to /
        router.push("/");
      } else {
        // route to /login
        router.push("/login");
      }
    };
    handleLoggedIn();
  }, []);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);
  return (
    <>
      {isLoading ? <Loading />
  :<div>
  {router.pathname !== "/login" && 
  <NavBarMain />}
  <Component {...pageProps} />;
  </div>
}
    </>
)}

