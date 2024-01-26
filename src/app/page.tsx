import React from "react";
import miscs from "@/styles/miscs.module.css";
import hero from "@/styles/hero.module.css";
import Link from "next/link";
const page = () => {
  return (
    <div className={hero.center}>
      <h1 className={hero.title}>
        <span className={hero.d}>D</span>omy
      </h1>
      <p>Revisa tus domicilios</p>
      <Link href="/login">
        <button className={miscs.primary_btn}>inicia sesion</button>
      </Link>
    </div>
  );
};

export default page;
