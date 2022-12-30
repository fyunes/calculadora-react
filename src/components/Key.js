import React from "react";

const Key = ({ valor, estilo, funcion }) => {
  return (
    <div className="col-2">
      <input
        type="button"
        value={valor}
        className={estilo}
        onClick={() => funcion(valor)}
      />
    </div>
  );
};

export default Key;
