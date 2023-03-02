import CardServer from 'components/host-server/CardServer'
import s from 'components/host-server/CardServer.module.css'

export async function getStaticProps() {
  const req = await fetch(" https://star-link-back-end-production.up.railway.app/dedicated-servers");
  const cards = await req.json();
  return { props: { cards } };
}



const servidoresDedicados = ({cards}) => {
  
  return (
    

<div>

<div  >
 {cards.map((cards) => (
        <CardServer key={cards.id} brand={cards.brand} price = {cards.price} description={cards.description} processor = {cards.processor} Ram = {cards.Ram} SSD = {cards.SSD}  OS = {cards.OS} id={cards.id} slug={cards.slug}/>


      ))}

{/* <-----------texto 1-----------------> */}
<div className='w-full h-full'>
<div >

<svg aria-hidden="true" class="w-60 h-60 px-10 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>

<h1 class="mb-4 text-8xl font-extrabold text-center text-gray-900 dark:text-white md:text-2xl lg:text-8xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 from-sky-400">Administralo</span> o dejalo en manos de nuestros expertos.</h1>
</div>

<div>


{/* <-----------texto 2-----------------> */}

<h1 class=" mb-4 text-8xl font-extrabold text-center text-gray-900 dark:text-white md:text-2xl lg:text-8xl"></h1>
  <h1 class="mb-4 text-8xl font-extrabold text-center  dark:text-white md:text-2xl lg:text-8xl text-gray-700 italic border-4 border-indigo-200 border-y-indigo-500 bg-gradient-to-r from-blue-200 to-indigo-200">Nuestra solución administrada incluye un equipo de expertos que se encargará de cualquier cuestión técnica o pedidos de configuración que necesites realizar.</h1>
  <h1 class="  text-transparent bg-clip-text bg-gradient-to-r to-zinc-900 from-blue-600 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 mb-4 text-8xl font-extrabold text-center text-gray-900 dark:text-white md:text-2xl lg:text-8xl"> Elige la opción que se adapte a tu negocio.</h1>
    
      </div>
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>

{/* <-----------tabla-----------------> */}

      <div>
      <a href="#" class="  ml-12 mr-12 block     p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      

<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-4xl font-bold font-mono bg-blue-900 text-gray-100 px-6 py-4">
                
              </th>
              <th scope="col" class="text-4xl font-bold font-mono bg-blue-900 text-gray-100 px-6 py-4">
              Auto Administrado
              </th>
              <th scope="col" class="text-4xl font-bold font-mono bg-blue-900 text-gray-100 px-6 py-4">
              Administrado
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b">
              <td class="text-2xl  text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
               Sitema Operativo
              </td>
              <td class="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               centOS, Ubuntu, Debian, Windows Server
              </td>
              <td class="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Proactivos: Red, Host, Estado de Hardware y Servicios
              </td>
            </tr>
            <tr class="border-b bg-blue-400 border-blue-200">
              <td class="text-2xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
               Parchea y actualizaciones
              </td>
              <td class="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
              <svg class="w-16 h-16 mx-16 text-red-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </td>
              <td class="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Actualizaciones de seguridad del sistema y panel -
              Nuevas Funcionalidades
              </td>
            </tr>
            <tr class="border-b bg-purple-100 border-purple-200">
              <td class="text-2xl text-gray-900 bg-blue-300 font-bold px-6 py-4 whitespace-nowrap">
              Copias de seguridad
              </td>
              <td class="text-2xl text-gray-900 bg-blue-300 font-light px-6 py-4 whitespace-nowrap">
              A cargo del cliente
              </td>
              <td class="text-2xl text-gray-900 bg-blue-300 font-light px-6 py-4 whitespace-nowrap">
              Contenido relativo a hosting
              </td>
            </tr>
            <tr class="border-b bg-green-100  border-green-200">
              <td class="text-2xl text-gray-900 bg-blue-200 font-bold px-6 py-4 whitespace-nowrap">
              Acceso root
              </td>
              <td class="text-2xl text-gray-900 bg-blue-200 font-light px-6 py-4 whitespace-nowrap">
            
                <svg class="wx-16 h-16 mx-16 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
      
              </td>
              <td class="text-2xl text-gray-900 bg-blue-200 font-light px-6 py-4 whitespace-nowrap">
              <svg class="wx-16 h-16 mx-16 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

              </td>
            </tr>
            <tr class="border-b">
              <td class="text-2xl text-gray-900 bg-blue-100 font-bold px-6 py-4 whitespace-nowrap">
              Panel de control
              </td>
              <td class="text-2xl text-gray-900 bg-blue-100  font-light px-6 py-4 whitespace-nowrap">
              <svg class="w-16 h-16 mx-16 text-red-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

              </td>
              <td class="text-2xl text-gray-900 bg-blue-100  font-light px-6 py-4 whitespace-nowrap">
              <svg class="wx-16 h-16 mx-16 text-green-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>

              </td>
            </tr>
            <tr class="border-b">
              <td class="text-2xl text-gray-900 bg-blue-50 font-bold px-6 py-4 whitespace-nowrap">
                Warning
              </td>
              <td class="text-2xl text-gray-900  bg-blue-50 font-light px-6 py-4 whitespace-nowrap">
              Migraciones de web hosting 
              </td>
              <td class="text-2xl text-gray-900 bg-blue-50 font-light px-6 py-4 whitespace-nowrap">
              <svg class="w-16 h-16 mx-16 text-red-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

              </td>
            </tr>
            <tr class="border-b bg-blue-100 border-indigo-200">
              <td class="text-2xl text-gray-900 bg-white font-bold px-6 py-4 whitespace-nowrap">
              Costo adicional
              </td>
              <td class="text-2xl text-gray-900 bg-white font-light px-6 py-4 whitespace-nowrap">
              Instalacion de software bajo demanda
              </td>
              <td class="text-2xl text-gray-900 bg-white font-light px-6 py-4 whitespace-nowrap">
              Costo adicional
              </td>
            </tr>
            <tr class="border-b bg-gray-50 border-gray-200">
              {/* <td class="text-2xl text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
              Costo adicional
              </td> */}
              {/* <td class="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-2xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td> */}
            </tr>
            <tr class="border-b bg-gray-800 boder-gray-900">
              <td class="text-2xl text-white font-bold px-6 py-4 whitespace-nowrap">
                Dark
              </td>
              <td class="text-2xl text-white font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
              <td class="text-2xl text-white font-light px-6 py-4 whitespace-nowrap">
                Cell
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</a>
</div>



</div>
      
    </div>
  )
}

export default servidoresDedicados;
