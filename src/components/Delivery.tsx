"use client";
import React, { useState } from "react";
import deliver from "@/styles/Dashboard/delivery.module.css";

interface DeliveryProps {
  destination: string;
  deliverer: string;
  sender: string;
  status: number;
}

const Delivery: React.FC<DeliveryProps> = ({
  destination,
  deliverer,
  sender,
  status,
}) => {
  let text: string = "";
  const [style, setStyle] = useState({});

  let newStyle = {
    width: `${0}%`,
  };

  switch (status) {
    case 1:
      text = "El domiciliario esta yendo al punto A";
      newStyle = {
        width: `${20}%`,
      };
      break;
    case 2:
      text = "El domiciliario esta en el punto A";
      newStyle = {
        width: `${40}%`,
      };
      break;
    case 3:
      text = "El domiciliario esta esperando tu pedido";
      newStyle = {
        width: `${60}%`,
      };
      break;
    case 4:
      text = "El domiciliario esta yendo al punto B";
      newStyle = {
        width: `${80}%`,
      };
      break;
    case 5:
      text = "El domiciliario termino el pedido";
      newStyle = {
        width: `${100}%`,
      };
      break;
  }

  setTimeout(() => {
    setStyle(newStyle);
  }, 200);

  return (
    <div className={deliver.card}>
      <h3>{text}</h3>
      <div className={deliver.progress}>
        <div className={deliver.progress_done} style={newStyle}></div>
      </div>
      <div className={deliver.container}>
        <h5>{destination}</h5>
        <h5>{sender}</h5>
        <h5>{deliverer}</h5>
      </div>
    </div>
  );
};

export default Delivery;
