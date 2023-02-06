import Card from "components/card-dominio-cpm-co/cardDominios";
import  SearchBar  from "components/searchBar/searchBar";


export const dominioComCo = ({ card }) => {
  return (
    <div>
      <SearchBar />
      <Card card={card}/>
    

    </div>
    
  )
}

export default dominioComCo;
