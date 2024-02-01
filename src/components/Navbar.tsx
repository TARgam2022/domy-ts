import React from "react";
import navbar from "@/styles/components/navbar.module.css";
import { FaHouseChimney } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import Link from "next/link";
import { FaSignOutAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className={navbar.container}>
      <div className={navbar.section_a}>
        <div className={navbar.brand}>Domy</div>
        <hr />
        <div className={navbar.indicator}>
          <span>Menu</span>
        </div>
        <Link href="/dashboard" className={navbar.section}>
          <FaHouseChimney />
          Home
        </Link>
        <Link href="/dashboard/users" className={navbar.section}>
          <MdDeliveryDining />
          Domiciliarios
        </Link>
        <Link href="/dashboard/deliveries" className={navbar.section}>
          <IoBag />
          Pedidos
        </Link>
      </div>
      <div className={navbar.section_b}>
        <hr />
        <Link href="/" className={navbar.section}>
          <FaSignOutAlt />
          Cerrar Sesion
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
