import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 px-20">
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
        cardTitle="Opening Hours"
        cardBody="9:00 Am to 5:00 PM"
      ></InfoCard>
      <InfoCard
        bgClass="bg-accent"
        img={marker}
        cardTitle="Our Location"
        cardBody="Brooklyn, NY 10036, United States"
      ></InfoCard>
      <InfoCard
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
        cardTitle="Contact Us"
        cardBody="+000 123 456789"
      ></InfoCard>
    </div>
  );
};

export default Info;
