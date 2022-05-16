import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      class="hero min-h-screen bg-base-200"
    >
      <div class="hero-content flex-col lg:flex-row-reverse gap-14">
        <img
          src={chair}
          class="max-w-xl rounded-lg shadow-2xl"
          alt="dentist chair"
        />
        <div>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          ></DayPicker>
          <p>You picked {format(date, "PP")}.</p>;
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
