import Card from "components/card-dominio-cpm-co/cardDominios";
import  SearchBar  from "components/searchBar/searchBar";



export async function getStaticProps() {
  const req = await fetch("https://star-link-back-end-production.up.railway.app/domains");
  const cards = await req.json();

  return { props: { cards } };


}



export const dominioComCo = ({ cards, props  }) => {
  return (
    <div>
      <SearchBar />
      {cards.map((card) => (
        <Card key={card.id} TLD={card.TLD} price = {card.price} description={card.description} />

        
      ))}

   
    </div>
    
  )
}

export default dominioComCo;


