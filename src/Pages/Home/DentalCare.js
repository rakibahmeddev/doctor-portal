import React from "react";
import treatment from "../../assets/images/treatment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const DentalCare = () => {
  return (
    <div className="hero min-h-min bg-white py-32 sm:px-5 md:px-10 lg:px-32">
      <div className="hero-content flex-col lg:flex-row justify-center sm:gap-5 md:gap-8 lg:gap-16">
        <div className="">
          <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="w-full mt-8">
          <h1 className="text-5xl font-bold">
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
