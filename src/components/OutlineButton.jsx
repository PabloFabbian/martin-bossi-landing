import React from 'react';

const OutlineButton = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={`
        border border-white text-white rounded-full px-6 py-2
        text-sm font-medium transition hover:bg-white hover:text-black
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default OutlineButton;