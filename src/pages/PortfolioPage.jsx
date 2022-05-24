import React from "react";
import { Contact } from "../components/Contact";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Toggle from "../components/Toggle";

const PortfolioPage = () => {
  return (
    <div>
      <Navbar />
      <Toggle />
      <Gallery />
      <Contact />
    </div>
  );
};

export default PortfolioPage;
