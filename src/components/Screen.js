import React from "react";

const Screen = ({ resultado }) => {
  return (
    <div className="screen">      
      <p id="resultado">{resultado}</p>
    </div>
  );
};

export default Screen;
