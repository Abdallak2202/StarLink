import React from 'react'
import CardHosting from '../../../../components/card-hosting/CardHosting'


export async function getStaticProps() {
  const req = await fetch(" https://star-link-back-end-production.up.railway.app/housings");
  const cards = await req.json();
  return { props: { cards } };
}




export const webHosting = ({cards}) => {
  let filtrado = cards.filter(e => e.id < 4);
  return (
    <div>
    {/* <SearchBar /> */}

    {filtrado.map((cards) => (
      <CardHosting key={cards.id}  price = {cards.price} description={cards.description} name = {cards.name} floorSpace = {cards.floorSpace} 
      raks = {cards.raks} consumption = {cards.consumption} id = {cards.id} slug = {cards.slug} />


    ))}


  </div>
 
    

    
  )
}

export default webHosting;
