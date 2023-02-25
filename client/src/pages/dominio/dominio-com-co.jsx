

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
          <img src="https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?w=996&t=st=1677273993~exp=1677274593~hmac=7f22a767a2e0b403ad9417902d45a4274fc2569f80379816573ae7d87530780a" alt="fondo blur" className=" absolute  w-full" />
          </div>
          <div>
      {cards.map((cards) => (

        <Card key={cards.id} TLD={cards.TLD} price = {cards.price} description={cards.description} id={cards.id} />
        
        
        ))}
</div>

        <Card key={cards.id} TLD={cards.TLD} price = {cards.price} description={cards.description} id={cards.id} slug={cards.slug}/>


      ))}



    </div>

  );
};

export default dominioComCo;