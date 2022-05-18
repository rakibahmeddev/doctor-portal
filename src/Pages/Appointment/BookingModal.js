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
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-xl text-secondary text-center mb-5">
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
                class="input input-bordered bg-[#E6E6E6] w-full "
              />
              <select name="slot" class="select bg-[#E6E6E6]  w-full ">
                {slots.map((slot) => (
                  <option value={slot}>{slots}</option>
                ))}
              </select>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                class="input input-bordered w-full "
              />
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                class="input input-bordered w-full "
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                class="input input-bordered w-full "
              />
              <input
                type="submit"
                value="Submit"
                class="btn btn-secondary text-white w-full "
              />
            </form>
          </div>
          <div class="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
