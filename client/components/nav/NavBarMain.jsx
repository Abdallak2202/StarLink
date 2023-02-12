import styles from "./NavBarMain.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {magic} from "../../lib/magic-client";

const NavBarMain = () => {
  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState({
    dominioState: false,
    hostingState: false,
    userState: false,
  });

  const [username, setUsername] = useState("Ingresar");
  // const handleOnClickHome = (e) => {
  //   e.preventDefault();
  //   router.push("/");
  // };

  useEffect(() => {
    async function getUsername() {
      try {
        const { email, issuer } = await magic.user.getMetadata();
        const didToken = await magic.user.getIdToken();
        console.log({ didToken });
        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.log("Error retrieving email:", error);
      }
    }
    getUsername();
  }, []);


  const handleShowDropdown = ({ target }) => {
    console.log(target)
    const { name } = target;
    // e.preventDefault();
    setShowDropdown({
      dominioState:
        name === "dominioState"
          ? !showDropdown.dominioState
          : (showDropdown.dominioState = false),
      hostingState:
        name === "hostingState"
          ? !showDropdown.hostingState
          : (showDropdown.hostingState = false),
      userState:
        name === "userState"
          ? !showDropdown.userState
          : (showDropdown.userState = false),
    });
  };

  const handleSignout = async (e) => {
    e.preventDefault();

    try {
      await magic.user.logout();
      console.log(await magic.user.isLoggedIn());
      router.push("/login");
    } catch (error) {
      console.error("Error logging out", error);
      router.push("/login");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
     router.push("/login");
  
  };

  return (
    <div className={styles.container}>
      <nav className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          StarkLink
        </Link>

        <div>
          <button
            className={styles.usernameBtn}
            name="dominioState"
            onClick={handleShowDropdown}
          >
            Dominio
            <Image
              src="static/icons/expand_more.svg"
              alt="Expand more"
              width={24}
              height={24}
              name="dominioState"
            />
          </button>

          {showDropdown.dominioState && (
            <div className={styles.navDropdown}>
              <div>
                <Link href="/dominio/dominio-com-co" className={styles.linkName}>
                Encuentra tu Nombre en Internet
                </Link>
                {/* <Link href="/dominio/registro-de-dominios" className={styles.linkName}>
                  Dominios .CO Y COM..CO
                </Link> */}
                <Link href="/dominio/email-profesional" className={styles.linkName}>
                  Correo profesional
                </Link>
                {/* <Link href="/dominio/registro-privado" className={styles.linkName}>
                 Registro privado de Dominio
                </Link>
                <Link href="/dominio/transferencia-dominios" className={styles.linkName}>
                Transfiere tu dominio a DonWeb
                </Link>
                <Link href="/dominio/whois" className={styles.linkName}>
               Whois
                </Link> */}
            
              </div>
            </div>
          )}
        </div>
        <div>
          <button
            className={styles.usernameBtn}
            name="hostingState"
            onClick={handleShowDropdown}
          >
            Hosting
            <Image
              src="static/icons/expand_more.svg"
              alt="Expand more"
              width={24}
              height={24}
              name="hostingState"
            />
          </button>

          {showDropdown.hostingState && (
            <div className={styles.navDropdown}>
               <div>
                <Link href="/hosting/webHosting" className={styles.linkName}>
                Web Hosting
                </Link>
                {/* <Link href="/hosting/windows-hosting" className={styles.linkName}>
                  Windows Hosting
                </Link> */}
                <Link href="/hosting/hosting-cloud-servers-vps" className={styles.linkName}>
                 Cloud Hosting
                </Link>
                {/* <Link href="/hosting/wordpress-hosting" className={styles.linkName}>
                 Wordpress Hosting
                </Link> */}
                {/* <Link href="/hosting/hosting-para-revendedores" className={styles.linkName}>
              Hosting para revendedores
                </Link> */}
                <Link href="/hosting/servidores-dedicados" className={styles.linkName}>
             Servidores dedicados
                </Link>
             
              </div>
            </div>
          )}
        </div>
        <Link href='/mis-compras' className={styles.logoCar}><ion-icon name="cart-outline" ></ion-icon></Link>
        
        <div className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              name="userState"
              onClick={handleShowDropdown}
            >
              {username}
              <Image
              src="static/icons/expand_more.svg"
              alt="Expand more"
              width={24}
              height={24}
              name="userState"
            />
            </button>

            {showDropdown.userState && (
              <div className={styles.navDropdown}>
                <div>
                {username !== "Ingresar" && <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>}
                  {username === "Ingresar" && <a className={styles.linkName} onClick={handleSignIn}>
                    Sign In
                  </a>}
                  <div className={styles.lineWrapper}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBarMain;
