import Link from 'next/link';
import s from './cloudHosting.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from "framer-motion"

export default function CardCloud () {
    const config = {
        type: 'spring',
        damping: 10,
        stiffness: 80
      };
    
  return (
    <div>
        
        <Carousel>
      <div >
        <img src="/images/cloudD.png" alt="carousel-1" />
        <p className="legend">Lo tenés al alcance de tu mano</p>
      </div>
      <div>
        <img src="/images/seguro.png" alt="carousel-2" />
        <p className="legend">La mayor seguridad y confiabilidad nos avalan</p>
      </div>
      <div>
        <img src="/images/alojamiento-rapido-escalable-confiable.png" alt="carousel-3" />
        <p className="legend">Todo esto y mucho mas.. Encontras en nuestra empresa</p>
      </div>
    </Carousel>


  {/* Cards */}
  <motion.div
          transition={config}
              initial={{ scale: 0.3, opacity: 0 }}
           animate={{ scale: 1, opacity: 1, transitionDuration: '0.2s' }}
            exit={{ x: 0, opacity: 0 }}>
  
  <div class=" pt-30 relative overflow-x-auto shadow-md sm:rounded-lg bg-blue-200">
    <div class="flex items-center justify-between pb-3 bg-gray-200" >

  <div class="max-w-xl p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src='/images/rapido.png/' alt="rapido" />
    </a>
    <div class="p-4 ">
        <a href="#">
        <h1 class="mb-2 text-4xl text-center font-bold tracking-tight text-blue-800 dark:text-white">RÁPIDO</h1>

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Performance que te sorprenderá</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
        ¿Todavía no tenés tu página web?
        No te preocupes, nosotros la hacemos por vos.
        Tambien contamos con el mejor asesoramiento y servicio para ayudarte a conevctarte
        con tus clientes de una manera rapida y sencilla.


</p>
        <li class={s.liDominio}>Plataforma OpenStack</li>
          <li class={s.liDominio}>Almacenamiento 100% SSD</li>
          <li class={s.liDominio}>CPUs Intel de 3.2 a 5.3 GHZ</li>
          <li class={s.liDominio}>Redes Gigabit y fibra óptica</li>
    </div>
</div>

{/* // ---------------------------------------------------------------- */}

<div class="max-w-xl p-10  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg w-full h-full" src='/images/escalable.png/' alt="escalable" />
    </a>
    <div class="p-16">
        <a href="#">
        <h1 class="mb-2 text-4xl text-center font-bold tracking-tight text-blue-800 dark:text-white">ESCALABLE</h1>

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Crecimiento sin limitaciones</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
        Nuestro equipo de profesionales siempre a tu lado ofreciendo un gran equipo de expertos para ayudarte en 
        todo lo que necesites para optimizar al maximo tu aplicación


</p>
        <li class={s.liDominio}>Escala incrementando o reduciendo los recursos de tus servidores </li>
          <li class={s.liDominio}>En la nube (RAM, vCPUs, storage*)</li>
          <li class={s.liDominio}> Con algunos clicks y en pocos minutos.</li>
   
    </div>
</div>

{/* // ---------------------------------------------------------------- */}

<div class="max-w-xl p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src='/images/simple.png/' alt="simple" />
    </a>
    <div class="p-6 px-6 ">
        <a href="#">
        <h1 class="mb-2 text-4xl text-center font-bold tracking-tight text-blue-800 dark:text-white">SIMPLE</h1>

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Minutos en lugar de horas</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
         Siempre listos y en tu idioma, para ayudarte en lo que necesites, cualquiera sea el
servicio que hayas contratado. Contáctate por chat, teléfono, WhatsApp o
inscríbete en nuestros talleres online.


</p>
        <li class={s.liDominio}>Ahorra tiempo  </li>
          <li class={s.liDominio}>Gestioná todos los aspectos de tus Cloud Servers</li>
          <li class={s.liDominio}> Podes hacerlo desde un panel super simple e intuitivo</li>
   
    </div>
</div>

{/* // ---------------------------------------------------------------- */}

<div class="max-w-xl p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src='/images/confiable.png/' alt="confiable" />
    </a>
    <div class="p-11">
        <a href="#">
        <h1 class="mb-2 text-4xl text-center font-bold tracking-tight text-blue-800 dark:text-white">CONFIABLE</h1>

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">La tranquilidad que necesitas</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">
        Nuestro equipo de profesionales está a tu disposición 24x7x365.


</p>
        <li class={s.liDominio}>Toda nuestra arquitectura de Cloud Servers fue diseñada con la Alta Disponibilidad (HA) como premisa </li>
          <li class={s.liDominio}>Por eso tus servicios son replicados en 3 nodos diferentes y en tiempo real</li>
          <li class={s.liDominio}> La seguridad en tus manos</li>
   
    </div>
</div>

  

</div>

</div>
</motion.div>
</div>




  )   
}
