import Link from 'next/link';
import s from './cloudHosting.module.css';

export default function CardCloud () {
  return (
    <div>
        <div >
        <div class="carousel">
    <div class="carousel-inner">
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked"/>
        <div class="carousel-item">
            <img src="/images/cloudServerss.png"/>
        </div>
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden=""/>
        <div class="carousel-item">
            <img src="/images/AlojamientoREC.png"/>
        </div>
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden=""/>
        <div class="carousel-item">
            <img src="/images/apliaciones.png"/>
        </div>

       
    </div>
</div>


  {/* Cards */}
  <div class={s.container}>

  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src='/images/rapido.png/' alt="rapido" />
    </a>
    <div class="p-5">
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

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src='/images/escalable.png/' alt="escalable" />
    </a>
    <div class="p-5">
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

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src='/images/simple.png/' alt="simple" />
    </a>
    <div class="p-5">
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

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src='/images/confiable.png/' alt="confiable" />
    </a>
    <div class="p-5">
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
</div>



  )   
}
