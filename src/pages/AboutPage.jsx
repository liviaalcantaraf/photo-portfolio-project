import React from "react";
import About from "../components/About";
import { Contact } from "../components/Contact";
import Navbar from "../components/Navbar";
import Toggle from "../components/Toggle";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <Toggle />
      <About />
      <Contact />
    </div>
  );
};

export default AboutPage;
