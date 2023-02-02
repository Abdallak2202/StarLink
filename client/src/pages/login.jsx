import { ValidateEmail } from "helpers/validateEmail";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [userMsg, setUserMsg] = useState("");

    const handleLoginWithEmail = async (e) => {
      e.preventDefault();
      console.log("hi button");
    if (ValidateEmail(email)) {
        // route to dashboard
        console.log('entre')
      } else {
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
          <button  className={styles.loginBtn}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
