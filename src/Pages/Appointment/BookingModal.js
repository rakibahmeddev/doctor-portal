import React from "react";
import { format } from "date-fns";
const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    const serviceName = event.target.name.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    console.log(_id, name, slot, serviceName, phone, email);
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl text-secondary text-center mb-5">
            Booking for: {name}
          </h3>
          <div>
            <form
              onSubmit={handleBooking}
              className="grid grid-cols-1 gap-5 justify-items-center "
            >
              <input
                type="text"
                disabled
                value={format(date, "PP")}
                className="input input-bordered bg-[#E6E6E6] w-full "
              />
              <select name="slot" className="select bg-[#E6E6E6]  w-full ">
                {slots.map((slot) => (
                  <option value={slot}>{slots}</option>
                ))}
              </select>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full "
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full "
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full "
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-secondary text-white w-full "
              />
            </form>
          </div>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
