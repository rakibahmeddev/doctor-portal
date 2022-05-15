import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
  return (
    <div class="bg-[url('/src/assets/images/bg.png')] hero min-h-screen bg-white px-12 banner-bg">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={chair} alt="banner" />
        </div>
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
