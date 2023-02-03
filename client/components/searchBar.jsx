import s from "src/styles/searchBar.module.css";
import Image from "next/image";

export default function searchBar  ()  {
  return (
    <div className= {s.containerSearch}>
        <div className={s.inputSearch}>
            <div className={s.inputResults}>
        <input className={s.placeholder} placeholder="Ingrese su busqueda" type={'text'} />
       <div className={s.results}>
        0 results found
       </div>
        </div>
        <div className={s.icon}>
        <Image 
        src={'/lupa.png'}
        width={40}
        height={40}
        />
       
         </div>
        </div>
  </div>
  )
}

