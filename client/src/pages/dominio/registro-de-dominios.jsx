import axios from 'axios';
import { useState, useEffect } from 'react';
import SearchBar from 'components/searchBar/searchBar';


const RegistroDeDominios = () => {
  // const [data, setData] = useState([]);
  // const [term, setTerm] = useState('');
  const [nomdominio, setNonDominio] = useState([]);
  
  
    // useEffect(()=> {
    //   const dominioLS = JSON.parse(localStorage.getItem("nombre"))
    //   dominioLS?.length === 0 ? '':
    //   setNonDominio(dominioLS);
    //   console.log(dominioLS);
    //     }, []);
  
    const setTargetName = (searchData)=>{
      console.log({searchData});
    setNonDominio(searchData);
      // setNonDominio(searchData)
    }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://star-link-back-end-production.up.railway.app/registered-domains',
  //     );

  //     setData(result.data);
  //   };

  //   fetchData();
  // }, []);

  // const handleChange = (event) => {
  //   setTerm(event.target.value);
  // };


  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  // const filteredData = data.filter(item => {
  //   if (typeof item.url === "string" && typeof term === "string") {
  //     return item.url.toLowerCase().includes(term.toLowerCase());
  //   }
  //   return false;
  // });

  //console.log(filteredData);


  return (
    <div className=' bg-gradient-to-t bg-slate-100 from-rose-50'>
      {/* <input 
      type="text" 

      value={term} onChange={handleChange} /> */}
      <SearchBar  onTargetName={(data)=>setTargetName(data)}/>
      
      <div class="flex flex-col p-2 py-6 m-h-screen">
      <div className="flex flex-col gap-4 lg:p-4 p-2  rounde-lg m-2">
      





        <div className=" text-5xl lg:p-3 p-1 font-black text-gray-500 text-center">Selecciona Tu Dominio</div>


      
      <ul className=' space-y-6'>
       
       {nomdominio.length===0? <div className='text-slate-400 text-6xl	 font-semibold	'>Disponible!!!</div>: nomdominio.map(item => (

        <div className="flex items-center justify-between w-full p-4 lg:rounded-full md:rounded-full hover:bg-gray-50 cursor-pointer border-2 rounded-lg">

                   
        <div className="lg:flex md:flex items-center">

        <div className="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3"></div>

        <div className="flex flex-col">
          
          <li className="relative inline-flex items-center w-full px-5 py-3 text-3xl font-medium border-b border-gray-400 rounded-t-lg  hover:text-blue-600 "
                    key={item.id}>{item.url}
                    </li>

</div>
</div>
<div className=' pt-3 '>
<button type="button" className=" relative mb:absolute  bottom-1 mr-3 p-0.8 mb-2  overflow-hidden text-2xl font-medium text-gray-500 border-2 rounded-3xl group focus:ring-2 hover:bg-violet-300 focus:ring-violet-400 shadow-black shadow-sm  ">
                   <span class=" relative px-5 py-2.5 transition-all ease-in duration-75dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  No disponible
  </span>
</button>
</div>
                
</div>

))}

{/* <div className=" text-5xl lg:p-3 p-1 font-black text-gray-500 text-center">Tu nombre seleccionado esta disponible en todos los dominios, continua y selecciona el de tu preferencia</div> */}
 
      </ul>
      </div>
    </div>
    </div>
  );
};


export default RegistroDeDominios;