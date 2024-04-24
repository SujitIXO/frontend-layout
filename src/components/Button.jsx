import React from 'react'

const Button = ({ color, text }) => {
  
  const colorVariants = {
    blue: 'bg-[#002D74] hover:bg-[#375b94]',
    red: 'bg-red-600 hover:bg-red-500',
  }

    return (
      <button
        className={`${colorVariants[color]} text-white font-bold py-2 px-4 rounded cursor-pointer`}
      >
        {text}
      </button>
    );
  };

export default Button