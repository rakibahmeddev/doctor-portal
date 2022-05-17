import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl text-secondary text-center">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-[red]">Try another day.</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available
        </p>
        <div className="card-actions justify-center">
          <button
            disabled={slots.length === 0}
            className="btn btn-secondary text-white"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
