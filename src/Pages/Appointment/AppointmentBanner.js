import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
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
          <div className="bg-white rounded-lg p-4">
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
