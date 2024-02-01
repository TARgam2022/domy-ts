import React from "react";
import { delivery } from "@/models/delivery.model";
import deliver from "@/styles/Dashboard/delivery.module.css";
import { FaComputer } from "react-icons/fa6";
import { IoArrowForward } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const deliveriesPage = () => {
  var deliveries = [
    new delivery("Thomas", "Primavera", "Andres", "Balmoral", "Angela", 1),
    new delivery("Andres", "Primavera", "Angela", "Balmoral", "Canela", 2),
    new delivery("Andres", "Cr 6 #2-6", "Angela", "Balmoral", "Canela", 3),
    new delivery("Thomas", "Primavera", "Andres", "Balmoral", "Angela", 4),
    new delivery("Andres", "Primavera", "Angela", "Balmoral", "Canela", 5),
  ];

  return (
    <div>
      <h1 className={deliver.title}>Domicilios</h1>
      <div className={deliver.delivers}>
        {deliveries.map((el) => (
          <div className={deliver.card}>
            <div className={deliver.info}>
              <span className={deliver.paragraf}>
                <p className={deliver.text}>Remitente:</p>
                {el.sender}
              </span>
              <span className={deliver.paragraf}>
                <p className={deliver.text}>Domiciliario:</p>
                {el.deliveryMan}
              </span>
              <span className={deliver.paragraf}>
                <p className={deliver.text}>Destinario:</p>
                {el.addressee}
              </span>
            </div>
            <hr />
            {el.status == 1 && (
              <div className={deliver.infos}>
                <div className={deliver.status}>
                  <div className={`${deliver.icon}`}>
                    <FaComputer />
                  </div>
                  Pedido Procesado
                </div>
                <IoArrowForward className={deliver.arrow} />
                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <FaShop />
                  </div>
                  En el Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto B
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <FaLocationDot />
                  </div>
                  Pedido Entregado
                </div>
              </div>
            )}
            {el.status == 2 && (
              <div className={deliver.infos}>
                <div className={deliver.status}>
                  <div className={`${deliver.icon}`}>
                    <FaComputer />
                  </div>
                  Pedido Procesado
                </div>
                <IoArrowForward className={deliver.arrow} />
                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <FaShop />
                  </div>
                  En el Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto B
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <FaLocationDot />
                  </div>
                  Pedido Entregado
                </div>
              </div>
            )}
            {el.status == 3 && (
              <div className={deliver.infos}>
                <div className={deliver.status}>
                  <div className={`${deliver.icon}`}>
                    <FaComputer />
                  </div>
                  Pedido Procesado
                </div>
                <IoArrowForward className={deliver.arrow} />
                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <FaShop />
                  </div>
                  En el Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto B
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <FaLocationDot />
                  </div>
                  Pedido Entregado
                </div>
              </div>
            )}
            {el.status == 4 && (
              <div className={deliver.infos}>
                <div className={deliver.status}>
                  <div className={`${deliver.icon}`}>
                    <FaComputer />
                  </div>
                  Pedido Procesado
                </div>
                <IoArrowForward className={deliver.arrow} />
                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <FaShop />
                  </div>
                  En el Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto B
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon_pending}>
                    <FaLocationDot />
                  </div>
                  Pedido Entregado
                </div>
              </div>
            )}
            {el.status == 5 && (
              <div className={deliver.infos}>
                <div className={deliver.status}>
                  <div className={`${deliver.icon}`}>
                    <FaComputer />
                  </div>
                  Pedido Procesado
                </div>
                <IoArrowForward className={deliver.arrow} />
                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <FaShop />
                  </div>
                  En el Punto A
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <MdDeliveryDining />
                  </div>
                  Camino a Punto B
                </div>
                <IoArrowForward className={deliver.arrow} />

                <div className={deliver.status}>
                  <div className={deliver.icon}>
                    <FaLocationDot />
                  </div>
                  Pedido Entregado
                </div>
              </div>
            )}

            <div className={deliver.info}>
              <span className={deliver.paragraf}>
                <p className={deliver.text}>Punto A:</p>
                {el.senderAddress}
              </span>
              <span className={deliver.paragraf}>
                <p className={deliver.text}>Punto B:</p>
                {el.addresseeAddress}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default deliveriesPage;
