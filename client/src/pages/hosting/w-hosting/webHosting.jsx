import React from 'react'
import CardHosting from '../../../../components/card-hosting/CardHosting'


export async function getStaticProps() {
  const req = await fetch(" https://star-link-back-end-production.up.railway.app/housings");
  const cards = await req.json();
  return { props: { cards } };
}




export const webHosting = ({cards}) => {
  return (
    <div>
    {/* <SearchBar /> */}

    {cards.map((cards) => (
      <CardHosting key={cards.id}  price = {cards.price} description={cards.description} name = {cards.name} floorSpace = {cards.floorSpace} 
      raks = {cards.raks} consumption = {cards.consumption}  />


    ))}


  </div>
 
    

    
  )
}

export default webHosting;
