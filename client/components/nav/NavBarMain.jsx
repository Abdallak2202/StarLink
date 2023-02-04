import styles from "./NavBarMain.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const NavBarMain = ({ username }) => {
  const router = useRouter();

  const [showDropdown, setShowDropdown] = useState({
    dominioState: false,
    hostingState: false,
    userState: false,
  });

  // const handleOnClickHome = (e) => {
  //   e.preventDefault();
  //   router.push("/");
  // };

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
  return (
    <div className={styles.container}>
      <nav className={styles.wrapper}>
        <div className={styles.logoLink}>
          StarkLink
        </div>

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
                <Link href="/dominio/registro-de-dominios" className={styles.linkName}>
                Encuentra tu Nombre en Internet
                </Link>
                <Link href="/dominio/dominio-com-co" className={styles.linkName}>
                  Dominios .CO Y COM..CO
                </Link>
                <Link href="/dominio/email-profesional" className={styles.linkName}>
                  Correo profesional
                </Link>
                <Link href="/dominio/registro-privado" className={styles.linkName}>
                 Registro privado de Dominio
                </Link>
                <Link href="/dominio/transferencia-dominios" className={styles.linkName}>
                Transfiere tu dominio a DonWeb
                </Link>
                <Link href="/dominio/whois" className={styles.linkName}>
               Whois
                </Link>
             
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
                <Link href="/hosting/web-hosting" className={styles.linkName}>
                Web Hosting
                </Link>
                <Link href="/hosting/windows-hosting" className={styles.linkName}>
                  Windows Hosting
                </Link>
                <Link href="/hosting/hosting-cloud-servers-vps" className={styles.linkName}>
                 Cloud Hosting
                </Link>
                <Link href="/hosting/wordpress-hosting" className={styles.linkName}>
                 Wordpress Hosting
                </Link>
                <Link href="/hosting/hosting-para-revendedores" className={styles.linkName}>
              Hosting para revendedores
                </Link>
                <Link href="/hosting/servidores-dedicados" className={styles.linkName}>
             Servidores dedicados
                </Link>
             
              </div>
            </div>
          )}
        </div>
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
                  <Link href="/login" className={styles.linkName}>
                    Sign out
                  </Link>
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