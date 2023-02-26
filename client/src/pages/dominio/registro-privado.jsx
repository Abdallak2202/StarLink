import React, { useState, useEffect } from 'react'
import SearchBar from 'components/searchBar/searchBar';


export const registroPrivado = () => {

  const [nomdominio, setNonDominio] = useState([]);


  useEffect(()=> {
    const dominioLS = JSON.parse(localStorage.getItem("nombre"))
    dominioLS?.length === 0 ? '':
    setNonDominio(dominioLS);
      }, []);


  return (
    <div>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>





      <div>

<ul>
        {nomdominio.map(result => (
          <li key={result.id}>{result.url}</li>
        ))}
      </ul>





      </div>
  

    </div>
  )
}

export default registroPrivado;