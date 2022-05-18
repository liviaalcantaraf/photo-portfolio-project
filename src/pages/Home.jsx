import React from "react";
import About from "../components/About";
import { Contact } from "../components/Contact";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Toggle from "../components/Toggle";
import "../App.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Toggle />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Home;
