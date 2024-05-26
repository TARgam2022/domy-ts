import React from "react";
import domys from "@/styles/Dashboard/users.module.css";
import miscs from "@/styles/miscs.module.css";
import { CiEdit, CiEraser } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDeliveryDining } from "react-icons/md";

const usersPage = () => {
  return (
    <div>
      <h1 className={domys.title}>Domiciliarios</h1>
      <div className={domys.card}>
        <table>
          <thead>
            <th>
              <p>hola</p>
            </th>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default usersPage;
