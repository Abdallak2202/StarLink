import React from 'react';
import CommentsForm from 'components/revComments/CommentsForm';
import CommentsCard from 'components/revComments/CommentsCard';

const Comments = ({ reviews }) => {
  const filtrado = reviews.filter(e => e.id < 4);

  return (
    <div className="pt-40">
     {/*  <h1 className="text-center mb-4">Reviews:</h1> */}
      <div className="flex flex-nowrap">
        {reviews.map((review) => (
          <div key={review.id} className="w-3/4 sm:w-1/3 md:w-1/4 lg:w-1/5 px-2 mb-4">
            <CommentsCard
              username={review.user?.username || 'Anonymous'}
              service={review.service}
              stars={review.stars}
              comment={review.comment}
            />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <CommentsForm />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://star-link-back-end-production.up.railway.app/reviews');
  const reviews = await res.json();
  return { props: { reviews } };
}

export default Comments;
