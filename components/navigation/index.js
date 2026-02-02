"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Resource used to create navbar: https://medium.com/@a.pirus/how-to-create-a-responsive-navigation-bar-in-next-js-13-e5540789a017
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;
