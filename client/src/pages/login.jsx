// import { ValidateEmail } from "helpers/validateEmail";
import { getRoleFromLocalCookie, getUserFromLocalCookie, setToken } from "lib/auth";
import { fetcher } from "lib/getUsers";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useFetchUser } from "lib/authContext";


const Login = (
 ) => {
  // const [email, setEmail] = useState("");
  const { data: session } = useSession()
  const router = useRouter();
// console.log({session});
  const [userMsg, setUserMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [newUser, setnewUser] = useState('')
  const [data, setData] = useState({
    identifier: "",
    password: "",
  });
 
  const { identifier, password } = data;
  // const {user} = useFetchUser();
  // useEffect(() => {
  //  if(session || user){
  //   router.push('/dominio/dominio-com-co')
  //  }
  
  // }, [session,user])
  
  
  // const {user,loading} = useFetchUser()
  useEffect(() => {
    
 
    async function setUserState() {
      try {
        const user = await getUserFromLocalCookie();
        console.log({ user });
          

    if(user || session) router.push('/');
    
        //set coffee stores
      } catch (error) {
        //set error
        console.log("Error", { error });
      }
    }
  
  setUserState();
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const responseData = await fetcher(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier,
            password,
          }),
        }
      );
      console.log({responseData});
      if (responseData.user) {
        setToken(responseData);
      
      } else {
        setUserMsg(responseData.message[0].messages[0].message);
      }
     
    } catch (error) {
      console.error("Something went wrong logging in", error);
    }
  };

  const handleChange = ({ target }) => {
    setUserMsg("");
    setData({ ...data, [target.name]: target.value });
  };

 

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

  // const handleLoginWithEmail =  async(e) => {
  //   e.preventDefault();

  //   if (ValidateEmail(email)) {

  //     const emailsAllowed =["joseluy123@gmail.com","abdallak2202@gmail.com","martinezf1985@gmail.com","perezea1010@gmail.com", "jesuperez05@gmail.com","silvinaaguello@gmail.com","luishg.ingeniero@gmail.com"]
  //     const emailTest = element => element === email;

  //     if (emailsAllowed.some(emailTest)) {
  //     // if (email === "joseluy123@gmail.com") {
  //     // route to dashboard email antiguo merge

  //     try {
  //       setIsLoading(true)
  //       const didToken = await magic.auth.loginWithMagicLink({
  //         email,
  //       });
  //       console.log({ didToken });
  //       if(didToken){
  //         const response = await fetch("/api/login", {
  //           method: "POST",
  //           headers: {
  //             Authorization: `Bearer ${didToken}`,
  //             "Content-Type": "application/json",
  //           },
  //         });

  //         const loggedInResponse = await response.json();
  //         if (loggedInResponse.done) {
  //           router.push("/");
  //         } else {
  //           setIsLoading(false);
  //           setUserMsg("Something went wrong logging in");
  //         };
  //       }
  //     } catch (error) {
  //       // Handle errors if required!
  //       console.error("Something went wrong logging in", error);
  //       setIsLoading(false);
  //     }
  //     // router.push("/");
  //     } else {
  //       setIsLoading(false);
  //       setUserMsg("Something went wrong loggin in");
  //     }
  //   } else {
  //     setIsLoading(false);
  //     // show user message
  //     setUserMsg("Enter a valid email address");
  //   }
  // };

  // const handleOnChangeEmail = (e) => {
  //   setUserMsg("");
  //   console.log("event", e);
  //   const email = e.target.value;
  //   setEmail(email);
  // };

  return (

    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className=" flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
        <Link className="flex p-3 w-full caja top-10 left-20 bg-blue-600 text-white font-medium text-2xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"  href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
              Volver al inicio
          </Link>
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            
            <img
              src="images/loginConLogoStarLink.png"
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div class="flex flex-row items-center justify-center lg:justify-start">
                <p class="text-3xl mb-0 mr-4">Sign in with</p>
                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  {/* <!-- Facebook --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    class="w-8 h-8"
                  >
                    {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path
                      fill="currentColor"
                      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                  </svg>
                </button>
<Link href="/api/auth/signin">
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    const prueba = signIn();
                    console.log({prueba});
                  
                  }}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  {/* <!-- Google --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                    class="w-8 h-8"
                  >
                    {/* <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}

                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                </button>

</Link>

                <button
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  {/* <!-- Linkedin --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="w-8 h-8"
                  >
                    {/* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
                    <path
                      fill="currentColor"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0 text-xl">Or</p>
              </div>

              {/* <!-- Email input --> */}
              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-3xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  name="identifier"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <!-- Password input --> */}
              <div className="mb-2">
                <input
                  type="password"
                  class="form-control block w-full px-4 py-2 text-3xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <div className={styles.InfoBanner } >
                  <span className={`${styles.reversed} ${styles.reversedRight}`}>
                    <span>&#9888;</span>
                  </span>
                  <span className={`${styles.reversed} ${styles.reversedLeft}`}>
                    {userMsg}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800 text-2xl"
                    for="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-gray-800 text-2xl">
                  Forgot password?
                </a>
              </div>

              <div className="text-center lg:text-left">
                <button className="inline-block px-8 py-3 bg-blue-600 text-white font-medium text-2xl leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                  {isLoading ? "Loading..." : "Sign In"}
                </button>
                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link
                    href="/register"
                    className= "text-xl text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

//return (
//     <div className={styles.container}>
//       <Head>
//         <title>starkLink SignIn</title>
//       </Head>
//
//       <header className={styles.header}>
//         <div className={styles.headerWrapper}>
//           <a className={styles.logoLink} href="/">
//             <div className={styles.logoWrapper}>
//               <Image
//                 src="/vercel.svg"
//                 alt="Vercel Logo"
//                 width={260}
//                 height={160}
//               />
//             </div>
//           </a>
//         </div>
//       </header>

//       <form className={styles.main} onSubmit={handleLoginWithEmail}>
//         <div className={styles.mainWrapper}>
//           <h1 className={styles.signinHeader}>Sign In</h1>

//           <input
//             type="text"
//             placeholder="Email address"
//             className={styles.emailInput}
//             onChange={handleOnChangeEmail}
//             required
//           />

//           <p className={styles.userMsg}>{userMsg}</p>
//           <button className={styles.loginBtn}>{ isLoading ? "Loading...":"Sign In"}</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
