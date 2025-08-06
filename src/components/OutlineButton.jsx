import React from 'react';

const OutlineButton = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`
        border-2 border-white text-white rounded-full 
        px-7 py-3 text-sm font-semibold tracking-wide
        shadow-md hover:shadow-lg
        hover:bg-white hover:text-slate-900
        transition-all duration-300 ease-in-out
        hover:scale-[1.01] scale-90
        focus:outline-none focus:ring-2 focus:ring-[#FFAE2B] focus:ring-offset-2
        select-none cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default OutlineButton;