import React from "react";

const InfoCard = ({ img }) => {
  return (
    <div class="card lg:card-side text-white shadow-xl bg-gradient-to-r from-secondary to-primary mx-3 px-5 py-5 text-center">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title mx-auto">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCard;
