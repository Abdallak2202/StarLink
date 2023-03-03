import React from 'react'
import s from "components/revComments/reviews.module.css";
import { FaStar } from 'react-icons/fa';
const CommentsCards = ({username, service, stars,comment }) => {

  const yellowStars = Array.from({ length: stars }, (_, i) => (
    <FaStar key={i} className="text-yellow-500 text-2xl" />
  ));
  const emptyStars = Array.from({ length: 5 - stars }, (_, i) => (
    <FaStar key={i + stars} className="text-gray-400 text-2xl" />
  ));
  const allStars = [...yellowStars, ...emptyStars];
  return (
    <div >
<img src='https://coobis.com/wp-content/uploads/2018/09/comentarios-en-instagram-destacada.jpg' alt='icono comentario'width={100} height={100}/>
      <div>
        <section class="text-neutral-700 dark:text-neutral-300">
          <div class="mx-auto text-center md:max-w-xl lg:max-w-4xl">
            {/* <h3 class="mb-6 text-3xl font-bold">Testimonials</h3> */}
          </div>

          <div class="flex flex-wrap gap-10 text-center">
            <div class="flex w-full md:w-1/1">
              <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30 w-full">
                <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
                {/* <div
                  class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
                </div> */}
                <div class="p-6">
                  <h4 class="mb-4 text-4xl font-semibold">{username}</h4>
                  <hr />
                  <p class="mt-4 text-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="inline-block h-8 w-8 pr-2"
                      viewBox="0 0 24 24">
                      <path
                        d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    <span className="text-3xl">{comment}</span>
                    
                  </p>
                
                  <div className="flex flex-row items-center justify-center">
      <h2 className="text-5xl">{service}</h2>
      <h3 className=" flex justify-center text-5xl mx-6">{allStars}</h3>
    </div>


        </div>
      </div>
    </div>
  </div>
</section>
</div>
    </div>
  )
}

export default CommentsCards