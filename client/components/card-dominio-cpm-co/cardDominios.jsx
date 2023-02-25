import s from "src/styles/cardDominio.module.css"
import React from "react";
import { motion } from "framer-motion"
import Link from 'next/link'


    

const config = {
      type: 'spring',
      damping: 10,
      stiffness: 80
    };
    const Card = ({ TLD, price, description, id }) => {
      return (
        <>
            <div className={s.container}>
            <div>
        <motion.div
            transition={config}
                initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
              exit={{ x: 0, opacity: 0 }}>
                
          <div className= {s.flipCard} >
                <div className={s.flipCardInner}>
              <div className= {s.flipCardFront}>
              
              <h1 className="mb-4 text-9xl font-medium font-sans md:font-serif bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-cyan-700 to-blue-600 pb-3 ">{TLD}</h1>
            </div>
          
              <div class="absolute inset-x-0 bottom-0 max-w-sm mx-auto my-0 ">

              <div class="w-30 md:w-100 bg-white mt-10 shadow-lg shadow-slate-600 rounded-lg overflow-hidden">
          <div class="py-2 text-center font-bold uppercase tracking-wide text-neutral-500 text-xl sha">Por solo</div>

            <div class="flex items-center justify-between h-14 py-2 px-3 bg-indigo-900">
            <span class="text-white  font-bold text-2xl ">$ {price}</span>
            <span class="text-xl text-white px-2 py-1 font-semibold ">/month</span>

                        </div>
            </div>
            </div>


            <div className={s.flipCardBack}>
            <h1 className="mb-6 text-4xl  text-gray-600">Utilidades del dominio<p>{TLD}</p></h1>
            <p className=" mb-6 text-2xl  text-gray-500">{description}</p>
          <Link href={`/service/${id}`} >
                             
                             <button className="bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-3 px-10 mr-1" id="monthly">
                             View Product
                                 </button>
                                   </Link>  
          </div>
          </div>
            </div>
            </motion.div>
            </div>

            </div>
            </>
      );
    };

export default Card;





// export default function Card (){
//   return (
//  <div className={s.container}>
//     <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//       <h1 className= {s.h1Dominio}>.Com</h1>
//       <h2 className={s.h2Dominio}> Por solo</h2>
//      <h3 className={s.h3}> $1790</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>Utilidades del dominio .Com</h1>
//         <p className={s.p}>Es uno de los más utilizados a nivel mundial
//         Se le considera un dominio de nivel superior
//         Es muy usado en el ambito comercial</p>
//       </div>
//       </div>
      
// </div>


// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//         <h1 className= {s.h1Dominioo}>.Com + .Online&.Store</h1> 
//           <h2 className= {s.h2Dominio}> Por solo</h2>
//           <h3 className= {s.h3}> $1.790</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>¿Por qué 3 dominios?</h1>
//         <p className={s.p}>Con la aparición de dominios tan creativos, las marcas comenzaron a registrarlos 
//         también para proteger su marca y evitar que terceros puedan hacer uso de ellos.</p>
//       </div>
//       </div>
   
// </div>
// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominiooo}> .Com.Ar</h1>
//           <h2 className= {s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $860</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>Registrate desde cualquier lugar</h1>
//         <p className={s.p}>Los clientes podrán identificar claramente la localización de tu negocio</p>
//       </div>
//       </div>
      
// </div>
// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominiooo}> .Site</h1>
//           <h2 className={s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $1.490</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>Promueve tu .site con claridad</h1>
//         <p className={s.p}>Funciona como una aplicación para marketing y promoción y ayuda a su
//                 marca a diferenciarse en un mar saturado de sitios web en línea.</p>
//       </div>
//       </div>
      
// </div>

// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominiooo}> .Online</h1>
//           <h2 className={s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $1.890</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>El dominio más exitoso de la nueva Internet</h1>
//         <p className={s.p}>La palabra online es fácilmente entendida en todo el mundo 
//             y se adapta de forma perfecta a todo tipo de emprendimientos y negocios.</p>
//       </div>
//       </div>
      
// </div>

// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominioooo}> .Website</h1>
//           <h2 className={s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $1.490</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>Un .website con todas las letras</h1>
//         <p className={s.p}>Utiliza este nuevo TLD (extensión de dominio de primer nivel)
//             y atrapa la atención de potenciales clientes a nivel personal y profesional.</p>
//       </div>
//       </div>
      
// </div>

// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominiooo}> .Store</h1>
//           <h2 className={s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $2.790</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>El preferido a la hora de vender</h1>
//         <p className={s.p}>es otro de los nuevos dominios de mayor éxito en la actualidad.
//             para crear un ecommerce o proteger la marca del que ya tienes.</p>
//       </div>
//       </div>
      
// </div>

// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominio}> .Uno</h1>
//           <h2 className={s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $1090</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>El dominio número .uno para tu web.</h1>
//         <p className={s.p}> Te brindará una dirección de Internet corta, fuerte y muy fácil de recordar. 
//             Ideal para destacar nuevos proyectos en la web.
//             Tus visitas nunca olvidarán tu nombre en Internet.</p>
//       </div>
//       </div>
      
// </div>

// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominioooo}> .Org</h1>
//           <h2 className={s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $3.890</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>Promueve tu causa y genera conciencia</h1>
//         <p className={s.p}>Vincula tu organización de forma inmediata con la confianza e integridad
//              de las organizaciones dedicadas al servicio del interés público.
//              </p>
//       </div>
//       </div>
      
// </div>
// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominio}> .Tech</h1>
//           <h2 className={s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $2.790</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>Conviértete en un líder .Tech</h1>
//         <p className={s.p}>Es breve, profesional y fácilmente recordable. 
//             ¡Es perfecto para atraer
//             interesados en adquirir productos tecnológicos 
//             y conocer las últimas novedades geeks!</p>
//       </div>
//       </div>
      
// </div>

// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominio}> .Fun</h1>
//           <h2 className={s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $1.090</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>¿a qué esperas para registrar tu dominio .FUN?</h1>
//         <p className={s.p}>Esta extensión es perfecta para la creación de sitios web sobre series, películas, videojuegos, etc.</p>
//       </div>
//       </div>
      
      
// </div>

// <div className= {s.flipCard} >
//       <div className={s.flipCardInner}>
//       <div className= {s.flipCardFront}>

//       <ul>
//           <h1 className={s.h1Dominio}> .Casa</h1>
//           <h2 className={s.h2Dominio}> Por solo</h2>
//           <h3 className={s.h3}> $2.790</h3>       
//       </ul>
//       </div>
//       <div className={s.flipCardBack}>
//         <h1 className={s.h1}>Quedate en .CASA</h1>
//         <p className={s.p}>Es una extensión ideal para poner nuestra casa a la venta o crear una página web para una agencia inmobiliaria.
//              Registra tu dominio .CASA hoy mismo!</p>
//       </div>
//       </div>
      
// </div>

// </div>


//   )
// }