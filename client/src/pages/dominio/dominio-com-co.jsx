

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
    <div>
      <SearchBar />

      {cards.map((cards) => (
        <Card key={cards.id} TLD={cards.TLD} price = {cards.price} description={cards.description} id={cards.id} />


      ))}


    </div>

  );
};

export default dominioComCo;