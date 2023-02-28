import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { getUserFromLocalCookie } from 'lib/auth'
import axios from 'axios'

const Cart = ({carrito, eliminarProducto}) => {
  // const [productos, setProductos] = useState([]);
  const [open, setOpen] = useState(true);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(()=> {
const calculoTotal = carrito.reduce(( total, producto) => total + producto.price, 0);

setTotal(calculoTotal);
  }, [carrito]);
  
  
  
 
  useEffect(() => {
    async function setPageState() {
        try {
          const user = await getUserFromLocalCookie();
          console.log({ user });
         if(!user &&!session) router.push("/login");
          //set coffee stores
        } catch (error) {
          //set error
          console.log("Error", { error });
        }
      }
    
    setPageState();
//  setfirst(user)
//     if( !first){
//      router.push("/login")
//     }
 
   }, [])

//   useEffect(() => {
//     setProductos(carrito)
// }, [])


  //const {products, cart } = state

    // const addToCart = (id) => {
    //   console.log(id)
    // };

    // const delFromCart = () => {};

    // const clearCart = () => {};
    
//-------------------------funcion para enviar objeto de local store y cookies-----

async function addToCart() {
     const cartData = JSON.parse(localStorage.getItem('carrito'));
    const cookies = Object.fromEntries(
      document.cookie.split("; ").map(c => {
        const [key, ...v] = c.split("=");
        return [key, decodeURIComponent(v.join("="))];
      })
    );
    const requestData = {
      cookies,
      cartData,
    };
    console.log(requestData);
  
    try {
      const response = await fetch('https://star-link-back-end-production.up.railway.app/carts/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
                         
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul  role="list" className="-my-6 divide-y divide-gray-200">
                           
{carrito?.length === 0 ? "Carrito Vacio": (
 
                          carrito?.map((producto) => (
                              <li  key={producto.id} className="flex py-6">
                                <div   className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    // src={el.imageSrc}
                                    // alt={el.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a >{producto.name}</a>
                                      </h3>
                                      <p className="ml-4">{producto.price} $</p>
                                    </div>
                                    <div className=''>
                                    {/* <p className="mt-0.5 text-xs text-gray-500">• {producto.slug} </p> */}
                                    {/* <p className="mt-0.5 text-xs text-gray-500">• {producto.description} </p> */}
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm mt-1">
                                  <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={()=> eliminarProducto(producto.slug)}>
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              
                              )))} 
                              
                              
                              </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        {total > 0 ? (
                          <>
                          
                          <p>Total a pagar:${total}</p>
                          <p></p>
                          </>
                        ):<>No hay productos</>}
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <Link href='/pagos/pasarela'>
                      <div className="mt-6">
                      <button
                        type="button"
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          onClick={()=> addToCart()}>
                          Buy
                        </button>
                      </div>
                      </Link>

                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <Link href='/'>
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    
  )
}

export default Cart;