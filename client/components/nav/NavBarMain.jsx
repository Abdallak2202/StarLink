import styles from "./NavBarMain.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getUserFromLocalCookie, unsetToken } from "lib/auth";
import { useSession,signOut } from "next-auth/react";


const NavBarMain = ({value}) => {
  const router = useRouter();
  const [user, setuser] = useState('')
  const [values, setvalues] = useState('')
  const { data: session } = useSession()
console.log(session);
  useEffect(() => {
    const getData = async () => {
      const values = await getUserFromLocalCookie()
      setvalues(values)
      if (values){
setuser(values)
      } else {
        setuser(session?.user.name)
      }
    }
  
    // call the function
    getData()
    
    
  //  setuser(values)
    
  }, [])
  

  const [showDropdown, setShowDropdown] = useState({
    dominioState: false,
    hostingState: false,
    userState: false,
    cloudState: false,
  });

  // const [username, setUsername] = useState("Ingresar");
  // const handleOnClickHome = (e) => {
  //   e.preventDefault();
  //   router.push("/");
  // };

  // useEffect(() => {
  //   async function getUsername() {
  //     try {
  //       const { email, issuer } = await magic.user.getMetadata();
  //       const didToken = await magic.user.getIdToken();
  //       console.log({ didToken });
  //       if (email) {
  //         setUsername(email);
  //       }
  //     } catch (error) {
  //       console.log("Error retrieving email:", error);
  //     }
  //   }
  //   getUsername();
  // }, []);


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
      cloudState:
          name === "cloudState"
            ? !showDropdown.cloudState
            : (showDropdown.cloudState = false),
      userState:
        name === "userState"
          ? !showDropdown.userState
          : (showDropdown.userState = false),
    });
  };

  const handleSignout = async (e) => {
    e.preventDefault();
    if (values){
      unsetToken();
      router.reload()
    } else {
      signOut();
      router.reload()
    }
  
    
    // try {
    //   await magic.user.logout();
    //   console.log(await magic.user.isLoggedIn());
    //   router.push("/login");
    // } catch (error) {
    //   console.error("Error logging out", error);
    //   router.push("/login");
    // }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
     router.push("/login");
  
  };

  return (
    <div className={styles.container}>
      <nav className={styles.wrapper}>
        <Link className={styles.logoLink} href="/">
          StarLink
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
                <Link href="/hosting/w-hosting/webHosting" className={styles.linkName}>
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


        <div>
          <button
            className={styles.usernameBtn}
            name="cloudState"
            onClick={handleShowDropdown}
          >
            cloud & Dedicados
            <Image
              src="static/icons/expand_more.svg"
              alt="Expand more"
              width={24}
              height={24}
              name="cloudState"
            />
          </button>

          {showDropdown.cloudState && (
            <div className={styles.navDropdown}>
              <div>
                <Link href="/cloudDedicados/cloudServers" className={styles.linkName}>
                cloud Servers
                </Link>
                {/* <Link href="/dominio/registro-de-dominios" className={styles.linkName}>
                  Dominios .CO Y COM..CO
                </Link> */}
                <Link href="/cloudDedicados/servidoresDedicados" className={styles.linkName}>
                servidores Dedicados
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







        <Link href='/cart' className={styles.logoCar}><ion-icon name="cart-outline" ></ion-icon></Link>
        

        <div className={styles.navContainer}>
          <div>
            <button
              className={styles.usernameBtn}
              name="userState"
              onClick={handleShowDropdown}
            >
             {user?user:"SignIn"}
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
                {user&& <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>}
                  {!user&& <a className={styles.linkName} onClick={handleSignIn}>
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
