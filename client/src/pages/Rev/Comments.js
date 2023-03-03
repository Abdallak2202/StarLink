import React, { useEffect, useState } from 'react';
import CommentsForm from 'components/revComments/CommentsForm';
import CommentsCard from 'components/revComments/CommentsCard';
import { useRouter } from 'next/router';

const Comments = ({ reviews }) => {
  const router = useRouter()
  // const filtrado = reviews.filter(e => e.id < 4);
  const [formActive, setFormActive] = useState(false);
const [reviewsData, setreviewsData] = useState(reviews)


useEffect(() => {
  // setFormActive(false);
 const  handleChangeData=async()=>{
try {
  const data= await fetch('https://star-link-back-end-production.up.railway.app/reviews');
  const reviews = await data.json();
  setreviewsData(reviews)
  // router.reload();
} catch (error) {
  console.log({error});
}
 }
 if (formActive) {
  handleChangeData();
}
}, [formActive]);
const  handleFormActivation = () => {
  setFormActive(true);
}
  return (
    <div className="pt-40">
     {/*  <h1 className="text-center mb-4">Reviews:</h1> */}
      <div class="md:flex justify-center  w-full">
        <div class="w-full  py-10 px-5 md:px-10">
          <div>
            <div class="flex -mx-3">
              <div class="w-1/2 px-3 mb-12 mx-auto">
                {reviewsData?.map((review) => (
                  <div key={review.id} className="w-full px-2 mb-4">
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
          </div>
      <div className="mt-8">
        <CommentsForm  onFormActivation={handleFormActivation}/>
      </div>
    </div>
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
