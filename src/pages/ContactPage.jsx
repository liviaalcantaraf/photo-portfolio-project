import React from "react";
import { Contact } from "../components/Contact";
import Navbar from "../components/Navbar";
import Toggle from "../components/Toggle";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <Toggle />
      <Contact />
    </div>
  );
};

export default ContactPage;
