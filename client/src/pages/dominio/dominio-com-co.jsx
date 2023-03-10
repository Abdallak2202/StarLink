import Card from "components/card-dominio-cpm-co/cardDominios";
import  SearchBar  from "components/searchBar/searchBar";
import React from "react";




export async function getStaticProps() {
 
 
  const req = await fetch("https://star-link-back-end-production.up.railway.app/domains");
  const cards = await req.json();
  return { props: { cards } };
}



export const dominioComCo = ({ cards, props }) => {
  return (
    <div  >
      <SearchBar />
     
      <div className="bg-no-repeat bg-cover p-0 " >

      <img src='/images/fondoBlur.jpg' alt='fondo blur' className=" absolute  w-full"/>
        
          </div>
          <div>
      {cards.map((cards) => (

<Card key={cards.id} TLD={cards.TLD} price = {cards.price} description={cards.description} id={cards.id} slug={cards.slug}/>
        
        
        ))}
</div>

        


  



    </div>

  );
};

export default dominioComCo;