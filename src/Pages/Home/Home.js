import React from "react";
import Banner from "./Banner";
import DentalCare from "./DentalCare";
import Info from "./Info";
import MakeAppoinment from "./MakeAppoinment";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppoinment></MakeAppoinment>
    </div>
  );
};

export default Home;
