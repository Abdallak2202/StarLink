import React from 'react';
import CommentsForm from 'components/revComments/CommentsForm';
import CommentsCard from 'components/revComments/CommentsCard';

const Comments = ({ reviews }) => {
  const filtrado = reviews.filter(e => e.id < 4);

  return (
    <div className="flex flex-wrap pt-40">
      <div className="w-full mb-2">
        <h1>Reviews:</h1>
        <div className="flex flex-wrap -mx-2">
          {reviews.map((review) => (
            <div key={review.id} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
              <CommentsCard
                username={review.user?.username || 'Anonymous'}
                service={review.service}
                stars={review.stars}
                comment={review.comment}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mb-4">
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
