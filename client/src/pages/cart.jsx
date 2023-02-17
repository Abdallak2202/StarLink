import React, { Fragment, useState, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
// import { Store } from "./Store";

const products = [
  {
    id: 1,
    name: "Basico",
    category: "simple",
    imageSrc: "/images/cloudServer.jpg",
    imageAlt: 'fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    price: 700,
    processing: '1 vc',
    RAM: '1 GB',
    SSD:'1 GB',
    transfer:'1 TB',
    description: "sin atencion permanente",
  },
  {
    id: 2,
    name: "Intermedio",
   category: "ultra",
   imageSrc: "/images/cloudServer.jpg",
   imageAlt: 'fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    price: 2200,
    processing: '2 vc',
    RAM: '4 GB',
    SSD:'30 GB',
    transfer: '2 TB',
    description: "atencion per call",
  },
  {
    id: 3,
    name: "Plus",
    category: "vip",
    imageSrc: "/images/cloudServer.jpg",
    imageAlt: 'fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    price: 5200,
    processing: '8 vc',
    RAM: '8 GB',
    SSD:'50 GB',
    transfer: '5 TB',
    description: "atencion 24x7",
  },
  
  // More products...
]

export default function Cart() {

  // const {state, dispatch} = useContext(Store)
  // const {cart} = state
  // const [cartItemsCount, setCartItemsCount] = useState(0)

  // useEffect(()=> {
  //   setCartItemsCount(cart.cartItems.reduce((a, c)=> a + c.quantity, 0 ))

  // }, [cart.cartItems])


  const [open, setOpen] = useState(true)

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
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <div className=''>
                                    <p className="mt-0.5 text-xs text-gray-500">• {product.processing}</p>
                                    <p className="mt-0.5 text-xs text-gray-500">• {product.RAM}</p>
                                    <p className="mt-0.5 text-xs text-gray-500">• {product.SSD}</p>
                                    <p className="mt-0.5 text-xs text-gray-500">• {product.transfer}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm mt-1">
                                  <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$8100.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <Link href='/PasarelaPagos'>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Pay
                        </a>
                      </div>
                      </Link>

                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
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






// export default Cart;