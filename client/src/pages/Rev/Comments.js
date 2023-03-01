import React from 'react'
import CommentsForm from 'components/revComments/CommentsForm'
import CommentsCard from 'components/revComments/CommentsCard'

const Comments = ({ reviews }) => {
    let filtrado= reviews.filter(e => e.id < 4);

  return (
    <div>
<div>



    

<h1>Reviews:</h1>
      {reviews.map((review) => (

<CommentsCard key={review.id}  username = {review.user?.username || "Anonymous"} service={review.service} 
     stars = {review.stars} comment = {review.comment}  />

        // <div key={review.id}>
        //   <h2>User: {review.user?.username || "Anonymous"}</h2>
        //   <p>Service: {review.service}</p>
        //   <p>Stars: </p>
        //   <p>Comment: {review.comment}</p>
        // </div>
      ))}



</div>


<div>
<CommentsForm/>
</div>

    </div>
  )
}



export async function getStaticProps() {
    const res = await fetch("https://star-link-back-end-production.up.railway.app/reviews");
    const reviews = await res.json();
   return {
      props: {reviews},};
  }

export default Comments