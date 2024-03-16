import React from "react";

import err from "@/styles/404.module.css";

const notfound = () => {
  return (
    <div className={err.center}>
      <h1 className={err.header}>404</h1>
      <h6 className={err.text}>Oops, no Encontramos esta pagina</h6>
    </div>
  );
};

export default notfound;
