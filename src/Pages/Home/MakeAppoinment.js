import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppoinment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center text-white mb-20"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 sm:p-10 md:pr-20 lg:pr-40">
        <h3 className="text-2xl text-primary ">Appointment</h3>
        <h2 className="text-3xl font-bold">Make an Appointment Today!</h2>
        <p className="py-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div>
          <PrimaryButton>get started</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
