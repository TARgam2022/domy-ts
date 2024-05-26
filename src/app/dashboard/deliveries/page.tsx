"use client";

import React, { useEffect } from "react";
import { FaComputer } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import miscs from "@/styles/miscs.module.css";
import { DeliveriesData } from "@/data/deliveries.interface";
import { deliveries } from "@/data/deliveries.data";
import Delivery from "@/components/Delivery";

const deliveriesPage = () => {
  return (
    <div>
      <h1>Pedidos</h1>
      {deliveries.map((deliver: DeliveriesData) => (
        <p>
          <Delivery
            status={deliver.status}
            destination={deliver.destination}
            deliverer={deliver.deliverer}
            sender={deliver.sender}
          />
        </p>
      ))}
    </div>
  );
};

export default deliveriesPage;
