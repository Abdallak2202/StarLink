import styles from "./NavBarMain.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { getUserFromLocalCookie, unsetToken } from "lib/auth";
import { useSession,signOut } from "next-auth/react";


const NavBarMain = ({value, cartItemsCount, carrito}) => {
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
//--------------Para que no quede desplegado el menú cuando cambiamos de pagina---------------
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsNavOpen(false);
      setShowDropdown({
        dominioState: false,
        hostingState: false,
        userState: false,
        cloudState: false,
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  //------------------Para el conteo de los elementos de compra que suben al carrito-----------------------------------------------------------
let countCart = 10;


  //------------------------------------------------------------------------------
  return (
    <div className={styles.container}>
    <nav className={styles.menu}>
     <Link className={styles.logoLink} href="/">

         <Image 
        src={'/starLinkFondoNegro.jfif'}
        alt="StarLink"
        width={130}
        height={130}
        className={styles.logoLink}
        />
     
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
            <div  class="mt-1 shadow-sm bg-sky-100/20">
                <ul className=" grid-cols-12 max-w-screen-xl px-4 py-5 mx-auto  md:px-6">
                <li>
                      
                      
                <Link href="/dominio/dominio-com-co" >
                <div>
                <svg className="absolute inset-y-8 left-2 w-11 fill-gray-100 shadow-lg " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                 {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                </svg>
                 </div>
                <div  className={styles.linkName}>Encuentra tu Nombre en Internet</div>
                <span class="grid max-w-screen-xl px-6 py-1 mx-auto text-3xl font-light text-gray-900 dark:text-gray-100">El dominio que buscas al mejor precio.</span>


                </Link>
                {/* <Link href="/dominio/registro-de-dominios" className={styles.linkName}>
                  Dominios .CO Y COM..CO
                </Link> */}


                <Link href="/dominio/email-profesional">
                <div >
                <svg className="absolute inset-y-18 left-2 w-12 fill-gray-100 shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
                </div>
                <div className={styles.linkName}>Correo profesional</div>
                <span class="grid max-w-screen-xl px-6 py-1 mx-auto text-3xl font-light text-gray-900 dark:text-gray-100">Genera mayor credibilidad teniendo un correo con tu dominio.</span>
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
              </li>
               </ul>
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
            <div  class="mt-1 shadow-sm bg-sky-100/20">
             <ul className=" grid-cols-12 max-w-screen-xl px-4 py-5 mx-auto  md:px-6">
            <li>


                <Link href="/hosting/w-hosting/webHosting" >
                  <div>
                  <svg className="absolute inset-y-18 left-2 w-12 fill-gray-100 shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                  </svg>
                  </div>
                  <div className={styles.linkName}> -Web Hosting </div>
                    <span class="grid max-w-screen-xl px-6 py-1 mx-auto text-3xl font-light text-gray-900 dark:text-gray-100">Simple, ráapido y confiable.</span>
                </Link>


                {/* <Link href="/hosting/windows-hosting" className={styles.linkName}>
                  Windows Hosting
                </Link> */}


                <Link href="/hosting/hosting-cloud-servers-vps">
                  <div>
                  <svg className="absolute inset-y-18 left-2 w-12 fill-gray-100 shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
                  </svg>
                  </div>
                  <div className={styles.linkName}> -Cloud Hosting</div>
                     <span class="grid max-w-screen-xl px-6 py-1 mx-auto text-3xl font-light text-gray-900 dark:text-gray-100">Performance sorprendente para tu sitio o aplicación.</span>
                </Link>


                {/* <Link href="/hosting/wordpress-hosting" className={styles.linkName}>
                 Wordpress Hosting
                </Link> */}
                {/* <Link href="/hosting/hosting-para-revendedores" className={styles.linkName}>
              Hosting para revendedores
                </Link> */}


                <Link href="/hosting/servidores-dedicados" >
                  <div>
                  <svg className="absolute inset-y-18 left-2 w-12 fill-gray-100 shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                  </svg>
                  </div>
                  <div className={styles.linkName}> -Servidores dedicados</div>
                 <span class="grid max-w-screen-xl px-6 py-1 mx-auto text-3xl font-light text-gray-900 dark:text-gray-100">Lo máximo en Performance y control.</span>
                </Link>


             </li>
         </ul>
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
            <div  class="mt-1 shadow-sm bg-sky-100/20">
            <ul className=" grid-cols-12 max-w-screen-xl px-4 py-5 mx-auto  md:px-6">
             <li>


         <Link href="/cloudDedicados/cloudServers">
          <div>
          <svg className="absolute inset-y-18 left-2 w-12 fill-gray-100 shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
           <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
            </svg>
            </div>
            <div className={styles.linkName}>-Cloud Servers</div>
            <span class=" grid max-w-screen-xl px-6 py-1 mx-auto text-3xl font-light text-gray-900 dark:text-gray-100">Alojamiento rápido, escalable y confiable
                      para tus aplicaciones.</span>
          </Link>


                {/* <Link href="/dominio/registro-de-dominios" className={styles.linkName}>
                  Dominios .CO Y COM..CO
                </Link> */}


                <Link href="/cloudDedicados/servidoresDedicados">
                  <div>
                  <svg className="absolute inset-y-18 left-2 w-12 fill-gray-100 shadow-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                  <path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                  </svg>
                  </div>
                  <div className={styles.linkName}>-Servidores Dedicados</div>
                  <span class="grid max-w-screen-xl px-6 py-1 mx-auto text-3xl font-light text-gray-900 dark:text-gray-100">Potencia, Flexibilidad y Control.</span>
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
               </li>
        </ul>
      </div>
     </div>
          )}
    </div>



        <Link href='/cart' className={styles.logoCar}><span className="text-white bg-danger rounded p-1">{cartItemsCount}</span><ion-icon name="cart-outline" ></ion-icon></Link>
        
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
            <div  class="mt-1 shadow-sm bg-sky-100/20">
                <div className=" grid-cols-12 max-w-screen-xl px-4 py-5 mx-auto  md:px-6">
                 
             <div>
                {user&& <a className={styles.linkName} onClick={handleSignout}>
                    Sign out
                  </a>}
                  {!user&& <a className={styles.linkName} onClick={handleSignIn}>
                    Sign In
                  </a>}
                  </div>
                  </div>
                  <div className={styles.lineWrapper}>
                  </div>
              

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
