"use client";

import React from "react";
import Link from "next/link";
import miscs from "@/styles/miscs.module.css";
import login from "@/styles/login.module.css";
import clsx from "clsx";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";

const loginPage = () => {
  const [pageMode, setPage] = useState(false);

  const toLogin = () => {
    setPage(!pageMode);
  };

  const toRegister = () => {
    setPage(false);
  };

  return (
    <body>
      <div className={`${login.card} ${miscs.center}`}>
        <Link href="/" className={login.back}>
          <FaArrowAltCircleLeft />
        </Link>
        {pageMode && (
          <div>
            <h1 className={login.title}>Inicia Sesion</h1>
            <div className={login.section}>
              <input
                className={`${login.input}`}
                placeholder="E-mail"
                type="email"
              ></input>
              <span className={login.error}>Err</span>
            </div>
            <div className={login.section}>
              <input
                className={`${miscs.input} ${login.input}`}
                placeholder="Contraseña"
                type="password"
              ></input>
              <span className={login.error}>Err</span>
            </div>
            <p className={login.forgot}>Olvidaste tu contraseña?</p>
            <Link href="/dashboard">
              <button className={miscs.block_primary_btn}>
                Iniciar sesion
              </button>
            </Link>
            <div className={login.section}>
              <p>
                No tienes una cuenta?{" "}
                <span className={login.create} onClick={toRegister}>
                  Creala aqui
                </span>
              </p>
            </div>
          </div>
        )}
        {!pageMode && (
          <div>
            <h1 className={login.title}>Registrate</h1>
            <div className={login.section}>
              <input
                className={`${miscs.input} ${login.input}`}
                placeholder="Nombre"
                type="text"
              ></input>
              <span className={login.error}>Err</span>
            </div>
            <div className={login.section}>
              <input
                className={`${miscs.input} ${login.input}`}
                placeholder="E-mail"
                type="email"
              ></input>
              <span className={login.error}>Err</span>
            </div>
            <div className={login.section}>
              <input
                className={`${miscs.input} ${login.input}`}
                placeholder="Contraseña"
                type="password"
              ></input>
              <span className={login.error}>Err</span>
            </div>
            <div className={login.section}>
              <input
                className={`${miscs.input} ${login.input}`}
                placeholder="Confirmar contraseña"
                type="password"
              ></input>
              <span className={login.error}>Err</span>
            </div>
            <button className={miscs.block_primary_btn} onClick={toLogin}>
              Registratre
            </button>
            <div className={login.section}>
              <p>
                Ya tienes una cuenta?{" "}
                <span className={login.create} onClick={toLogin}>
                  Inicia Sesion
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </body>
  );
};

export default loginPage;
