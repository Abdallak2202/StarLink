import Link from 'next/link';
import s from './cloudHosting.module.css';

export default function CardCloud () {
  return (
    <div>
        <div>
        <div className={s.body}>
            
<div class={s.container}>
  <div class={s.carousel}>
    <div class={s.carouselFace}><span></span></div>
    <div class={s.carouselFace}><span></span></div>
    <div class={s.carouselFace}><span></span></div>
    <div class={s.carouselFace}><span></span></div>
    <div class={s.carouselFace}><span></span></div>
    <div class={s.carouselFace}><span></span></div>
    <div class={s.carouselFace}><span></span></div>
    <div class={s.carouselFace}><span></span></div>
    <div class={s.carouselFace}><span></span></div>
  </div>
</div>
</div>

  {/* Cards */}
  <div class="flex flex-col p-96 m-10  bg-slate-100" >

  <div class="flex justify-center py-9 max-w-9xl mx-auto ">

<div
    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-7xl md:flex-row">
    <img
      class="w-150 h-150  object-cover rounded-t-lg  md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
      src='/images/rapido.png/' alt="rapido"  />
      <div class=" justify-start p-6">
      <h5
        class="mb-2 text-4xl font-bold text-purple-800 dark:text-neutral-50">
        RÁPIDO
      </h5>
      <p class="mb-4 text-3xl text-neutral-600 dark:text-neutral-200">
        ¿Todavía no tenés tu página web?
        No te preocupes, nosotros la hacemos por vos.
        Tambien contamos con el mejor asesoramiento y servicio para ayudarte a conevctarte
        con tus clientes de una manera rapida y sencilla.
        </p>
      <p class="text-2xl font-bold text-blue-500 dark:text-neutral-300">
        Performance que te sorprenderá
      </p>
      <li class={s.liDominio}>Plataforma OpenStack</li>
        <li class={s.liDominio}>Almacenamiento 100% SSD</li>
        <li class={s.liDominio}>CPUs Intel de 3.2 a 5.3 GHZ</li>
        <li class={s.liDominio}>Redes Gigabit y fibra óptica</li>
   
    </div>
</div>
</div>

{/* // ---------------------------------------------------------------- */}

<div class="flex justify-center py-9 max-w-9xl mx-auto">

<div
    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-7xl md:flex-row">
    <img
      class="h-96 w-full object-cover rounded-t-lg  md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
     src='/images/escalable.png/' alt="escalable"   />
    <div class=" justify-start p-6">
      <h5
        class="mb-2 text-4xl font-bold text-purple-800 dark:text-neutral-50">
        ESCALABLE
      </h5>
      <p class="mb-4 text-3xl text-neutral-600 dark:text-neutral-200">
        Nuestro equipo de profesionales siempre a tu lado ofreciendo un gran equipo de expertos para ayudarte en 
        todo lo que necesites para optimizar al maximo tu aplicación
      </p>
      <p class="text-2xl font-bold text-blue-500 dark:text-neutral-300">
        Crecimiento sin limitaciones
      </p>
        <li class={s.liDominio}>Escala incrementando o reduciendo los recursos de tus servidores </li>
          <li class={s.liDominio}>En la nube (RAM, vCPUs, storage*)</li>
          <li class={s.liDominio}> Con algunos clicks y en pocos minutos.</li>
   
    </div>
</div>
</div>

{/* // ---------------------------------------------------------------- */}
<div class="flex justify-center py-9 max-w-9xl mx-auto">

<div
    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-7xl md:flex-row">
    <img
      class="w-150 h-150  object-cover rounded-t-lg  md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
      src='/images/simple.png/' alt="simple"   />
    <div class=" justify-start p-6">
      <h5
        class="mb-2 text-4xl font-bold text-purple-800 dark:text-neutral-50">
        SIMPLE
      </h5>
      <p class="mb-4 text-3xl text-neutral-600 dark:text-neutral-200">
        Siempre listos y en tu idioma, para ayudarte en lo que necesites, cualquiera sea el
        servicio que hayas contratado. Contáctate por chat, teléfono, WhatsApp o
        inscríbete en nuestros talleres online.
      </p>
      <p class="text-2xl font-bold text-blue-500 dark:text-neutral-300">
        Minutos en lugar de horas
      </p>
        <li class={s.liDominio}>Ahorra tiempo  </li>
          <li class={s.liDominio}>Gestioná todos los aspectos de tus Cloud Servers</li>
          <li class={s.liDominio}> Podes hacerlo desde un panel super simple e intuitivo</li>
   
    </div>
</div>
</div>

{/* // ---------------------------------------------------------------- */}
<div class="flex justify-center py-9 max-w-9xl mx-auto">

<div
    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-7xl md:flex-row">
    <img
      class="w-150 h-150   object-cover rounded-t-lg  md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
      src='/images/confiable.png/' alt="confiable"   />
    <div class=" justify-start p-6">
      <h5
        class="mb-2 text-4xl font-bold text-purple-800 dark:text-neutral-50">
        CONFIABLE
      </h5>
      <p class="mb-4 text-3xl text-neutral-600 dark:text-neutral-200">
        Nuestro equipo de profesionales y expertos está a tu disposición 24x7x365, para 
        brindarte asesoramiento y aqsistencia en el momento que lo necesites.
      </p>
      <p class="text-2xl font-bold text-blue-500 dark:text-neutral-300">
        La tranquilidad que necesitas


</p>
        <li class={s.liDominio}>Toda nuestra arquitectura de Cloud Servers fue diseñada con la Alta Disponibilidad (HA) como premisa </li>
          <li class={s.liDominio}>Por eso tus servicios son replicados en 3 nodos diferentes y en tiempo real</li>
          <li class={s.liDominio}> La seguridad en tus manos</li>
   
    </div>
</div>

  

</div>
</div>

</div>
</div>


  )   
}
