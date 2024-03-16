"use client";
import "@/styles/globals.css";
import React, { useState } from "react";
import home from "@/styles/Dashboard/home.module.css";

const dashboardHome = () => {
  return (
    <div className={home.lines}>
      <h1 className={home.title}>Home</h1>
      Wtf am i doing with my life
    </div>
  );
};

export default dashboardHome;
