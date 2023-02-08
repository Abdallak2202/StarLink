/* const windowsHosting = () => {
  return (
    <div>windows-hosting</div>
  )
}

export default windowsHosting; */

import CardPagos from "../../../components/PasarelaPago/PasarelaP";
import  SearchBar  from "components/searchBar/searchBar";


export const Pagos = () => {
  return (
    <div>
      <SearchBar />
      <CardPagos />
    </div>
    
  )
}

export default Pagos;

