import Link from 'next/link';
import s from './cloudHosting.module.css';

export default function CardCloud () {
  return (
    <div>
        <div>
            <br/> <br/> <br/>
            <br/> <br/> <br/>
<link rel="preconnect" href="https://fonts.gstatic.com"/> 
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<body class="font-sans bg-gray-100">
<div class="min-h-screen flex justify-center ">
<div class="">
<div class="text-center font-semibold">
    <h2 class="text-4xl">
      <span class="text-success">Cloud Servers en America Latina</span>
    </h2>
    <br/>
    <h1 class="text-7xl">
        <span class="text-blue-700 tracking-wide">Alojamiento rápido, escalable y confiable </span>
    </h1>
    <br/>
    <h1 class="text-7xl">
        <span class="text-blue-700 tracking-wide">para tus aplicaciones</span>
    </h1>
    <br/>
    <br/>
    <Link  href='/hosting/planesCloudServer'>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white text-4xl py-2 px-4 border border-blue-500 hover:border-transparent rounded">Ver Planes</button>
</Link>

<br/> <br/> <br/>

<div class={s.container}>
    <div class= {s.flipCard} >
      <div class={s.flipCardInner}>
      <div class= {s.flipCardFront}>

      <ul>
      <h1 class= {s.h1Dominio}>Rápido </h1>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cudLXD-hOOsvI2qq7mL3ww_MqCAB19vvZA&usqp=CAU' width="100"/>      
      <h2 class={s.h2Dominio}> Performance que te sorprenderá</h2>
      </ul>
      </div>
      <div class={s.flipCardBack}>
          <li class={s.liDominio}>Plataforma OpenStack</li>
          <li class={s.liDominio}>Almacenamiento 100% SSD</li>
          <li class={s.liDominio}>CPUs Intel de 3.2 a 5.3 GHZ</li>
          <li class={s.liDominio}>Redes Gigabit y fibra óptica</li>
      
      </div>
      </div>
      
</div>


<div class= {s.flipCard} >
      <div class={s.flipCardInner}>
      <div class= {s.flipCardFront}>
      <ul>
        <h1 class= {s.h1Dominioo}>Escalable</h1> 
        <img src='https://img2.freepng.es/20180526/jtj/kisspng-scalability-computer-icons-computer-software-virtu-5b093e28a11c51.8861325415273323926599.jpg' width="100"/> 
          <h2 class= {s.h2Dominio}>Crecimiento sin limitaciones</h2>
      </ul>
      </div>
      <div class={s.flipCardBack}>
        <p class={s.p}>Escala incrementando o reduciendo los recursos de tus servidores en la nube (RAM, vCPUs, storage*) con algunos clicks y en pocos minutos.</p>
      </div>
      </div>
   
</div>


<div class= {s.flipCard} >
      <div class={s.flipCardInner}>
      <div class= {s.flipCardFront}>
      <ul>
          <h1 class={s.h1Dominiooo}>Simple</h1>
          <img src='https://e7.pngegg.com/pngimages/864/12/png-clipart-logo-circle-organization-point-brand-circle-blue-angle.png' width="60"/> 
          <br/>
          <h2 class= {s.h2Dominio}> Minutos en lugar de horas</h2>
      </ul>
      </div>
      <div class={s.flipCardBack}>
        <br/>
        <p class={s.p}>Ahorra tiempo gestionando todos los aspectos de tus Cloud Servers desde un panel super simple e intuitivo..</p>
      </div>
      </div>
      
</div>


<div class= {s.flipCard} >
      <div class={s.flipCardInner}>
      <div class= {s.flipCardFront}>
      <ul>
          <h1 class={s.h1Dominiooo}>Confiable</h1>
          <img src='https://w7.pngwing.com/pngs/153/247/png-transparent-computer-icons-reliability-text-heart-desktop-wallpaper.png' width="100"/> 
          <h2 class={s.h2Dominio}>La tranquilidad que necesitas</h2>      
      </ul>
      </div>
      <div class={s.flipCardBack}>
        <p class={s.p}>Toda nuestra arquitectura de Cloud Servers fue diseñada con la Alta Disponibilidad (HA) como premisa. Por eso tus servicios son replicados en 3 nodos diferentes y en tiempo real.</p>
      </div>
      </div>
      
</div>


</div>


</div>
</div>
</div>
</body>
</div>
</div>
  )   
}
