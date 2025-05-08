import React from "react";
import LandingPage from "../components/home/LandingPage";
import Section1 from "../components/home/Section1";
import Section2 from "../components/home/Section2";
import HowItWorks from "../components/home/HowItWorks";
import FeatureHighlights from "../components/home/FeautureHighlights";
import Testimonials from "../components/home/Testimonials";
import CallToAction from "../components/home/CallToAction";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <Section1 />
      <Section2 />
      <HowItWorks />
      <FeatureHighlights />
      <Testimonials />  
      <CallToAction />
    </div>
  );
}; 

export default Home;  