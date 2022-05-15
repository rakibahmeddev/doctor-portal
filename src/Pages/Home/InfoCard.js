import React from "react";

const InfoCard = ({ bgClass, img, cardTitle, cardBody }) => {
  return (
    <div
      class={`card lg:card-side text-white shadow-xl  mx-3 px-5 py-5 ${bgClass}`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body text-center">
        <h2 class="card-title mx-auto">{cardTitle}</h2>
        <p>{cardBody}</p>
      </div>
    </div>
  );
};

export default InfoCard;
