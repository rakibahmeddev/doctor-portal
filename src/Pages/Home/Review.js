import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card w-full bg-base-100 shadow-xl">
      <div class="card-body mt-2">
        <p>{review.review}</p>

        <div class="flex items-center mt-3">
          <div class="avatar ">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4 ">
              <img src={review.img} />
            </div>
          </div>
          <div>
            <h2 class="text-xl text-accent font-medium">{review.name}</h2>
            <p className="text-sm text-black">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
