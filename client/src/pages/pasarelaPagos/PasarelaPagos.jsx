import CardPagos from "components/PasarelaPago/PasarelaP";
import  SearchBar  from "components/searchBar/searchBar";


export const Pagos = ({ CardPagos }) => {
  return (
    <div>
      <SearchBar />
      <CardPagos card={CardPagos}/>
    </div>
    
  )
}

export default Pagos;
