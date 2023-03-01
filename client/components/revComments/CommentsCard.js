import React from "react";

export default function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews:</h1>
      {reviews.map((review) => (
        <div key={review.id}>
          <h2>User: {review.username}</h2>
          <p>Service: {review.service}</p>
          <p>Stars: {review.stars}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://your-api-endpoint.com/reviews");
  const reviews = await res.json();

  return {
    props: {
      reviews,
    },
  };
}