import React from "react";
import navbar from "@/styles/components/navbar.module.css";
import { FaHouseChimney } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={navbar.container}>
      <div className={navbar.brand}>Domy</div>
      <hr />
      <div className={navbar.indicator}>
        <span>Menu</span>
      </div>
      <Link href="/dashboard" className={navbar.section}>
        <div>
          <IoBag />
          Home
        </div>
      </Link>
      <Link href="/dashboard/users" className={navbar.section}>
        <div>
          <MdDeliveryDining />
          Domiciliarios
        </div>
      </Link>
      <div className={navbar.section}>
        <FaHouseChimney />
        Section
      </div>
    </div>
  );
};

export default Navbar;
