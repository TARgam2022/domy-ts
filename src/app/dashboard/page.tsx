"use client";
import "@/styles/globals.css";
import React, { useState } from "react";
import home from "@/styles/Dashboard/home.module.css";

const dashboardHome = () => {
  return (
    <div className={home.lines}>
      <div className={home.card}></div>
    </div>
  );
};

export default dashboardHome;
