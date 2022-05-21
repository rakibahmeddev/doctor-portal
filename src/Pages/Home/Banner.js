import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/images/bg.png')] hero min-h-screen bg-white px-12 banner-bg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img src={chair} alt="banner" />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            Your New Smile Starts <br /> Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
