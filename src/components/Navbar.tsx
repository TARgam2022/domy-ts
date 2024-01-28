import React from "react";
import navbar from "@/styles/components/navbar.module.css";
import { FaHouseChimney } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";

const Navbar = () => {
  return (
    <div className={navbar.container}>
      <div className={navbar.brand}>Domy</div>
      <div className={navbar.section}>
        <FaHouseChimney />
        Menu
      </div>
      <div className={navbar.section}>
        <IoBag />
        Pedidos
      </div>
      <div className={navbar.section}>
        <MdDeliveryDining />
        Domiciliarios
      </div>
    </div>
  );
};

export default Navbar;
