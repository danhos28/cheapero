import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button>{props.value}</button>
    </div>
  );
};

export default Button;
