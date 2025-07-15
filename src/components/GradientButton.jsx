import React from 'react';

const GradientButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`
        bg-gradient-to-r from-[#035EBB] to-[#002052] text-white rounded-full 
        relative overflow-hidden group
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:scale-105 hover:-translate-y-0.5
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#002052] before:to-[#035EBB]
        before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
        ${className}
      `}
      {...props}
    >
      <span className="relative z-10 transition-all duration-300 group-hover:scale-110">
        {children}
      </span>
    </button>
  );
};

export default GradientButton;