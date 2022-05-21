import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body mt-2">
        <p>{review.review}</p>

        <div className="flex items-center mt-3">
          <div className="avatar ">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4 ">
              <img src={review.img} />
            </div>
          </div>
          <div>
            <h2 className="text-xl text-accent font-medium">{review.name}</h2>
            <p className="text-sm text-black">{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
