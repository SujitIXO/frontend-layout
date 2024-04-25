import React from "react";

const Button = ({ color, text }) => {
  const colorVariants = {
    blue: "bg-[#002D74] hover:bg-[#375b94]",
    red: "bg-red-600 hover:bg-red-500",
    green: "bg-green-600 hover:bg-green-500",
  };

  return (
    <button className={`${colorVariants[color]} inline-block relative overflow-hidden transition-all duration-300 border border-transparent rounded-full uppercase text-white text-xs font-semibold tracking-wider px-3 py-2`}>
      {text}
    </button>
  );
};

export default Button;
