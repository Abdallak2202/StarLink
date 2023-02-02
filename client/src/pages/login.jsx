import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Login.module.css"

const Login = () => {
  return (
    <div>
      <Head>
        <title>starkLink SignIn</title>
      </Head>

      <header>
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
    </div>
  );
}

export default Login;