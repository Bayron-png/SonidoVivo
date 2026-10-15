import React from "react";

const ButtonAction = ({
  children,
  type = "button",
  variant = "primary",
  onClick,
}) => {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonAction;
