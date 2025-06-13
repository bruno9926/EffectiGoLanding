import React from "react";

const Button = ({ children }) => {
  return (
    <button
      className={[
        "p-2 px-5 rounded-3xl cursor-pointer shadow-lg",
        "text-white font-medium",
        "bg-gradient-to-r from-red-600 to-red-800",
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
