import { ValidateEmail } from "helpers/validateEmail";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import {magic} from "../../lib/magic-client"

const Login = () => {
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter();

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


  const handleLoginWithEmail =  async(e) => {
    e.preventDefault();
    
    if (ValidateEmail(email)) {
      const emailsAllowed =["joseluy123@gmail.com","abdallak2202@gmail.com","martinezf1985@gmail.com","perezea1010@gmail.com", "jesuperez05@gmail.com","silvinaaguello@gmail.com","luishg.ingeniero@gmail.com"]
      const emailTest = element => element === email;
      try {
        setIsLoading(true)
        const didToken = await magic.auth.loginWithMagicLink({
          email,
        });
        console.log({ didToken });
        if(didToken){
          router.push("/");
        } 
      } catch (error) {
        // Handle errors if required!
        console.error("Something went wrong logging in", error);
        setIsLoading(false);
      }
      // router.push("/");
      } else {
        setIsLoading(false);
        setUserMsg("Something went wrong loggin in");
      }
    } else {
      setIsLoading(false);
      // show user message
      setUserMsg("Enter a valid email address");
    }
  };

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    console.log("event", e);
    const email = e.target.value;
    setEmail(email);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>starkLink SignIn</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <a className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={260}
                height={160}
              />
            </div>
          </a>
        </div>
      </header>

      <form className={styles.main} onSubmit={handleLoginWithEmail}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>

          <input
            type="text"
            placeholder="Email address"
            className={styles.emailInput}
            onChange={handleOnChangeEmail}
            required
          />

          <p className={styles.userMsg}>{userMsg}</p>
          <button className={styles.loginBtn}>{ isLoading ? "Loading...":"Sign In"}</button>
        </div>
      </form>
    </div>
  );
};

export default Login;