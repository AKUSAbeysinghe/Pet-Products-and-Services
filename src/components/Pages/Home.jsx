import React from "react";
import Features from "./../features";
import Testimonials from "./../testimonials";
import CTA from "../calltoaction";
import Hero from "../Hero";

const Home = () => {
  return (
    <>
      <Hero/>
      <Features />
      <Testimonials />
      <CTA/>
    </>
  );
};

export default Home;