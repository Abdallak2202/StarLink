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

  const [username, setUsername] = useState("");
  // const handleOnClickHome = (e) => {
  //   e.preventDefault();
  //   router.push("/");
  // };

  useEffect(() => {
    async function getUsername() {
      try {
        const { email } = await magic.user.getMetadata();
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

  return (
    <div className="bg-gradient-to-r from-stone-900 to-blue-500 ... ">
      <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <div className="">
          <Link href="index">
            <button>
          <img src="starLinkFondoNegro.jfif" alt="img not found"
           className="h-15 mr-20 sm:h-20" />
           </button>
          </Link>
        </div>

        <div>
          <button
            className=" text-indigo-50 hover:text-orange-400 mr-20 sm:h-20 "
            name="dominioState"
            onClick={handleShowDropdown}
          >
             <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Dominio
            <Image
              src="static/icons/expand_more.svg"
              alt="Expand more"
              width={24}
              height={24}
              name="dominioState"
            />
            </span>
          </button>

          {showDropdown.dominioState && (
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 ... max-w-screen-xl px-6 py-5 mx-auto md:px-10 " >
              <div className="flex items-center ">
                <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <Link href="/dominio/dominio-com-co" className= "text-indigo-50 hover:text-orange-300 hover:uppercase text-xl" >
                Encuentra tu Nombre en Internet
                </Link>
                {/* <Link href="/dominio/registro-de-dominios" className={styles.linkName}>
                  Dominios .CO Y COM..CO
                </Link> */}
                <Link href="/dominio/email-profesional" className="text-indigo-50 hover:text-orange-300 hover:uppercase text-xl">
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
                </ul>
            
              </div>
            </div>
          )}
        </div>
        <div>
          <button
            className=" text-indigo-50 hover:text-orange-400 mr-20 sm:h-20 "
            name="hostingState"
            onClick={handleShowDropdown}
          >
             <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Hosting
            <Image
              src="static/icons/expand_more.svg"
              alt="Expand more"
              width={24}
              height={24}
              name="hostingState"
            />
            </span>
          </button>

          {showDropdown.hostingState && (
             <div className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 ... max-w-screen-xl px-6 py-5 mx-auto md:px-10 ">
             <div className="flex items-center ">
               <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <Link href="/hosting/webHosting" className="text-indigo-50 hover:text-orange-300 hover:uppercase text-xl">
                Web Hosting
                </Link>
                {/* <Link href="/hosting/windows-hosting" className={styles.linkName}>
                  Windows Hosting
                </Link> */}
                <Link href="/hosting/hosting-cloud-servers-vps" className="text-indigo-50 hover:text-orange-300 hover:uppercase text-xl">
                 Cloud Hosting
                </Link>
                {/* <Link href="/hosting/wordpress-hosting" className={styles.linkName}>
                 Wordpress Hosting
                </Link> */}
                {/* <Link href="/hosting/hosting-para-revendedores" className={styles.linkName}>
              Hosting para revendedores
                </Link> */}
                <Link href="/hosting/servidores-dedicados" className="text-indigo-50 hover:text-orange-300 hover:uppercase text-xl">
             Servidores dedicados
                </Link>
             </ul>
              </div>
            </div>
          )}
        </div>
        <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          <div>
            <button
              className=" text-indigo-50 hover:text-orange-400 mr-20 sm:h-20 "
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
              <div className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 ... max-w-screen-xl px-6 py-5 mx-auto md:px-10 ">
                <div className="flex items-center ">
                 <a className="text-indigo-50 hover:text-orange-300 hover:uppercase text-xl" onClick={handleSignout}>
                    Sign out
                  </a>
                  <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></div>
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
