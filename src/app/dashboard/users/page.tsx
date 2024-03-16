import React from "react";
import { user } from "@/models/users.model";
import domys from "@/styles/Dashboard/users.module.css";
import miscs from "@/styles/miscs.module.css";
import { CiEdit, CiEraser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDeliveryDining } from "react-icons/md";
import { userList } from "@/models/variables/users";

const usersPage = () => {
  return (
    <div>
      <h1 className={domys.title}>Domiciliarios</h1>
      <div className={domys.card}>
        <ul className={domys.scroller}>
          <li className={domys.filters}>
            <span className={domys.item}>Nombre</span>
            <span className={domys.item}>Rol</span>
            <span className={domys.item}>Telefono (+57)</span>
            <span className={domys.item}>Activo</span>
            <span className={domys.item}>Ocupado</span>
            <span className={domys.item}>---</span>
            <span className={domys.item}>---</span>
          </li>
          <div className={domys.spacer}></div>
          {userList.map((el) => (
            <li className={domys.list_card}>
              <span className={domys.item}>{el.name}</span>
              <span className={domys.item}>{el.role}</span>
              <span className={domys.item}>{el.cel}</span>
              {el.active && (
                <div className={domys.item}>
                  <FaCheck className={domys.active}></FaCheck>
                </div>
              )}
              {!el.active && (
                <div className={domys.item}>
                  <ImCross className={domys.un_active}></ImCross>
                </div>
              )}
              {el.occupied && (
                <div className={domys.item}>
                  <MdDeliveryDining
                    className={domys.deliver}
                  ></MdDeliveryDining>
                </div>
              )}
              {!el.occupied && (
                <div className={domys.item}>
                  <ImCross className={domys.un_active}></ImCross>
                </div>
              )}
              <div className={domys.item}>
                <span className={domys.edit}>
                  <CiEdit />
                  editar
                </span>
              </div>
              <div className={domys.item}>
                <span className={domys.erase}>
                  <CiEraser />
                  Borrar
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default usersPage;
