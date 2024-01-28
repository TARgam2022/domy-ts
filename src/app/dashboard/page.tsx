"use client";
import "@/styles/globals.css";
import React, { useState } from "react";
import home from "@/styles/Dashboard/home.module.css";

const dashboardHome = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };

  return (
    <div className={home.lines}>
      <button className={isActive ? "salmon" : ""} onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default dashboardHome;
