import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidenav">
      <a href="#clients">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </div>
  );
}
