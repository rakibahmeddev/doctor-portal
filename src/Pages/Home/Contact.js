import React from "react";
import appointment from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="my-20 py-20"
    >
      <div className="text-center text-white">
        <h3 className="text-xl text-primary ">Contact Us</h3>
        <h2 className="text-3xl font-bold">Stay Connected With Us</h2>
      </div>
      {/* form  */}

      <div className="form-control w-full sm:px-[200px] md:px-[180px] lg:px-[500px] mt-10">
        <form>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered w-full  my-2"
          />
          <input
            type="text"
            placeholder="subject"
            className="input input-bordered w-full  my-2"
          />
          <textarea
            className="textarea w-full textarea-bordered my-2 h-fit-content"
            placeholder="message"
          ></textarea>
          <div className="flex justify-center my-3">
            <></>
            <input
              className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary px-10"
              type="submit"
              value="SUBMIT"
            />
            <></>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
